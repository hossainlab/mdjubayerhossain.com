
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
        className={`min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 scroll-animate scroll-margin-top ${heroAnimation.isVisible ? 'animate' : ''}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Bioinformatics & AI Researcher
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-3xl mx-auto">
                Advancing healthcare through computational biology and artificial intelligence
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-6">
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium">
                Researcher
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium">
                Educator
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium">
                Entrepreneur
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
              <a
                href="#research"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Explore Research
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a
                href="#publications"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 dark:hover:border-primary-400 font-semibold rounded-lg transition-colors duration-200"
              >
                View Publications
              </a>
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
            <YouTubeStatsComponent apiKey="AIzaSyAq8YfYF-Mo1VUl-XIK0BtaZuTp8u8vicU" />
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