
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
        { name: 'Press', path: '/press' },
        { name: 'CV', path: '/cv' },
        { name: 'Contact', path: '/contact' },
    ];

    const linkClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800";
    const activeLinkClass = "bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300";

    return (
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    <div className="flex items-center flex-shrink-0 min-w-0">
                        <Link to="/" className="flex items-center gap-2 text-primary-600 dark:text-primary-400 min-w-0">
                            <IconLogo className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" />
                            <span className="font-bold text-sm sm:text-base lg:text-lg truncate">
                                <span className="hidden sm:inline">Md. Jubayer Hossain</span>
                                <span className="sm:hidden">M. J. Hossain</span>
                            </span>
                        </Link>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="flex items-center space-x-2 xl:space-x-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => `px-2 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${isActive ? activeLinkClass : ''}`}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    
                    {/* Desktop Theme Toggle */}
                    <div className="hidden lg:block">
                         <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                    </div>
                    
                    {/* Mobile Controls */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <IconX className="block h-5 w-5 sm:h-6 sm:w-6" /> : <IconMenu className="block h-5 w-5 sm:h-6 sm:w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                    <div className="px-4 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive ? activeLinkClass : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
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