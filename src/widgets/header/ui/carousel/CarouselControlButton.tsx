import { Button } from '@/shared/ui'
import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type CarouselControlButtonProps = {
    disabled: boolean
    onClick: () => void 
    place: 'left' | 'right'
    timeoutInProgress: boolean  
}
export const CarouselControlButton = ({ disabled, onClick, place, timeoutInProgress }: CarouselControlButtonProps) => {
    const className = clsx('absolute -translate-y-1/2', timeoutInProgress && 'cursor-not-allowed pointer-events-none', place === 'left' ? '-left-10 top-1/2' : '-right-10 top-1/2')
    return (
        <Button
            className={className}
            disabled={disabled}
            onClick={onClick}
            variant='icon'
        >
            {place === 'left' ? <ChevronLeft /> : <ChevronRight />}
        </Button>
    )
}