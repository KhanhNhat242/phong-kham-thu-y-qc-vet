import { posts } from '@/data/posts'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { NewsCard } from './NewsCard'

/**
 * Section 6 – Kiến thức chăm sóc thú cưng. Nền trắng.
 * Editorial Grid (REQUIREMENTS 6.1): 1 bài nổi bật (7 cột) + 2 bài nhỏ xếp dọc (5 cột).
 * Bấm "Đọc bài viết" → đọc trong cửa sổ (chưa có trang /tin-tuc/[slug]).
 */
export function PostsSection() {
  const [lead, ...rest] = posts.slice(0, 3)
  if (!lead) return null

  return (
    <section id="kien-thuc" aria-labelledby="posts-title" className="bg-white py-14 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleId="posts-title"
          label=""
          title={'Cẩm nang chăm sóc thú cưng tại nhà'}
          description="Những lưu ý dễ áp dụng giúp bạn sớm nhận biết dấu hiệu bất thường và chăm sóc bé khỏe mạnh mỗi ngày."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <NewsCard post={lead} variant="featured" />
          </div>
          <ul className="grid content-start gap-8 border-line lg:col-span-5 lg:border-l lg:pl-8">
            {rest.map((post, index) => (
              <li key={post.slug} className={index > 0 ? 'border-t border-line pt-8' : ''}>
                <NewsCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
