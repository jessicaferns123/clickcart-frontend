import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const exploreLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/cart', label: 'Cart' },
    { to: '/login', label: 'Login' },
    { to: '/signup', label: 'Sign Up' },
]

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-200 py-10'>
        <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
            {/* info */}
            <div className='mb-6 md:mb-0'>
                <Link to='/' aria-label='ClickCart home'>
                    <Logo variant='light' />
                </Link>
                <p className='mt-2 text-sm'>Powering Your World with the Best in Electronics.</p>
                <p className='mt-2 text-sm max-w-xs text-gray-400'>
                    ClickCart is an educational, in-progress frontend portfolio project. It is not a real store and does not process orders or payments.
                </p>
            </div>
            {/* site navigation (existing routes only) */}
            <nav className='mb-6 md:mb-0' aria-label='Footer'>
                <h3 className='text-xl font-semibold'>Explore</h3>
                <ul className='mt-2 text-sm space-y-2'>
                    {
                        exploreLinks.map(({to, label}) => (
                            <li key={to}>
                                <Link to={to} className='hover:text-pink-400 hover:underline'>{label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            {/* tech stack (replaces placeholder social icons) */}
            <div className='mb-6 md:mb-0'>
                <h3 className='text-xl font-semibold'>Built With</h3>
                <ul className='mt-2 text-sm space-y-2'>
                    <li>React &amp; Vite</li>
                    <li>Redux Toolkit</li>
                    <li>React Router</li>
                    <li>Tailwind CSS &amp; shadcn/ui</li>
                </ul>
            </div>
            {/* newsletter: UI demo only, intentionally disabled */}
            <div>
                <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
                <p className='mt-2 text-sm'>
                    <span className='mr-2 rounded bg-gray-700 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-gray-200'>Demo only</span>
                </p>
                <p id='newsletter-note' className='mt-2 text-sm text-gray-400'>Newsletter signup is a non-functional UI demo. No emails are collected or sent.</p>
                <form className='mt-4 flex' onSubmit={(e) => e.preventDefault()} aria-describedby='newsletter-note'>
                    <input type="email" disabled aria-label='Email address (demo, disabled)' placeholder='Your email address' className='w-full p-2 rounded-l-md bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-not-allowed opacity-70'/>
                    <button type='submit' disabled className='bg-pink-600 text-white px-4 rounded-r-md cursor-not-allowed opacity-70'>Subscribe</button>
                </form>
            </div>
        </div>
        {/* bottom section */}
        <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
            <p>&copy; {new Date().getFullYear()} <span className='text-pink-600'>ClickCart</span>. Frontend portfolio project.</p>
        </div>
    </footer>
  )
}

export default Footer