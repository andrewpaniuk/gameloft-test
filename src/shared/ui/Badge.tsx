export const Badge = ({ children, count}: { children: React.ReactNode, count: number }) => {

    const correctCount = count > 9 ? '9+' : count.toLocaleString()

    return (
        <span className='relative'>
            {children}
            {count > 0 && <span className='absolute top-0 -right-[7px] text-xs font-medium rounded-full bg-red-500 text-white w-5 h-5 flex items-center justify-center pointer-events-none'>{correctCount}</span>}
        </span>
    )
}