import { VIEWPORTS } from '@/shared/constants'
import React, { Children } from 'react'

export const useCarousel = (children: React.ReactNode, interval: number) => {
    const originalItems = Children.toArray(children)
    const originalItemsLength = originalItems.length

    const getItemsPerView = () => {
        if (typeof window === 'undefined') return 1
        if (window.innerWidth >= VIEWPORTS.desktop.width) return 3
        if (window.innerWidth >= VIEWPORTS.tablet.width) return 2
        return 1
    }
    const [visibleItemsCount, setVisibleItemsCount] = React.useState(getItemsPerView())

    const loop = originalItemsLength > visibleItemsCount

    const [timeoutInProgress, setTimeoutInProgress] = React.useState(false)
    const [currentIndex, setCurrentIndex] = React.useState(loop ? visibleItemsCount : 0)
    
    const [isTransitionEnabled, setTransitionEnabled] = React.useState(true)
    const [touchPosition, setTouchPosition] = React.useState<number | null>(null)

    const nextItem = () => {
        const isOnEdgeForward = currentIndex > originalItemsLength
        if (isOnEdgeForward) {
            setTimeoutInProgress(true)
        }
    
        if (loop || currentIndex < originalItemsLength - visibleItemsCount) {
            setCurrentIndex((prevState) => prevState + 1)
        }
    }
    
    const previousItem = () => {
        const isOnEdgeBack = loop
            ? currentIndex <= visibleItemsCount
            : currentIndex === 0
    
        if (isOnEdgeBack) {
            setTimeoutInProgress(true)
        }
    
        if (loop || currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1)
        }
    }

    const autoplayRef = React.useRef<(() => void) | null>(nextItem)

    const stopAutoplay = () => {
        autoplayRef.current = null
    }

    const resumeAutoplay = () => {
        autoplayRef.current = nextItem
    }

    React.useEffect(() => {
        const play = () => autoplayRef.current?.()
        const autoplayId = setInterval(play, interval)
        return () => clearInterval(autoplayId)
    }, [interval])
    
    React.useEffect(() => {
        const handleResize = () => setVisibleItemsCount(getItemsPerView())
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    
    React.useEffect(() => {
        if (loop) {
            if (
                currentIndex === visibleItemsCount ||
            currentIndex === originalItemsLength
            ) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, loop, visibleItemsCount, originalItemsLength])
    
    
    
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }
    
    
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchDown = touchPosition
    
        if (touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            nextItem()
        }
    
        if (diff < -5) {
            previousItem()
        }
    
        setTouchPosition(null)
    }
    
    const handleTransitionEnd = () => {
        if (loop) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(originalItemsLength)
            } else if (currentIndex === originalItemsLength + visibleItemsCount) {
                setTransitionEnabled(false)
                setCurrentIndex(visibleItemsCount)
            }
        }
    
        setTimeoutInProgress(false)
    }
    
    const extraPreviousItems = Array.from({ length: visibleItemsCount }, (_, index) => {
        return originalItems[originalItemsLength - 1 - index]
    }).reverse()
      
    const extraNextItems = Array.from({ length: visibleItemsCount }, (_, index) => {
        return originalItems[index]
    })
    
    const showControls = originalItemsLength > visibleItemsCount && visibleItemsCount !== 1
    
    const slides = [
        ...extraPreviousItems,
        ...originalItems,
        ...extraNextItems
    ]

    return {
        isTransitionEnabled,
        timeoutInProgress,
        visibleItemsCount,
        originalItemsLength,
        loop,
        currentIndex,
        slides,
        showControls,
        handleTransitionEnd,
        handleTouchStart,
        handleTouchMove,
        nextItem,
        previousItem,
        setCurrentIndex,
        stopAutoplay,
        resumeAutoplay,
    }
}