import type { GalleryImage } from '@/lib/site'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Container } from './Container'
import { SectionLabel } from './SectionLabel'

type PanGalleryProps = {
  id: string
  index: string
  eyebrow: string
  title: string
  copy: string
  images: GalleryImage[]
  tone?: 'paper' | 'ink'
  reverse?: boolean
}

export function PanGallery({
  id,
  index,
  eyebrow,
  title,
  copy,
  images,
  tone = 'paper',
  reverse = false,
}: PanGalleryProps): JSX.Element {
  const inverted = tone === 'ink'

  return (
    <section
      id={id}
      data-pan={reverse ? 'reverse' : 'forward'}
      className={cn(
        'relative overflow-clip',
        inverted ? 'bg-ink text-paper' : 'bg-paper text-ink'
      )}
    >
      <div data-pan-sticky className="pb-8 pt-20 sm:py-16 md:py-24">
        <span
          aria-hidden
          className={cn(
            'pointer-events-none absolute right-5 top-8 select-none font-display text-[22vw] leading-none md:right-12 md:top-10',
            inverted ? 'text-paper/[0.04]' : 'text-ink/[0.04]'
          )}
        >
          {index}
        </span>

        <Container className="relative flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index={index} inverted={inverted}>
              {eyebrow}
            </SectionLabel>
            <h2 className="mt-5 max-w-3xl font-display text-display-lg font-normal">
              {title}
            </h2>
          </div>
          <p
            className={cn(
              'max-w-sm text-sm leading-relaxed',
              inverted ? 'text-paper/65' : 'text-clay'
            )}
          >
            {copy}
          </p>
        </Container>

        <div className="mt-6 sm:mt-8 md:mt-14">
          <div
            data-pan-track
            className="gallery-scroller flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:gap-4 sm:px-8 lg:px-12 xl:px-16"
          >
            {images.map((image, position) => (
              <figure
                key={image.src}
                className="group w-[68vw] shrink-0 snap-start sm:w-[46vw] md:w-[32vw] lg:w-[36vh] xl:w-[38vh]"
              >
                <div
                  className={cn(
                    'relative aspect-[3/4] overflow-hidden',
                    inverted ? 'bg-white/5' : 'bg-bone'
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 76vw, (max-width: 1024px) 40vw, 24rem"
                    className="object-cover object-center transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption
                  className={cn(
                    'mt-2 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.18em] sm:mt-3',
                    inverted ? 'text-paper/45' : 'text-clay'
                  )}
                >
                  <span>{eyebrow}</span>
                  <span>{String(position + 1).padStart(2, '0')}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <Container className="swipe-hint mt-6 md:mt-8">
          <p
            className={cn(
              'text-[0.6rem] uppercase tracking-[0.2em] lg:hidden',
              inverted ? 'text-paper/40' : 'text-clay'
            )}
          >
            Swipe to see more →
          </p>
        </Container>
      </div>
    </section>
  )
}
