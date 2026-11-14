import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { Headphones, Laptop, Smartphone, Star, Watch, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section className='bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16'>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
                <div>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>Latest Electronics at Best Prices</h1>
                    <p className='text-xl mb-6 text-blue-100'>Discover cutting-edge technology with unbeatable deals on smartphones, laptops and more.</p>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
                            <Link to='/products'>Browse Products</Link>
                        </Button>
                        <Button asChild variant='outline' className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent">
                            <Link to='/signup'>Create Account</Link>
                        </Button>
                    </div>
                </div>
                {/* CSS/icon illustration (replaces the original hero image) */}
                <div className='relative mx-auto w-full max-w-[500px] aspect-[5/4]' aria-hidden='true'>
                    <div className='absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 shadow-2xl' />
                    <div className='absolute -top-6 -right-6 h-32 w-32 rounded-full bg-pink-400/40 blur-2xl' />
                    <div className='absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-blue-300/30 blur-2xl' />

                    {/* laptop tile */}
                    <div className='absolute left-[8%] top-[10%] w-[55%] rounded-2xl bg-white p-5 text-gray-900 shadow-xl'>
                        <div className='flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100'>
                            <Laptop className='h-14 w-14 text-blue-600' />
                        </div>
                        <p className='mt-3 font-semibold'>Laptops</p>
                        <div className='mt-1 flex items-center gap-1 text-yellow-500'>
                            <Star className='h-4 w-4 fill-current' /><Star className='h-4 w-4 fill-current' /><Star className='h-4 w-4 fill-current' /><Star className='h-4 w-4 fill-current' /><Star className='h-4 w-4' />
                        </div>
                    </div>

                    {/* phone tile */}
                    <div className='absolute right-[8%] top-[18%] w-[30%] rounded-2xl bg-white p-4 text-gray-900 shadow-xl rotate-3'>
                        <div className='flex h-20 items-center justify-center rounded-xl bg-pink-100'>
                            <Smartphone className='h-10 w-10 text-pink-600' />
                        </div>
                        <p className='mt-2 text-sm font-semibold'>Phones</p>
                    </div>

                    {/* small accessory tiles */}
                    <div className='absolute bottom-[10%] left-[14%] flex gap-4'>
                        <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg -rotate-6'>
                            <Headphones className='h-8 w-8 text-purple-600' />
                        </div>
                        <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg rotate-6'>
                            <Watch className='h-8 w-8 text-blue-600' />
                        </div>
                    </div>

                    {/* deal badge */}
                    <div className='absolute bottom-[12%] right-[8%] flex items-center gap-2 rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold shadow-lg'>
                        <Zap className='h-4 w-4 fill-current' /> Hot deals
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero