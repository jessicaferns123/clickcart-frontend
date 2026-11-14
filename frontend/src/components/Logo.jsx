import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils'

// Text + icon logo; replaces the original raster logo image.
// variant="light" is for dark backgrounds (e.g. the footer).
const Logo = ({ variant = 'dark', className }) => {
  return (
    <span className={cn('inline-flex items-center gap-2 select-none', className)}>
      <span className='flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tl from-pink-600 to-purple-600 text-white shadow-md'>
        <ShoppingCart className='h-5 w-5' aria-hidden='true' />
      </span>
      <span className={cn('text-2xl font-extrabold tracking-tight', variant === 'light' ? 'text-white' : 'text-gray-900')}>
        Click<span className='text-pink-600'>Cart</span>
      </span>
    </span>
  )
}

export default Logo
