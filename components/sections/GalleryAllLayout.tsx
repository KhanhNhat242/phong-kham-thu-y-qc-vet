import Image from 'next/image'
import Link from 'next/link'
import type { GalleryImage } from '@/data/gallery'
import { ArrowRightIcon, HeartIcon } from '@/components/ui/Icons'

/**
 * Tab "Tất cả" — bố cục 5 cột theo ảnh mẫu khách gửi:
 * cột 1: dọc + ngang · cột 2: dọc (thấp xuống) · giữa: ảnh vuông + nút · cột 4: dọc (thấp xuống) · cột 5: dọc + ngang.
 * Thẻ có "tab" ở góc trên như bìa hồ sơ. Dưới lg: lưới 2 cột.
 * Cần đúng 7 ảnh (thứ tự xem data/gallery.ts).
 */
export function GalleryAllLayout({
  images,
  onOpen,
}: {
  images: GalleryImage[]
  onOpen: (i: number) => void
}) {
  const [a, b, c, d, e, f, g] = images
  const cta = (
    <Link
      href="/thu-vien-anh"
      className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary-dark px-6 text-[15px] font-bold whitespace-nowrap text-white transition-[background-color,transform] duration-200 hover:bg-primary active:scale-[0.98]"
    >
      Xem toàn bộ thư viện ảnh
      <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  )

  return (
    <>
      {/* Desktop */}
      <div className="hidden h-[600px] grid-cols-5 gap-5 lg:grid xl:gap-6">
        <div className="flex flex-col gap-5">
          <Tile img={a} index={0} onOpen={onOpen} tab="right" className="flex-[1.9]" />
          <Tile img={b} index={1} onOpen={onOpen} className="flex-1" />
        </div>
        <div className="flex flex-col pt-14">
          <Tile img={c} index={2} onOpen={onOpen} tab="right" className="flex-1" />
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <Tile img={d} index={3} onOpen={onOpen} className="aspect-square w-full" />
        </div>
        <div className="flex flex-col pt-10">
          <Tile img={e} index={4} onOpen={onOpen} tab="left" className="flex-1" />
        </div>
        <div className="flex flex-col gap-5">
          <Tile img={f} index={5} onOpen={onOpen} tab="left" className="flex-[1.6]" />
          <Tile img={g} index={6} onOpen={onOpen} className="flex-1" />
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <Tile
              key={img.src}
              img={img}
              index={i}
              onOpen={onOpen}
              tab={i % 2 === 0 ? 'right' : 'left'}
              className={i === images.length - 1 ? 'col-span-2 aspect-[16/10]' : 'aspect-[3/4]'}
            />
          ))}
        </div>
      </div>
    </>
  )
}

function Tile({
  img,
  index,
  onOpen,
  tab,
  className = '',
}: {
  img?: GalleryImage
  index: number
  onOpen: (i: number) => void
  tab?: 'left' | 'right'
  className?: string
}) {
  if (!img) return null
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`Phóng to ảnh: ${img.alt}`}
      data-hero="up"
      style={{ '--reveal-delay': `${index * 60}ms` } as React.CSSProperties}
      className={`group relative block min-h-0 overflow-hidden rounded-[22px] bg-primary-light ${className}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(min-width: 1024px) 20vw, 50vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      {tab && <FolderNotch side={tab} />}
    </button>
  )
}

/**
 * Tạo hình "tab bìa hồ sơ": che một phần mép trên bằng màu nền section (surface),
 * kèm 2 góc lượn để mép cắt mềm. `side` = phía có tab nhô lên.
 */
function FolderNotch({ side }: { side: 'left' | 'right' }) {
  const H = 22 // chiều cao phần bị cắt
  const R = 16 // bán kính lượn
  const notchSide = side === 'right' ? 'left-0' : 'right-0'
  const fillet = (corner: 'tl' | 'tr') =>
    `radial-gradient(circle at ${corner === 'tl' ? '100% 100%' : '0% 100%'}, transparent ${R - 0.5}px, var(--qc-surface) ${R}px)`

  return (
    <span aria-hidden="true" className="pointer-events-none absolute -inset-x-px -top-px">
      {/* Phần cắt */}
      <span
        className={`absolute top-0 ${notchSide} w-[52%] bg-surface ${side === 'right' ? 'rounded-br-[16px]' : 'rounded-bl-[16px]'}`}
        style={{ height: H + 1 }}
      />
      {/* Góc lượn của tab */}
      <span
        className="absolute top-0"
        style={{
          width: R,
          height: R,
          [side === 'right' ? 'left' : 'right']: '52%',
          background: fillet(side === 'right' ? 'tl' : 'tr'),
        }}
      />
      {/* Góc lượn của thân thẻ bên dưới phần cắt */}
      <span
        className="absolute"
        style={{
          top: H,
          width: R,
          height: R,
          [side === 'right' ? 'left' : 'right']: 0,
          background: fillet(side === 'right' ? 'tl' : 'tr'),
        }}
      />
    </span>
  )
}
