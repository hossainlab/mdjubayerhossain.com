
import React from 'react';
import { researchProjectsData } from '../data/mockData';
import { ResearchProject } from '../types';
import { IconGithub, IconExternalLink } from '../components/Icons';

const ProjectCard: React.FC<{ project: ResearchProject }> = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full group-hover:bg-primary-50 group-hover:text-primary-700 dark:group-hover:bg-primary-900/20 dark:group-hover:text-primary-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>

      {(project.links.github || project.links.paper) && (
        <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.links.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors hover:underline"
            >
              <IconGithub className="w-4 h-4" />
              Code
            </a>
          )}
          {project.links.paper && (
            <a 
              href={project.links.paper} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors hover:underline"
            >
              <IconExternalLink className="w-4 h-4" />
              Paper
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

const ResearchPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Research
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Exploring the frontiers of bioinformatics and artificial intelligence to solve critical biological problems and advance healthcare outcomes.
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Research Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🧬</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">Genomics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">AI-driven variant interpretation and genomic analysis</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💊</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">Drug Discovery</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Machine learning for therapeutic development</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🔬</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">Single-Cell Analysis</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Computational methods for cellular data</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🌍</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">Global Health</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Population health and disease burden studies</p>
            </div>
          </div>
        </div>

        {/* Current Projects */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Current Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {researchProjectsData.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Research Philosophy */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Research Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Impact-Driven</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Focus on research that directly translates to improved healthcare outcomes and patient benefits.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Collaborative</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Interdisciplinary collaboration across computational biology, medicine, and data science.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📖</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Open Science</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Commitment to reproducible research and sharing tools that benefit the scientific community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
