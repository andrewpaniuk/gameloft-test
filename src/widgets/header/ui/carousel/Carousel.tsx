'use client'

import React from 'react'
import { CarouselDotNavigation } from './CarouselDotNavigation'
import { useCarousel } from './use-carousel'
import { CarouselControlButton } from './CarouselControlButton'

type CarouselProps = {
  children: React.ReactNode
  interval?: number
}

export const Carousel = ({
    children,
    interval = 5000,
}: CarouselProps) => {

    const { slides, showControls, handleTransitionEnd, handleTouchStart, handleTouchMove, nextItem, previousItem, setCurrentIndex, isTransitionEnabled, timeoutInProgress, visibleItemsCount, originalItemsLength, loop, currentIndex, stopAutoplay, resumeAutoplay } = useCarousel(children, interval)

    const transformTranslateX = `translateX(-${currentIndex * (100 / visibleItemsCount)}%)`

    return (
        <div className='flex flex-col w-full' onMouseEnter={stopAutoplay} onMouseLeave={resumeAutoplay}>
            <div className='relative w-full flex'>
                {showControls && (
                    <CarouselControlButton
                        disabled={timeoutInProgress}
                        onClick={previousItem}
                        place='left'
                        timeoutInProgress={timeoutInProgress}
                    />
                )}
                <div
                    className='overflow-hidden size-full'
                    onTouchMove={handleTouchMove}
                    onTouchStart={handleTouchStart}
                >
                    <div
                        className='flex transition-all 250ms linear scrollbar-width: none;'
                        onTransitionEnd={() => handleTransitionEnd()}
                        style={{
                            transform: transformTranslateX,
                            transition: !isTransitionEnabled ? 'none' : undefined
                        }}
                    >
                        {slides.map((slide, index) => {
                            return (
                                <div className='shrink-0 grow px-2 select-none' key={index} style={{ width: `calc(100% / ${visibleItemsCount})` }}>
                                    {slide}
                                </div>
                            )
                        })}
                    </div>
                </div>
                {showControls && (
                    <CarouselControlButton
                        disabled={timeoutInProgress}
                        onClick={nextItem}
                        place='right'
                        timeoutInProgress={timeoutInProgress}
                    />
                )}
            </div>
            {showControls && (
                <CarouselDotNavigation currentIndex={currentIndex} loop={loop} onClick={setCurrentIndex} originalItemsLength={originalItemsLength} visibleItemsCount={visibleItemsCount} />
            )}
        </div>
    )
}
