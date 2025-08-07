
import React from 'react';
import { coursesData } from '../data/mockData';
import { Course } from '../types';
import { IconExternalLink, IconGithub } from '../components/Icons';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-semibold rounded-full mb-2 sm:mb-0">
          {course.code}
        </span>
        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Course</span>
        </div>
      </div>
      
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
        {course.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {course.description}
      </p>

      {(course.links.syllabus || course.links.slides || course.links.github) && (
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          {course.links.syllabus && (
            <a 
              href={course.links.syllabus} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors hover:underline"
            >
              <IconExternalLink className="w-4 h-4" />
              Syllabus
            </a>
          )}
          {course.links.slides && (
            <a 
              href={course.links.slides} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors hover:underline"
            >
              <IconExternalLink className="w-4 h-4" />
              Slides
            </a>
          )}
          {course.links.github && (
            <a 
              href={course.links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors hover:underline"
            >
              <IconGithub className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

interface MentoringData {
  id: number;
  studentName: string;
  level: string;
  project: string;
  duration: string;
  outcome?: string;
  status: 'completed' | 'ongoing';
  linkedIn?: string;
}

const mentoringData: MentoringData[] = [
  {
    id: 1,
    studentName: "Sarah Ahmed",
    level: "Graduate Student (MS)",
    project: "Machine Learning Applications in Genomic Variant Analysis",
    duration: "2023-2024",
    outcome: "First-author publication in Bioinformatics",
    status: "completed",
    linkedIn: "https://linkedin.com/in/sarah-ahmed-genomics"
  },
  {
    id: 2,
    studentName: "Mohammad Rahman",
    level: "Undergraduate Research Assistant",
    project: "Deep Learning for Drug Discovery Pipeline Development",
    duration: "2024-Present",
    status: "ongoing",
    linkedIn: "https://linkedin.com/in/mohammad-rahman-ai"
  },
  {
    id: 3,
    studentName: "Fatima Khan",
    level: "Graduate Student (MS)",
    project: "Single-Cell RNA-seq Data Analysis for Cancer Research",
    duration: "2022-2023",
    outcome: "Conference presentation at ISMB 2023",
    status: "completed",
    linkedIn: "https://linkedin.com/in/fatima-khan-bioinformatics"
  },
  {
    id: 4,
    studentName: "Ahmed Hassan",
    level: "PhD Candidate",
    project: "AI-driven Personalized Medicine Platform",
    duration: "2023-Present",
    status: "ongoing",
    linkedIn: "https://linkedin.com/in/ahmed-hassan-phd"
  }
];

const MentoringCard: React.FC<{ mentoring: MentoringData }> = ({ mentoring }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
        <div className="flex items-center gap-3 mb-1 sm:mb-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
            {mentoring.studentName}
          </h3>
          {mentoring.linkedIn && (
            <a 
              href={mentoring.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-6 h-6 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
        </div>
        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
          mentoring.status === 'ongoing' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
        }`}>
          {mentoring.status === 'ongoing' ? 'Ongoing' : 'Completed'}
        </span>
      </div>
      
      <div className="space-y-2 mb-4">
        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
          {mentoring.level} • {mentoring.duration}
        </p>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {mentoring.project}
        </p>
        {mentoring.outcome && (
          <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-medium text-green-600 dark:text-green-400">Outcome:</span> {mentoring.outcome}
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
);

const TeachingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Teaching & Mentoring
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Committed to training the next generation of interdisciplinary scientists in bioinformatics, computational biology, and AI-driven research.
          </p>
        </div>

        {/* Teaching Philosophy */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">Teaching Philosophy</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="text-2xl sm:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">Hands-On Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Practical application of theoretical concepts through real-world projects and datasets.</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="text-2xl sm:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">Collaborative</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Fostering teamwork and peer learning through group projects and discussions.</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className="text-2xl sm:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💡</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">Innovation-Focused</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Encouraging creative problem-solving and cutting-edge research methodologies.</p>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8">Courses Taught</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coursesData.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Student Mentoring */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8">Student Mentoring</h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {mentoringData.map(mentoring => (
              <MentoringCard key={mentoring.id} mentoring={mentoring} />
            ))}
          </div>
        </div>

        {/* Mentoring Impact */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Mentoring Impact</h2>
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
      </div>
    </div>
  );
};

export default TeachingPage;
