
import React from 'react';
import Section from '../components/Section';
import { IconExternalLink } from '../components/Icons';

interface Company {
  id: number;
  name: string;
  role: string;
  type: string;
  description: string;
  mission: string;
  focus: string[];
  founded: string;
  website?: string;
  logo: string;
  color: string;
}

const companies: Company[] = [
  {
    id: 1,
    name: 'DeepBio Limited',
    role: 'Founder & CEO',
    type: 'Biotech Company',
    description: 'DeepBio Limited is a cutting-edge biotechnology company focused on leveraging artificial intelligence and machine learning to revolutionize biological research and healthcare solutions. We develop innovative computational tools and platforms that accelerate drug discovery, enhance diagnostic accuracy, and enable personalized medicine.',
    mission: 'To transform healthcare through intelligent biotechnology solutions that bridge the gap between complex biological data and actionable clinical insights.',
    focus: ['AI/ML in Drug Discovery', 'Computational Biology', 'Bioinformatics Platforms', 'Personalized Medicine', 'Healthcare Analytics'],
    founded: '2023',
    website: 'https://deepbio.com',
    logo: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    name: 'CHIRAL Bangladesh',
    role: 'Founder & Executive Director',
    type: 'Research Organization',
    description: 'CHIRAL Bangladesh is a leading research and educational organization dedicated to advancing healthcare research, capacity building, and evidence-based policy development in Bangladesh and South Asia. We focus on addressing critical health challenges through innovative research methodologies and collaborative partnerships.',
    mission: 'To advance healthcare outcomes in Bangladesh through high-quality research, education, and evidence-based policy advocacy.',
    focus: ['Public Health Research', 'Healthcare Policy', 'Medical Education', 'Health Systems Research', 'Epidemiological Studies'],
    founded: '2020',
    website: 'https://chiralbd.org',
    logo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    color: 'from-green-500 to-teal-600'
  }
];

const CompanyCard: React.FC<{ company: Company; index: number }> = ({ company, index }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Header with gradient background */}
      <div className={`bg-gradient-to-r ${company.color} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
              {company.type}
            </span>
            <span className="text-sm opacity-90">Est. {company.founded}</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">{company.name}</h2>
          <p className="text-lg opacity-90 font-medium">{company.role}</p>
        </div>
      </div>

      {/* Company logo and info */}
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-6">
          <img 
            src={company.logo} 
            alt={`${company.name} logo`}
            className="w-16 h-16 rounded-xl object-cover border-2 border-gray-200 dark:border-gray-700"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {company.mission}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {company.description}
          </p>
        </div>

        {/* Focus Areas */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Focus Areas</h4>
          <div className="flex flex-wrap gap-2">
            {company.focus.map((area, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Website Link */}
        {company.website && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <a 
              href={company.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Visit {company.name}
              <IconExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const EntrepreneurshipPage: React.FC = () => {
  return (
    <Section 
      title="Entrepreneurship" 
    >
      <div className="max-w-7xl mx-auto">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            As an entrepreneur, I've founded and lead organizations that bridge the gap between academic research 
            and real-world healthcare solutions. My ventures focus on leveraging artificial intelligence, 
            bioinformatics, and evidence-based approaches to address critical challenges in healthcare and biotechnology.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2">
          {companies.map((company, index) => (
            <CompanyCard key={company.id} company={company} index={index} />
          ))}
        </div>

        {/* Entrepreneurship Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Entrepreneurship Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research-Driven</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Every venture is grounded in rigorous scientific research and evidence-based methodologies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Global Impact</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Building solutions that address healthcare challenges both locally in Bangladesh and globally.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Collaborative</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Fostering partnerships between academia, industry, and healthcare institutions.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">2</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Companies Founded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">2</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Industries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Focus Areas</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EntrepreneurshipPage;
