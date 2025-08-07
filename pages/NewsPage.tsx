
import React from 'react';
import Section from '../components/Section';
import { pressFeaturesData } from '../data/mockData';
import { PressFeature } from '../types';

const NewsCard: React.FC<{ feature: PressFeature }> = ({ feature }) => (
  <a
    href={feature.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block group bg-white dark:bg-gray-800/50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col"
  >
    <div className="flex items-center justify-center h-32 bg-gray-200 dark:bg-gray-800 p-4">
      <img src={feature.outletLogoUrl} alt={`${feature.outletName} logo`} className="max-h-full max-w-full object-contain" />
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {feature.headline}
      </h3>
      <div className="flex-grow" />
      <p className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400">
        {feature.outletName} &middot; {feature.date}
      </p>
    </div>
  </a>
);


const NewsPage: React.FC = () => {
  return (
    <Section title="In The News" subtitle="Highlights of my work and research featured in the media.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pressFeaturesData.map((feature) => (
          <NewsCard key={feature.id} feature={feature} />
        ))}
      </div>
    </Section>
  );
};

export default NewsPage;
