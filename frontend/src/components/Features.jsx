import { Palette, SlidersHorizontal, UserRound } from 'lucide-react'
import React from 'react'

// Describes frontend capabilities that actually exist in this showcase
// (rather than store promises such as shipping, payments or support).
const Features = () => {
  return (
    <section className='py-12 bg-muted/50'>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='grid md:grid-cols-3 gap-8'>
                <div className='flex items-center space-x-4'>
                    <div className='h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center'>
                        <SlidersHorizontal className='h-6 w-6 text-blue-600'/>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Search &amp; Filters</h3>
                        <p className='text-muted-foreground'>Client-side search, category, brand, price and sort controls</p>
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center'>
                        <Palette className='h-6 w-6 text-green-600'/>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Responsive UI</h3>
                        <p className='text-muted-foreground'>Built with Tailwind CSS and shadcn/ui components</p>
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center'>
                        <UserRound className='h-6 w-6 text-purple-600'/>
                    </div>
                    <div>
                        <h3 className='font-semibold'>Account Screens</h3>
                        <p className='text-muted-foreground'>Signup, login and profile UI (needs the backend API)</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Features
