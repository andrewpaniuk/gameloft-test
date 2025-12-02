import clsx from 'clsx'

export const Card = ({ children, className}: { children: React.ReactNode, className?: string }) => {
    return <div className={clsx('border border-gray-200 rounded-lg shadow-md flex flex-col', className)}>{children}</div>
}

export const CardHeader = ({ children, className}: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={className}>{children}</div>
    )
}

export const CardTitle = ({ children}: { children: React.ReactNode }) => {
    return (
        <h3 className='text-2xl font-bold p-4'>{children}</h3>
    )
}

export const CardContent = ({ children}: { children: React.ReactNode }) => {
    return (
        <div className='px-4 pb-4'>{children}</div>
    )
}

export const CardFooter = ({ children, className}: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={clsx('px-4 pb-4 mt-auto', className)}>{children}</div>
    )
}