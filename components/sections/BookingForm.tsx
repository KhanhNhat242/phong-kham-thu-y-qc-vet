'use client'

import { DatePicker, Form, Input, Radio, Select } from 'antd'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { useEffect, useState, useTransition } from 'react'
import { submitBooking } from '@/app/actions/booking'
import {
  PET_TYPES,
  PHONE_PATTERN,
  SERVICE_OPTIONS,
  TIME_SLOTS,
  normalizePhone,
  type BookingField,
} from '@/lib/booking'
import { siteConfig } from '@/lib/site-config'
import { SELECT_SERVICE_EVENT } from '@/components/ui/BookServiceLink'
import { CheckIcon, PhoneIcon, SendIcon, SpinnerIcon } from '@/components/ui/Icons'
import { noOrphan } from '@/lib/typography'

type FormValues = {
  ownerName: string
  phone: string
  petType: string
  petName?: string
  service: string
  date?: Dayjs
  timeSlot?: string
  note?: string
}

/** Form đặt lịch (REQUIREMENTS 7.3): validate client (antd) + server (Server Action). */
export function BookingForm() {
  const [form] = Form.useForm<FormValues>()
  const [pending, startTransition] = useTransition()
  const [success, setSuccess] = useState<string | null>(null)
  const [serverError, setServerError] = useState<string | null>(null)

  // Nút "Đặt lịch" trên thẻ dịch vụ → chọn sẵn dịch vụ
  useEffect(() => {
    const onSelect = (e: Event) => {
      const slug = (e as CustomEvent<string>).detail
      setSuccess(null)
      form.setFieldValue('service', slug)
    }
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect)
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect)
  }, [form])

  const onFinish = (values: FormValues) => {
    setServerError(null)
    startTransition(async () => {
      try {
        const result = await submitBooking({
          ownerName: values.ownerName,
          phone: values.phone,
          petType: values.petType,
          petName: values.petName,
          service: values.service,
          date: values.date ? values.date.format('YYYY-MM-DD') : undefined,
          timeSlot: values.timeSlot,
          note: values.note,
        })
        if (result.ok) {
          setSuccess(result.message)
          form.resetFields()
        } else {
          setServerError(result.message)
          form.setFields(
            (Object.entries(result.errors) as [BookingField, string][]).map(([name, error]) => ({
              name,
              errors: [error],
            })),
          )
        }
      } catch {
        setServerError(`Chưa gửi được yêu cầu. Bạn vui lòng thử lại hoặc gọi ${siteConfig.hotline.display}.`)
      }
    })
  }

  if (success) {
    return (
      <div role="status" className="lightbox-fade rounded-2xl bg-surface p-8 text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-full bg-primary text-white">
          <CheckIcon className="size-8" />
        </span>
        <p className="mt-5 text-xl font-bold text-primary">Cảm ơn bạn đã tin tưởng QC VET!</p>
        <p className="mx-auto mt-2 max-w-md text-base leading-relaxed text-muted">{noOrphan(success)}</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={siteConfig.telHref}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-accent px-6 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-accent-dark active:scale-[0.98]"
          >
            <PhoneIcon className="size-4" />
            Gọi {siteConfig.hotline.display}
          </a>
          <button
            type="button"
            onClick={() => setSuccess(null)}
            className="inline-flex h-11 items-center justify-center rounded-xl border-2 border-primary px-6 text-[15px] font-bold text-primary transition-colors duration-200 hover:bg-primary hover:text-white active:scale-[0.98]"
          >
            Gửi yêu cầu khác
          </button>
        </div>
      </div>
    )
  }

  return (
    <Form<FormValues>
      form={form}
      layout="vertical"
      requiredMark={(label, { required }) => (
        <>
          {label}
          {required && <span className="ml-1 text-accent">*</span>}
        </>
      )}
      onFinish={onFinish}
      initialValues={{ petType: 'cho' }}
      disabled={pending}
      className="[&_.ant-form-item-label>label]:font-semibold [&_.ant-form-item-label>label]:text-ink"
    >
      <div className="grid gap-x-5 sm:grid-cols-2">
        <Form.Item
          name="ownerName"
          label="Họ tên chủ nuôi"
          rules={[
            { required: true, whitespace: true, message: 'Vui lòng nhập họ tên' },
            { max: 80, message: 'Họ tên quá dài' },
          ]}
        >
          <Input placeholder="Nguyễn Văn A" autoComplete="name" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Số điện thoại"
          extra="10 số, bắt đầu bằng 0"
          normalize={(v: string) => v?.replace(/[^\d\s.\-]/g, '')}
          rules={[
            { required: true, message: 'Vui lòng nhập số điện thoại' },
            {
              validator: (_, value?: string) =>
                !value || PHONE_PATTERN.test(normalizePhone(value))
                  ? Promise.resolve()
                  : Promise.reject(new Error('Số điện thoại gồm 10 số, bắt đầu bằng 0')),
            },
          ]}
        >
          <Input placeholder="09xx xxx xxx" inputMode="tel" autoComplete="tel" />
        </Form.Item>

        <Form.Item name="petType" label="Loại thú cưng" rules={[{ required: true, message: 'Vui lòng chọn' }]}>
          <Radio.Group
            optionType="button"
            buttonStyle="solid"
            options={PET_TYPES.map((p) => ({ value: p.value, label: p.label }))}
            className="flex! w-full [&_.ant-radio-button-wrapper]:flex-1 [&_.ant-radio-button-wrapper]:text-center"
          />
        </Form.Item>

        <Form.Item name="petName" label="Tên thú cưng" rules={[{ max: 50, message: 'Tên quá dài' }]}>
          <Input placeholder="Ví dụ: Mochi" />
        </Form.Item>

        <Form.Item
          name="service"
          label="Dịch vụ quan tâm"
          className="sm:col-span-2"
          rules={[{ required: true, message: 'Vui lòng chọn dịch vụ' }]}
        >
          <Select placeholder="Chọn dịch vụ" options={SERVICE_OPTIONS} />
        </Form.Item>

        <Form.Item name="date" label="Ngày mong muốn">
          <DatePicker
            className="w-full"
            format="DD/MM/YYYY"
            placeholder="Chọn ngày"
            disabledDate={(d) => d.isBefore(dayjs().startOf('day'))}
            inputReadOnly
          />
        </Form.Item>

        <Form.Item name="timeSlot" label="Khung giờ">
          <Select placeholder="Sáng / Chiều / Tối" allowClear options={TIME_SLOTS.map((t) => ({ ...t }))} />
        </Form.Item>

        <Form.Item
          name="note"
          label="Mô tả tình trạng / triệu chứng"
          className="mb-9! sm:col-span-2"
          rules={[{ max: 1000, message: 'Tối đa 1000 ký tự' }]}
        >
          <Input.TextArea rows={3} placeholder="Ví dụ: bé bỏ ăn 2 ngày, hay nôn, mệt mỏi…" showCount maxLength={1000} />
        </Form.Item>
      </div>

      {serverError && (
        <p role="alert" className="mb-4 rounded-xl border border-accent/30 bg-accent/5 px-4 py-3 text-[15px] font-semibold text-accent-dark">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        aria-busy={pending}
        className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-accent text-base font-bold text-white transition-[background-color,transform] duration-200 hover:bg-accent-dark active:scale-[0.98] disabled:cursor-wait disabled:bg-accent-dark"
      >
        {pending ? <SpinnerIcon className="qc-spin size-5" /> : <SendIcon className="size-5" />}
        {pending ? 'Đang gửi…' : 'Gửi yêu cầu đặt lịch'}
      </button>
      <p className="mt-3 text-center text-sm text-muted">
        Cần gấp? Gọi ngay{' '}
        <a href={siteConfig.telHref} className="font-bold text-primary hover:text-accent">
          {siteConfig.hotline.display}
        </a>
      </p>
    </Form>
  )
}
