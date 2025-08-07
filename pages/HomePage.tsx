
import React from 'react';
import { Link } from 'react-router-dom';
import { publicationsData, researchProjectsData, coursesData } from '../data/mockData';
import { Publication, ResearchProject, Course } from '../types';
import { IconExternalLink, IconGithub } from '../components/Icons';
import { useScrollAnimation, useScrollToTop } from '../hooks/useScrollAnimation';
import YouTubeStatsComponent from '../components/YouTubeStats';

const PublicationCard: React.FC<{ publication: Publication }> = ({ publication }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
    <div className="p-4 sm:p-6">
      <div className="flex flex-wrap gap-2 mb-3">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          publication.status === 'published' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
          publication.status === 'under-review' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
          'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
        }`}>
          {publication.status}
        </span>
        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
          {publication.year}
        </span>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors line-clamp-2">
        {publication.title}
      </h3>
      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
        {publication.journal}
      </p>
      <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
        {publication.authors.slice(0, 3).join(', ')}{publication.authors.length > 3 && '...'}
      </p>
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: ResearchProject }> = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
    <div className="p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1 mb-4">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && <span className="text-xs text-gray-500">+{project.tags.length - 3}</span>}
      </div>
    </div>
  </div>
);

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full mb-2 sm:mb-0">
          {course.code}
        </span>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
        {course.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
        {course.description}
      </p>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  const featuredPublications = publicationsData.slice(0, 6);
  const featuredProjects = researchProjectsData;
  const featuredCourses = coursesData;

  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.1 });
  const researchAnimation = useScrollAnimation({ threshold: 0.15 });
  const publicationsAnimation = useScrollAnimation({ threshold: 0.15 });
  const teachingAnimation = useScrollAnimation({ threshold: 0.15 });
  const youtubeAnimation = useScrollAnimation({ threshold: 0.15 });
  const entrepreneurshipAnimation = useScrollAnimation({ threshold: 0.15 });
  const contactAnimation = useScrollAnimation({ threshold: 0.15 });
  
  // Scroll to top functionality
  const { showScrollTop, scrollToTop } = useScrollToTop();

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section 
        ref={heroAnimation.ref}
        className={`min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 scroll-animate scroll-margin-top ${heroAnimation.isVisible ? 'animate' : ''}`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* DNA Helix Animation */}
          <div className="absolute top-20 left-10 w-32 h-32 opacity-10 dark:opacity-5">
            <div className="animate-spin" style={{animationDuration: '20s'}}>
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500">
                <path d="M20 20 Q50 10 80 20 Q50 30 20 40 Q50 50 80 60 Q50 70 20 80" 
                      stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20 25 Q50 15 80 25 Q50 35 20 45 Q50 55 80 65 Q50 75 20 85" 
                      stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

          {/* Neural Network Nodes */}
          <div className="absolute top-32 right-16 w-24 h-24 opacity-10 dark:opacity-5">
            <div className="animate-pulse">
              <svg viewBox="0 0 100 100" className="w-full h-full text-purple-500">
                <circle cx="20" cy="20" r="4" fill="currentColor" />
                <circle cx="50" cy="30" r="4" fill="currentColor" />
                <circle cx="80" cy="20" r="4" fill="currentColor" />
                <circle cx="35" cy="60" r="4" fill="currentColor" />
                <circle cx="65" cy="70" r="4" fill="currentColor" />
                <line x1="20" y1="20" x2="50" y2="30" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="30" x2="80" y2="20" stroke="currentColor" strokeWidth="1" />
                <line x1="20" y1="20" x2="35" y2="60" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="30" x2="65" y2="70" stroke="currentColor" strokeWidth="1" />
                <line x1="80" y1="20" x2="65" y2="70" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Molecule Structure */}
          <div className="absolute bottom-20 left-20 w-28 h-28 opacity-10 dark:opacity-5">
            <div className="animate-bounce" style={{animationDuration: '3s'}}>
              <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
                <circle cx="30" cy="30" r="6" fill="currentColor" />
                <circle cx="70" cy="30" r="6" fill="currentColor" />
                <circle cx="50" cy="60" r="6" fill="currentColor" />
                <circle cx="30" cy="80" r="6" fill="currentColor" />
                <circle cx="70" cy="80" r="6" fill="currentColor" />
                <line x1="30" y1="30" x2="70" y2="30" stroke="currentColor" strokeWidth="2" />
                <line x1="30" y1="30" x2="50" y2="60" stroke="currentColor" strokeWidth="2" />
                <line x1="70" y1="30" x2="50" y2="60" stroke="currentColor" strokeWidth="2" />
                <line x1="50" y1="60" x2="30" y2="80" stroke="currentColor" strokeWidth="2" />
                <line x1="50" y1="60" x2="70" y2="80" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Floating Data Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                  Leading Innovation in Computational Biology
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                    Data
                  </span>
                  {" "}to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-accent-600 dark:from-secondary-400 dark:to-accent-400">
                    Innovation
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Bridging computational biology and artificial intelligence to revolutionize 
                  healthcare, drug discovery, and personalized medicine through cutting-edge research and entrepreneurship.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Publications</div>
                </div>
                <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
                </div>
                <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50">
                  <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">3000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="#research"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Explore Research
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="#publications"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 dark:hover:border-primary-400 font-semibold rounded-xl backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  View Publications
                </a>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="relative lg:ml-auto">
              <div className="relative">
                {/* Profile Photo Placeholder with Decorative Elements */}
                <div className="relative w-80 h-80 mx-auto">
                  {/* Decorative Rings */}
                  <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-800" style={{animation: 'spin 20s linear infinite'}}></div>
                  <div className="absolute inset-4 rounded-full border-4 border-purple-200 dark:border-purple-800" style={{animation: 'spin 15s linear reverse infinite'}}></div>
                  
                  {/* Profile Image Container */}
                  <div className="absolute inset-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full flex items-center justify-center shadow-2xl">
                    {/* Placeholder for profile photo */}
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V8.5C15 9.4 14.4 10.2 13.5 10.5L11 11.3L8.5 10.5C7.6 10.2 7 9.4 7 8.5V7.5L3 7V9C3 10.1 3.9 11 5 11V12.5C3.9 12.8 3 13.8 3 15C3 16.2 3.9 17.2 5 17.5V22H7V16H17V22H19V17.5C20.1 17.2 21 16.2 21 15C21 13.8 20.1 12.8 19 12.5V11C20.1 11 21 10.1 21 9Z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2,2V4H4V2H2M20,2V4H22V2H20M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M2,20V22H4V20H2M6,20V22H8V20H6M10,20V22H12V20H10M14,20V22H16V20H14M18,20V22H20V20H18M20,20V22H22V20H20Z"/>
                    </svg>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19M14.5,16A1.5,1.5 0 0,1 13,14.5A1.5,1.5 0 0,1 14.5,13A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 14.5,16M9.5,16A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 9.5,13A1.5,1.5 0 0,1 11,14.5A1.5,1.5 0 0,1 9.5,16Z"/>
                    </svg>
                  </div>
                  
                  <div className="absolute top-1/2 -right-8 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-ping">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section 
        id="research" 
        ref={researchAnimation.ref}
        className={`py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 scroll-animate scroll-margin-top ${researchAnimation.isVisible ? 'animate' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Research
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Exploring AI-driven solutions for genomics, drug discovery, and personalized medicine
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/research"
              className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/10 font-semibold rounded-lg transition-colors duration-200"
            >
              View All Research
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section 
        id="publications" 
        ref={publicationsAnimation.ref}
        className={`py-16 sm:py-20 bg-white dark:bg-gray-900 scroll-animate scroll-margin-top ${publicationsAnimation.isVisible ? 'animate' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Publications
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Latest peer-reviewed articles, GBD collaborations, and research contributions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {featuredPublications.map(publication => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/publications"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View All Publications
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Teaching & Mentoring Section */}
      <section 
        id="teaching" 
        ref={teachingAnimation.ref}
        className={`py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 scroll-animate scroll-margin-top ${teachingAnimation.isVisible ? 'animate' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Teaching & Mentoring
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Training the next generation of interdisciplinary scientists
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Mentoring Impact
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Students Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">8</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">12</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Conferences</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Awards Won</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/teaching"
              className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/10 font-semibold rounded-lg transition-colors duration-200"
            >
              View Teaching Details
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section 
        id="youtube" 
        ref={youtubeAnimation.ref}
        className={`py-16 sm:py-20 bg-white dark:bg-gray-900 scroll-animate scroll-margin-top ${youtubeAnimation.isVisible ? 'animate' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Educational Content
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sharing knowledge through YouTube videos on bioinformatics, AI, and data science
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <YouTubeStatsComponent />
          </div>
        </div>
      </section>

      {/* Entrepreneurship Section */}
      <section 
        id="entrepreneurship" 
        ref={entrepreneurshipAnimation.ref}
        className={`py-16 sm:py-20 bg-white dark:bg-gray-900 scroll-animate scroll-margin-top ${entrepreneurshipAnimation.isVisible ? 'animate' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Entrepreneurship
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Translating research into real-world solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/30 rounded-2xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">DeepBio Limited</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Founder & CEO</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                AI-driven biotech solutions for personalized medicine and drug discovery
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                  AI/ML
                </span>
                <span className="px-3 py-1 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                  Biotech
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/30 rounded-2xl p-6 sm:p-8 border border-green-200 dark:border-green-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">CHIRAL Bangladesh</h3>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">Founder & Executive Director</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Research organization advancing bioinformatics and computational biology in Bangladesh
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                  Research
                </span>
                <span className="px-3 py-1 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                  Education
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/entrepreneurship"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Learn More About My Companies
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactAnimation.ref}
        className={`py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 scroll-animate scroll-margin-top ${contactAnimation.isVisible ? 'animate' : ''}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Collaborate
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in research collaboration, speaking opportunities, or discussing innovative projects?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Get in Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.468L3 21l2.468-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default HomePage;