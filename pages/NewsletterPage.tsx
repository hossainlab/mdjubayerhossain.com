import React, { useEffect } from 'react';

const NewsletterPage: React.FC = () => {
  useEffect(() => {
    // Also try loading the script in the head as a backup
    let headScript: HTMLScriptElement | null = null;
    
    // Check if script is already loaded
    const existingScript = document.querySelector('script[data-uid="3d1ccc26ea"]');
    
    if (!existingScript) {
      headScript = document.createElement('script');
      headScript.async = true;
      headScript.setAttribute('data-uid', '3d1ccc26ea');
      headScript.src = 'https://hossainlab.kit.com/3d1ccc26ea/index.js';
      document.head.appendChild(headScript);
    }

    // Check if ConvertKit form loaded and hide fallback
    const timer = setTimeout(() => {
      const ckForm = document.querySelector('[data-element="form"]') || 
                    document.querySelector('.convertkit-form') ||
                    document.querySelector('[data-uid="3d1ccc26ea"]:not(script)');
      const fallbackForm = document.querySelector('.fallback-form');
      
      if (ckForm && fallbackForm) {
        (fallbackForm as HTMLElement).style.display = 'none';
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      if (headScript && headScript.parentNode) {
        headScript.parentNode.removeChild(headScript);
      }
    };
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Newsletter
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest research insights, bioinformatics breakthroughs, and exclusive content from my work in AI and computational biology.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 sm:mb-16">
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 mb-2 transition-colors duration-300">Research Updates</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Get exclusive insights into my latest research projects, publications, and discoveries in bioinformatics.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 mb-2 transition-colors duration-300">Industry Insights</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Learn about emerging trends in AI, machine learning applications in biology, and entrepreneurial insights.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 mb-2 transition-colors duration-300">Exclusive Content</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Access subscriber-only content including tutorials, case studies, and behind-the-scenes research stories.
            </p>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/10 dark:to-blue-900/10 rounded-2xl p-8 sm:p-12 border border-primary-200 dark:border-primary-800">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join the Community
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join hundreds of researchers, students, and professionals who rely on my newsletter for cutting-edge insights in bioinformatics and AI.
            </p>
          </div>
          
          {/* ConvertKit form embedded directly */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              {/* Direct script embed - ConvertKit's recommended approach */}
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <script async data-uid="3d1ccc26ea" src="https://hossainlab.kit.com/3d1ccc26ea/index.js"></script>
                  `
                }}
              />
              {/* Fallback form if script doesn't load */}
              <div className="fallback-form">
                <form 
                  action="https://hossainlab.kit.com/3d1ccc26ea/subscriptions" 
                  method="post"
                  target="_blank"
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email_address"
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <input type="hidden" name="utf8" value="✓" />
                  <input type="hidden" name="authenticity_token" value="" />
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Subscribe Now
                  </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12">
            What Subscribers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "The newsletter provides incredible insights into the latest developments in computational biology. It's become an essential part of my weekly reading."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">DR</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Dr. Sarah Rahman</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Computational Biologist</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "As a graduate student, this newsletter helps me stay current with AI applications in biology. The content is always high-quality and actionable."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">MK</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Mohammad Khan</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">PhD Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How often do you send newsletters?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I send newsletters bi-weekly, ensuring you get valuable content without inbox overload. Each issue is carefully crafted with the latest insights and updates.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What type of content can I expect?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                You'll receive research updates, industry trends, tutorial snippets, paper reviews, and exclusive insights into my work in bioinformatics and AI.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Can I unsubscribe anytime?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! Every email includes an easy unsubscribe link. No questions asked, no hassle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;