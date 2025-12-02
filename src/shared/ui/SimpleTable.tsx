type SimpleTableProps = {
    headers: { name: string, key: string, className?: string }[]
    children: React.ReactNode
}

export const SimpleTable = ({ headers, children }: SimpleTableProps) => {
    return (
        <div className='w-full border rounded-lg overflow-hidden border-gray-200 shadow-sm'>
            <table className='w-full rounded-lg table-auto'>
                <thead className='bg-gray-100 rounded-t-lg'>
                    <tr className='border-b border-gray-300'>
                        {headers.map((header) => (
                            <th className={header.className} key={header.key}>{header.name}</th>
                        ))}
                    </tr>
                </thead>    
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}