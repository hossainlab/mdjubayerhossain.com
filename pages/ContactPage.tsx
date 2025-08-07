import React from 'react';
import Section from '../components/Section';
import { IconGithub, IconLinkedin, IconTwitter, IconOrcid, IconScholar } from '../components/Icons';

const ContactPage: React.FC = () => {
   const socialLinks = [
        { name: 'Twitter', icon: IconTwitter, href: '#' },
        { name: 'LinkedIn', icon: IconLinkedin, href: '#' },
        { name: 'GitHub', icon: IconGithub, href: '#' },
        { name: 'Google Scholar', icon: IconScholar, href: '#' },
        { name: 'ORCID', icon: IconOrcid, href: '#' },
    ];

  return (
    <Section title="Contact Me" subtitle="I'm open to collaborations, speaking engagements, and new ideas. Let's connect.">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="bg-white dark:bg-gray-800/50 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Direct Contact</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">For direct inquiries, you can reach me at:</p>
            <a href="mailto:alex.chen@university.edu" className="text-lg text-primary-600 dark:text-primary-400 hover:underline break-all">
                alex.chen@university.edu
            </a>
        </div>
        <div className="bg-white dark:bg-gray-800/50 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Find me on Social Media</h3>
             <div className="flex justify-center space-x-6">
                {socialLinks.map((item) => (
                    <a key={item.name} href={item.href} className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-8 w-8" aria-hidden="true" />
                    </a>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
