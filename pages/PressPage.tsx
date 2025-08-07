import React from 'react';
import { pressFeaturesData } from '../data/mockData';
import { PressFeature } from '../types';

const PressCard: React.FC<{ feature: PressFeature }> = ({ feature }) => (
  <a
    href={feature.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block group bg-white dark:bg-gray-800/50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
  >
    <div className="flex items-center justify-center h-32 sm:h-40 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4">
      <img 
        src={feature.outletLogoUrl} 
        alt={`${feature.outletName} logo`} 
        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" 
      />
    </div>
    <div className="p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full">
          {feature.type || 'Interview'}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {feature.date}
        </span>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight mb-2 line-clamp-3">
        {feature.headline}
      </h3>
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        {feature.outletName}
      </p>
    </div>
  </a>
);

const PressPage: React.FC = () => {
  // Group press features by type
  const featuredPress = pressFeaturesData.filter(p => p.featured).slice(0, 3);
  const recentPress = pressFeaturesData.slice(0, 6);
  
  return (
    <div className="fade-in min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-primary-900/10 dark:to-secondary-900/10">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 opacity-10 dark:opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary-500">
              <path d="M10 10h80v80H10z" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M20 30h60M20 45h60M20 60h40" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 w-24 h-24 opacity-10 dark:opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full text-secondary-500">
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M40 45l10 10 20-20" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Media Coverage & Press Features
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            In the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">Press</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            My research work and expertise in bioinformatics, AI, and global health have been featured across various media outlets, 
            highlighting the impact of computational biology on healthcare innovation.
          </p>
        </div>
      </section>

      {/* Featured Press */}
      {featuredPress.length > 0 && (
        <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Coverage
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Highlighting major press features and media appearances
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredPress.map((feature) => (
                <PressCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Press Coverage */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Media Coverage
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Latest interviews, articles, and features about my research and work
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recentPress.map((feature) => (
              <PressCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Press Resources
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Resources for journalists, media professionals, and conference organizers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Biography */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-6 sm:p-8 border border-primary-200 dark:border-primary-800/50">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Biography & Background
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                Comprehensive professional biography, education, and career highlights for media use.
              </p>
              <a
                href="/cv"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
              >
                View Full CV
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* High-Resolution Photos */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 rounded-2xl p-6 sm:p-8 border border-secondary-200 dark:border-secondary-800/50">
              <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Professional Photos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                High-resolution professional headshots and photos for print and digital media.
              </p>
              <button className="inline-flex items-center text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 font-medium text-sm">
                Download Photos
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-2xl p-6 sm:p-8 border border-accent-200 dark:border-accent-800/50">
              <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Media Contact
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                Direct contact information for press inquiries, interviews, and collaboration requests.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium text-sm"
              >
                Contact Information
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Speaking & Interview Topics
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Expert commentary and insights on cutting-edge topics in bioinformatics and AI
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "AI in Healthcare",
                description: "Applications of artificial intelligence in drug discovery, personalized medicine, and diagnostic tools",
                icon: "🤖"
              },
              {
                title: "Bioinformatics & Genomics",
                description: "Computational approaches to understanding genetic data and biological systems",
                icon: "🧬"
              },
              {
                title: "Global Health Technology",
                description: "Technology solutions for addressing health challenges in developing countries",
                icon: "🌍"
              },
              {
                title: "Data Science in Biology",
                description: "Big data analytics, machine learning, and statistical methods in life sciences",
                icon: "📊"
              },
              {
                title: "Research Entrepreneurship",
                description: "Translating academic research into commercial applications and startups",
                icon: "🚀"
              },
              {
                title: "Education Technology",
                description: "Modern approaches to teaching computational biology and bioinformatics",
                icon: "🎓"
              }
            ].map((topic, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4">{topic.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;