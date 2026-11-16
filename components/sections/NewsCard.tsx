'use client'

import { Modal } from 'antd'
import Image from 'next/image'
import { useState } from 'react'
import type { Post } from '@/data/posts'
import { OTHER_SERVICE } from '@/lib/booking'
import { siteConfig } from '@/lib/site-config'
import { noOrphan } from '@/lib/typography'
import { SELECT_SERVICE_EVENT } from '@/components/ui/BookServiceLink'
import { ArrowRightIcon, CalendarIcon, CloseIcon } from '@/components/ui/Icons'

/** Chọn sẵn "Khác / Cần tư vấn" trong form và cuộn tới khu đặt lịch. */
function goToBooking() {
  window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, { detail: OTHER_SERVICE.value }))
  document.getElementById(siteConfig.bookingAnchor)?.scrollIntoView({ block: 'start' })
}

/**
 * Thẻ bài viết kiểu Editorial. Chưa có trang /tin-tuc/[slug] → đọc bài trong cửa sổ.
 * featured: bài lớn, ảnh trên · compact: ảnh trái – chữ phải.
 */
export function NewsCard({ post, variant = 'compact' }: { post: Post; variant?: 'featured' | 'compact' }) {
  const [open, setOpen] = useState(false)
  const titleId = `bai-${post.slug}`
  const featured = variant === 'featured'

  return (
    <article
      className={`group h-full ${
        featured ? 'flex flex-col' : 'grid grid-cols-[7.5rem_1fr] items-start gap-4 sm:grid-cols-[11rem_1fr] sm:gap-6'
      }`}
    >
      <div className={`relative overflow-hidden rounded-2xl bg-primary-light ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes={featured ? '(min-width: 1024px) 700px, 100vw' : '(min-width: 640px) 176px, 120px'}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className={`flex min-w-0 flex-1 flex-col ${featured ? 'pt-6' : ''}`}>
        <p className="text-sm font-semibold text-accent-dark">{post.category}</p>
        <h3
          id={titleId}
          className={`mt-2 font-bold tracking-[-0.01em] text-primary ${
            featured ? 'text-2xl leading-tight lg:text-[2rem]' : 'line-clamp-3 text-lg leading-snug'
          }`}
        >
          {noOrphan(post.title)}
        </h3>
        <p className={`mt-2 text-muted ${featured ? 'line-clamp-3 text-lg' : 'line-clamp-2 text-[0.9375rem] max-sm:hidden'}`}>
          {noOrphan(post.excerpt)}
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-describedby={titleId}
          className="mt-3 inline-flex min-h-11 cursor-pointer items-center gap-2 self-start font-semibold text-primary transition-[gap] duration-200 group-hover:gap-3"
        >
          Đọc bài viết
          <ArrowRightIcon className="size-5" />
        </button>
      </div>

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={760}
        centered
        destroyOnHidden
        title={null}
        closable={{
          'aria-label': 'Đóng bài viết',
          closeIcon: (
            <span className="grid size-10 place-items-center rounded-full bg-white text-ink shadow-soft-lg">
              <CloseIcon className="size-5" />
            </span>
          ),
        }}
      >
        <div className="relative -mx-6 -mt-5 mb-6 aspect-[16/8] overflow-hidden rounded-t-2xl bg-primary-light">
          <Image src={post.image.src} alt={post.image.alt} fill sizes="760px" className="object-cover" />
        </div>
        <p className="text-sm font-semibold text-accent-dark">{post.category}</p>
        <h2 className="mt-2 text-2xl leading-snug font-bold text-primary">{noOrphan(post.title)}</h2>
        <div className="mt-4 space-y-5 text-base leading-relaxed text-ink">
          {post.body.map((block, index) => (
            <section key={block.heading ?? index}>
              {block.heading ? <h3 className="mb-2 text-lg font-bold text-primary">{block.heading}</h3> : null}
              {block.paragraphs?.map((p) => (
                <p key={p} className="mt-2 first:mt-0">
                  {noOrphan(p)}
                </p>
              ))}
              {block.items && (
                <ul className="mt-2 space-y-2 pl-5 marker:text-accent [list-style:disc]">
                  {block.items.map((item) => (
                    <li key={item} className="pl-1">
                      {noOrphan(item)}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Bài viết mang tính tham khảo, không thay thế cho việc thăm khám trực tiếp.
        </p>
        <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-primary-light p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-primary">Cần bác sĩ tư vấn cho trường hợp của bé?</p>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-accent px-5 text-[15px] font-bold whitespace-nowrap text-white transition-[background-color,transform] duration-200 hover:bg-accent-dark active:scale-[0.98]"
            onClick={() => {
              setOpen(false)
              goToBooking()
            }}
          >
            <CalendarIcon className="size-4" />
            Đặt lịch khám
          </button>
        </div>
      </Modal>
    </article>
  )
}
