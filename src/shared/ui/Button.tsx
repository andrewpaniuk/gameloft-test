import clsx from 'clsx'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'icon'
}

export const Button = ({ children, className, variant = 'default', ...props }: ButtonProps) => {
    const baseClasses = 'cursor-pointer text-sm bg-blue-500 text-white rounded-md transition-colors'
    const variantClasses = {
        default: 'bg-blue-500 text-white px-4 py-2',
        icon: 'bg-transparent !text-gray-400 !hover:text-gray-700 hover:bg-gray-100 !rounded-full p-2 &>svg:w-[100px]'
    }
    const classes = clsx(baseClasses, variantClasses[variant], className)
    return (
        <button className={classes} {...props}>{children}</button>
    )
}