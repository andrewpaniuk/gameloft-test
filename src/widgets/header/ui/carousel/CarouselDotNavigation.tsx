import clsx from 'clsx'

type CarouselDotNavigationProps = {
    loop: boolean
    visibleItemsCount: number
    originalItemsLength: number
    currentIndex: number
    onClick: (index: number) => void
}

export const CarouselDotNavigation = ({ loop, visibleItemsCount, originalItemsLength, currentIndex, onClick }: CarouselDotNavigationProps) => {
    const handleDotClick = (index: number) => () => {
        onClick(index + visibleItemsCount)
    }

    const localShow = loop ? visibleItemsCount : 0
    const localLength = loop
        ? originalItemsLength
        : Math.ceil(originalItemsLength / visibleItemsCount)
    const calculatedActiveIndex =
      currentIndex - localShow < 0
          ? originalItemsLength + (currentIndex - localShow)
          : currentIndex - localShow

    return (
        <div className='flex items-center gap-2 p-4 justify-center'>
            {Array.from({ length: localLength }, (_, index) => {
                return (
                    <div className={clsx('w-2 h-2 rounded-full cursor-pointer transition-all', calculatedActiveIndex === index ? 'bg-gray-500 w-[20px] cursor-default!' : 'bg-gray-400')} data-index={index} key={index} onClick={handleDotClick(index)} />
                )
            })}
        </div>
    )
}