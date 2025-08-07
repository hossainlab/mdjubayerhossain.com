
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { IconLogo, IconMenu, IconX } from './Icons';

interface HeaderProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Research', path: '/research' },
        { name: 'Publications', path: '/publications' },
        { name: 'Teaching', path: '/teaching' },
        { name: 'Entrepreneurship', path: '/entrepreneurship' },
        { name: 'Newsletter', path: '/newsletter' },
        { name: 'News', path: '/news' },
        { name: 'CV', path: '/cv' },
        { name: 'Contact', path: '/contact' },
    ];

    const linkClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800";
    const activeLinkClass = "bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300";

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2 text-primary-600 dark:text-primary-400">
                            <IconLogo className="h-8 w-8" />
                            <span className="font-bold text-lg">Md. Jubayer Hossain</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                         <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <IconX className="block h-6 w-6" /> : <IconMenu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClass : ''}`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;