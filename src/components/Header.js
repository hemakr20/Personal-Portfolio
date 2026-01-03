import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed w-full z-40 flex justify-between px-8 py-4 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 shadow-2xl">
            <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-bold text-accent-teal text-xl tracking-tighter font-hero-font" 
                href="/"
            >
                &lt;Hema /&gt;
            </motion.a>
            
            <nav className="hidden md:block">
                <ul className="flex space-x-8 text-gray-300 font-medium">
                    {navLinks.map((link, i) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <a href={link.href} className="hover:text-accent-teal transition-colors duration-200 relative group font-hero-font text-sm">
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-teal transition-all group-hover:w-full"></span>
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            <AnimatePresence>
                {toggleMenu && (
                    <motion.nav 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-screen w-full bg-dark-bg shadow-2xl z-50 md:hidden flex flex-col items-center justify-center"
                    >
                        <ul className="flex flex-col items-center space-y-8 text-gray-300 text-3xl font-bold font-hero-font">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        onClick={() => setToggleMenu(false)} 
                                        href={link.href} 
                                        className="hover:text-accent-teal transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button 
                            onClick={() => setToggleMenu(false)} 
                            className="absolute top-5 right-5"
                        >
                            <XMarkIcon className="text-accent-teal h-8 w-8" />
                        </button>
                    </motion.nav>
                )}
            </AnimatePresence>

            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
                <Bars3Icon className='text-accent-teal h-8 w-8'/>
            </button>
        </header>
    )
}
