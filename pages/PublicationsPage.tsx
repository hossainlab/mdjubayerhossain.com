
import React, { useState, useMemo } from 'react';
import Section from '../components/Section';
import { publicationsData } from '../data/mockData';
import { Publication } from '../types';

const PublicationItem: React.FC<{ publication: Publication; index: number }> = ({ publication, index }) => {
  const [showBibtex, setShowBibtex] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(publication.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy BibTeX');
    }
  };

  const getYearColor = (year: number) => {
    const currentYear = new Date().getFullYear();
    if (year === currentYear) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    if (year >= currentYear - 1) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'under-review': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'submitted': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'in-preparation': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'gbd-collaborator': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'peer-reviewed': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600">
      <div className="p-6">
        {/* Publication Number & Badges */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center flex-wrap gap-2">
            <span className="flex items-center justify-center w-8 h-8 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
              {index + 1}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getYearColor(publication.year)}`}>
              {publication.year}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(publication.status)}`}>
              {publication.status === 'under-review' ? 'Under Review' :
               publication.status === 'in-preparation' ? 'In Preparation' :
               publication.status.charAt(0).toUpperCase() + publication.status.slice(1)}
            </span>
            {publication.category && (
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(publication.category)}`}>
                {publication.category === 'gbd-collaborator' ? 'GBD Collaborator' :
                 publication.category === 'peer-reviewed' ? 'Peer Reviewed' : publication.category}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
          {publication.title}
        </h3>

        {/* Authors */}
        <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
          {publication.authors.map((author, idx) => (
            <span key={idx} className={author.includes('Hossain') ? 'font-semibold text-primary-700 dark:text-primary-300' : ''}>
              {author}{idx < publication.authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>

        {/* Journal */}
        <p className="text-gray-500 dark:text-gray-400 mb-4 italic">
          {publication.journal}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-4">
          {publication.links.pdf && (
            <a 
              href={publication.links.pdf} 
              className="inline-flex items-center px-4 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 PDF
            </a>
          )}
          {publication.links.doi && (
            <a 
              href={publication.links.doi} 
              className="inline-flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 DOI
            </a>
          )}
          <button 
            onClick={() => setShowBibtex(!showBibtex)} 
            className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
              showBibtex 
                ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-200' 
                : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
            }`}
          >
            📋 BibTeX
          </button>
        </div>

        {/* BibTeX Dropdown */}
        {showBibtex && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">BibTeX Citation</h4>
              <button 
                onClick={copyBibtex} 
                className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                  copied 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' 
                    : 'bg-primary-100 hover:bg-primary-200 dark:bg-primary-900/30 dark:hover:bg-primary-900/50 text-primary-800 dark:text-primary-200'
                }`}
              >
                {copied ? '✓ Copied!' : '📋 Copy'}
              </button>
            </div>
            <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-mono bg-white dark:bg-gray-800 p-3 rounded border overflow-x-auto">
              {publication.bibtex}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

const PublicationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'year' | 'title'>('year');

  // Get unique values for filters
  const availableYears = useMemo(() => {
    const years = [...new Set(publicationsData.map(pub => pub.year))].sort((a, b) => b - a);
    return years;
  }, []);

  const availableStatuses = useMemo(() => {
    return [...new Set(publicationsData.map(pub => pub.status))];
  }, []);

  const availableCategories = useMemo(() => {
    return [...new Set(publicationsData.map(pub => pub.category).filter(Boolean))];
  }, []);

  // Filter and sort publications
  const filteredPublications = useMemo(() => {
    let filtered = publicationsData.filter(pub => {
      const matchesSearch = searchTerm === '' || 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
        pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;
      const matchesStatus = selectedStatus === 'all' || pub.status === selectedStatus;
      const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
      
      return matchesSearch && matchesYear && matchesStatus && matchesCategory;
    });

    // Sort publications
    filtered.sort((a, b) => {
      if (sortBy === 'year') {
        return b.year - a.year; // Most recent first
      } else {
        return a.title.localeCompare(b.title); // Alphabetical
      }
    });

    return filtered;
  }, [searchTerm, selectedYear, selectedStatus, selectedCategory, sortBy]);

  return (
    <Section 
      title="Publications" 
      subtitle="A selection of my peer-reviewed articles, preprints, and conference papers in bioinformatics and artificial intelligence."
    >
      <div className="max-w-6xl mx-auto">
        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">🔍</span>
            </div>
            <input
              type="text"
              placeholder="Search publications by title, author, or journal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            />
          </div>

          {/* Filter and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Year:</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All years</option>
                  {availableYears.map(year => (
                    <option key={year} value={year.toString()}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Status:</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All statuses</option>
                  {availableStatuses.map(status => (
                    <option key={status} value={status}>
                      {status === 'under-review' ? 'Under Review' :
                       status === 'in-preparation' ? 'In Preparation' :
                       status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All categories</option>
                  {availableCategories.map(category => (
                    <option key={category} value={category}>
                      {category === 'gbd-collaborator' ? 'GBD Collaborator' :
                       category === 'peer-reviewed' ? 'Peer Reviewed' : category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'year' | 'title')}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="year">Year (newest first)</option>
                  <option value="title">Title (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Publication Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredPublications.length} of {publicationsData.length} publications
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedYear !== 'all' && ` from ${selectedYear}`}
            {selectedStatus !== 'all' && ` with status "${selectedStatus}"`}
            {selectedCategory !== 'all' && ` in "${selectedCategory}" category`}
          </p>
        </div>

        {/* Publications Grid */}
        {filteredPublications.length > 0 ? (
          <div className="grid gap-6">
            {filteredPublications.map((pub, index) => (
              <PublicationItem key={pub.id} publication={pub} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No publications found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search terms or filters.
            </p>
          </div>
        )}

        {/* Publication Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {publicationsData.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">Total Publications</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {publicationsData.filter(p => p.status === 'published').length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">Published</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {publicationsData.filter(p => p.status === 'submitted' || p.status === 'under-review').length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">Under Review/Submitted</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-600 hover:-translate-y-1 transition-all duration-300 text-center group cursor-pointer">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {publicationsData.filter(p => p.category === 'gbd-collaborator').length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">GBD Collaborations</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PublicationsPage;
