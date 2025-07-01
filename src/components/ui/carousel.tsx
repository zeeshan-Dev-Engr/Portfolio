"use client"

import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: Parameters<typeof useEmblaCarousel>[0]
  plugins?: any[]
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

const CarouselContext = React.createContext<{
  api: CarouselApi | null
} | null>(null)

export function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins = [],
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "vertical" ? "y" : "x",
      },
      plugins
    )

    React.useEffect(() => {
      if (!setApi) return
      setApi(emblaApi)
    }, [emblaApi, setApi])

    return (
      <CarouselContext.Provider value={{ api: emblaApi }}>
        <div ref={ref} className={className} {...props}>
          <div ref={emblaRef} className="overflow-hidden">
            {children}
          </div>
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={"flex" + (className ? ` ${className}` : "")}
      {...props}
    />
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={"relative min-w-0 flex-[0_0_auto] " + (className ? className : "")}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { api } = useCarousel()
  return (
    <button
      ref={ref}
      type="button"
      aria-label="Previous slide"
      className={"absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white dark:bg-gray-800 shadow p-2 hover:bg-primary hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors flex " + (className ? className : "")}
      onClick={() => api && api.scrollPrev()}
      {...props}
    >
      <span className="sr-only">Previous slide</span>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
    </button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { api } = useCarousel()
  return (
    <button
      ref={ref}
      type="button"
      aria-label="Next slide"
      className={"absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white dark:bg-gray-800 shadow p-2 hover:bg-primary hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors flex " + (className ? className : "")}
      onClick={() => api && api.scrollNext()}
      {...props}
    >
      <span className="sr-only">Next slide</span>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
    </button>
  )
})
CarouselNext.displayName = "CarouselNext"

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } 