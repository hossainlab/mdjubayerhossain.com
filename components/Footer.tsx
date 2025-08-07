
import React from 'react';
import { Link } from 'react-router-dom';
import { IconGithub, IconLinkedin, IconTwitter, IconOrcid, IconScholar } from './Icons';

const Footer: React.FC = () => {
    const socialLinks = [
        { name: 'Twitter', icon: IconTwitter, href: '#' },
        { name: 'LinkedIn', icon: IconLinkedin, href: '#' },
        { name: 'GitHub', icon: IconGithub, href: '#' },
        { name: 'Google Scholar', icon: IconScholar, href: '#' },
        { name: 'ORCID', icon: IconOrcid, href: '#' },
    ];


    return (
        <footer className="bg-gray-50 dark:bg-gray-950/50 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Md. Jubayer Hossain</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-base">
                            Researcher | Educator | Entrepreneur
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">Stay Updated</h3>
                                <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                                    Subscribe to my newsletter for the latest research updates and insights.
                                </p>
                                <div className="mt-4">
                                    <form 
                                        action="https://hossainlab.kit.com/3d1ccc26ea/subscriptions" 
                                        method="post"
                                        target="_blank"
                                        className="sm:flex sm:max-w-md"
                                    >
                                        <label htmlFor="footer-email" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            name="email_address"
                                            id="footer-email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none min-w-0 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                            placeholder="Enter your email"
                                        />
                                        <input type="hidden" name="utf8" value="✓" />
                                        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                            <button
                                                type="submit"
                                                className="w-full bg-primary-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                    <div className="mt-3">
                                        <Link
                                            to="/newsletter"
                                            className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium"
                                        >
                                            Learn more about the newsletter →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 tracking-wider uppercase">Contact</h3>
                                <div className="mt-4 space-y-4">
                                    <p className="text-base text-gray-500 dark:text-gray-400">
                                        DeepBio Limited 
                                    </p>
                                    <p className="text-base text-gray-500 dark:text-gray-400">
                                        <a href="mailto:contact.jubayerhossain@gmail.com" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                                            contact.jubayerhossain@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} Md. Jubayer Hossain. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
