import { BasketButton } from './BasketButton'
import { FavoritesButton } from './FavoritesButton'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className='border-b border-b-gray-200 shadow-sm'>
            <div className='container mx-auto flex justify-between items-center py-2'>
                <Link href='/'>Gameloft Test Task</Link>
                <div className='flex gap-2'>
                    <FavoritesButton />
                    <BasketButton />
                </div>
            </div>
        </header>
    )
}