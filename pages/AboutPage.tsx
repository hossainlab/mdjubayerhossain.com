import React from 'react';
import { IconDna, IconBrainCircuit, IconFlask, IconNetwork, IconDownload, IconAward, IconUsers, IconBookOpen, IconTarget } from '../components/Icons';
import OptimizedImage from '../components/OptimizedImage';

const AboutPage: React.FC = () => {
  const timelineEvents = [
    {
      year: 'June 2025 - Present',
      title: 'Founder & Chief Executive Officer',
      institution: 'DeepBio Limited',
      description: 'Founded a next-generation bioinformatics company focused on AI-driven health research, cancer genomics, and public health informatics in resource-limited settings. Leading multidisciplinary teams to develop computational tools for multi-omics data analysis, precision oncology, infectious disease, and neurological disorders.',
      type: 'work' as const,
      highlights: ['AI-driven health research', 'Cancer genomics', 'Multi-omics pipelines', 'HPC infrastructure']
    },
    {
      year: 'June 2020 - Present',
      title: 'Founder & Executive Director',
      institution: 'Center for Health Innovation, Research, Action, and Learning—Bangladesh',
      description: 'Established CHIRAL Bangladesh as a non-profit research hub to bridge gaps in health equity, data science, and implementation research across LMIC contexts. Led multidisciplinary teams conducting research in global health, bioinformatics, AI, and geospatial epidemiology.',
      type: 'work' as const,
      highlights: ['Non-profit research hub', 'Global health research', 'AI & geospatial epidemiology', 'SRTP mentorship']
    },
    {
      year: 'June 2025 - Present',
      title: 'Program Lead',
      institution: 'GSA Bioinformatics Internship',
      description: 'Leading the design and execution of a national internship program in bioinformatics, jointly organized by GNOBB, ASI School of Life, and SPSB. Overseeing curriculum development, training delivery, and mentorship with emphasis on hands-on bioinformatics and data science.',
      type: 'work' as const,
      highlights: ['National program leadership', 'Curriculum development', 'Cross-institutional collaboration']
    },
    {
      year: 'Feb 2022 - June 2022',
      title: 'Research Intern',
      institution: 'International Center for Diarrhoeal Disease Research, Bangladesh (icddr,b)',
      description: 'Assisted in public health research focused on health systems, service delivery, and population health. Contributed to data collection, cleaning, and analysis for mental health, health equity, and universal health coverage projects.',
      type: 'work' as const,
      highlights: ['Public health research', 'Health systems studies', 'Epidemiological design']
    },
    {
      year: 'Oct 2022 - Nov 2022',
      title: 'Data Enumerator',
      institution: 'Curtin University, School of Allied Health',
      description: 'Collected and validated quantitative data for "Tuberculosis Patient Outcome Measurement for IPE-TB care" research project. Ensured data accuracy using standardized tools and protocols while maintaining international research standards.',
      type: 'work' as const,
      highlights: ['International research', 'Data validation', 'TB outcomes research']
    },
    {
      year: 'Jan 2019 - Jan 2020',
      title: 'Master of Science in Microbiology',
      institution: 'Jagannath University, Dhaka, Bangladesh',
      description: 'Advanced studies in microbiology with specialized coursework in genomics, proteomics, and bioinformatics. Completed comprehensive training in research methodology and scientific writing.',
      type: 'education' as const,
      highlights: ['Genomics & Proteomics', 'Bioinformatics', 'Research Methodology', 'Scientific Writing']
    },
    {
      year: 'Jan 2016 - Jan 2019',
      title: 'Bachelor of Science in Microbiology',
      institution: 'Jagannath University, Dhaka, Bangladesh',
      description: 'Foundation in microbiology with comprehensive coursework in biostatistics, public health and hygiene, and bioinformatics. Early exposure to computational approaches in biological sciences.',
      type: 'education' as const,
      highlights: ['Biostatistics', 'Public Health & Hygiene', 'Bioinformatics I & II']
    },
    {
      year: 'September 2023',
      title: 'AI In Public Health Workshop',
      institution: 'Child Health Research Foundation (CHRF)',
      description: 'Received scholarship for 4-day workshop supported by Bill and Melinda Gates Foundation "Democratizing Public Health Modeling using AI-based Tools" grant. Acquired advanced skills in epidemiological modeling and AI applications.',
      type: 'training' as const,
      highlights: ['Gates Foundation Scholarship', 'Epidemiological Modeling', 'Disease Surveillance AI', 'Medical Image Analysis']
    }
  ];

  const teachingExperience = [
    {
      year: 'July 2025 - Present',
      title: 'Lead Organizer & Instructor, AI for Public Health',
      institution: 'Daffodil International University (Micro-Credentials Academy)',
      description: 'Designed and delivered comprehensive training program on AI applications in public health for students and early-career professionals. Led curriculum development covering AI fundamentals, data science tools, and health data analytics.',
      highlights: ['AI fundamentals', 'Health data analytics', 'Multi-disciplinary instruction', 'Partnership facilitation']
    },
    {
      year: 'June 2020 - Present',
      title: 'Lead Organizer & Instructor, Training Unit',
      institution: 'CHIRAL Bangladesh',
      description: 'Designing and delivering training programs on bioinformatics, health data science, research methodology, and scientific communication. Organized over 50 national training events reaching 3000+ participants across academia and health sectors.',
      highlights: ['50+ training events', '3000+ participants', 'Bioinformatics & data science', 'Virtual & in-person delivery']
    },
    {
      year: 'Aug 2023 - Present',
      title: 'Instructor',
      institution: 'Center for Bioinformatics Learning Advancement and Systematic Training, University of Dhaka',
      description: 'Teaching core modules on Data Science for Biologists and Biomedical Machine Learning with Python. Developed interactive content combining theory with hands-on coding using real-world biological datasets.',
      highlights: ['Python programming', 'Machine learning', 'Real-world datasets', 'Reproducible science']
    },
    {
      year: 'Oct 2022 - Dec 2022',
      title: 'Teaching Assistant',
      institution: 'Jagannath University, Department of Microbiology',
      description: 'Assisted in teaching undergraduate course Public Health and Hygiene. Conducted tutorial sessions, facilitated discussions, and provided guidance on assignments covering epidemiology and health promotion.',
      highlights: ['Public health education', 'Tutorial sessions', 'Assessment design', 'Student mentorship']
    }
  ];

  const technicalSkills = {
    'Programming Languages': ['Python', 'R', 'SQL', 'Julia', 'JavaScript'],
    'Data Science': ['Machine Learning (scikit-learn, PyCaret)', 'Deep Learning (PyTorch, TensorFlow, Keras)'],
    'Bioinformatics Programming': ['BioPython', 'Bioconductor', 'BioPandas'],
    'Bioinformatics Tools': ['Galaxy', 'SRA Toolkit', 'Samtools', 'IGV'],
    'Bulk RNA-seq Analysis': ['FastQC', 'Trim Galore', 'STAR', 'HISAT2', 'Salmon', 'Kallisto', 'DESeq2', 'edgeR', 'clusterProfiler', 'GSEA'],
    'Single-cell RNA-seq': ['CellRanger', 'Seurat', 'Scanpy', 'SingleCellExperiment'],
    'GIS & Remote Sensing': ['ArcGIS', 'Geopandas', 'Xarray', 'Giovanni', 'Google Earth Engine'],
    'Analytics Software': ['SPSS', 'PowerBI', 'Microsoft Excel'],
    'Survey Tools': ['RedCap', 'KoboToolBox', 'EpiCollect', 'Google Forms'],
    'Academic Writing': ['Microsoft Word', 'LaTeX', 'Mendeley', 'Zotero'],
    'Development Tools': ['UNIX', 'RStudio', 'Jupyter', 'VSCode', 'Git', 'Docker', 'Linux']
  };

  const researchInterests = [
    {
      title: "Single-Cell Multi-Omics",
      description: "Integrating genomics, transcriptomics, proteomics, and metabolomics data to understand cellular heterogeneity and function at unprecedented resolution.",
      icon: <IconDna className="w-8 h-8 text-primary-500" />,
      technologies: ['scRNA-seq', 'CITE-seq', 'ATAC-seq', 'Spatial Omics'],
      impact: 'Understanding disease mechanisms at cellular level'
    },
    {
      title: "Generative AI in Biology",
      description: "Leveraging transformer models, VAEs, and GANs to design novel proteins, predict molecular interactions, and generate synthetic biological data.",
      icon: <IconBrainCircuit className="w-8 h-8 text-primary-500" />,
      technologies: ['Transformers', 'VAEs', 'GANs', 'Diffusion Models'],
      impact: 'Accelerating drug discovery and protein design'
    },
    {
      title: "AI for Drug Discovery",
      description: "Applying deep learning to identify novel drug targets, predict drug-target interactions, and optimize lead compounds for therapeutic development.",
      icon: <IconFlask className="w-8 h-8 text-primary-500" />,
      technologies: ['Graph Neural Networks', 'Molecular Dynamics', 'Cheminformatics'],
      impact: 'Reducing drug development time and costs'
    },
    {
      title: "Systems Biology Networks",
      description: "Constructing and analyzing biological networks to understand emergent properties of complex biological systems and disease pathways.",
      icon: <IconNetwork className="w-8 h-8 text-primary-500" />,
      technologies: ['Network Analysis', 'Pathway Modeling', 'Dynamic Systems'],
      impact: 'Identifying therapeutic targets and biomarkers'
    }
  ];

  const philosophy = [
    {
      title: "Interdisciplinary Collaboration",
      description: "I believe the most impactful discoveries happen at the intersection of disciplines. By bringing together biologists, computer scientists, and clinicians, we can tackle complex problems that no single field could solve alone."
    },
    {
      title: "Open Science & Education",
      description: "Knowledge should be accessible to all. I'm committed to open-source software development, transparent research practices, and building educational resources that democratize access to computational biology."
    },
    {
      title: "Translational Impact",
      description: "Every algorithm, every model, and every insight should ultimately serve to improve human health. I focus on research that can be translated into real-world solutions for patients and healthcare providers."
    }
  ];

  const stats = [
    { icon: <IconBookOpen className="w-8 h-8" />, number: '27+', label: 'Publications', color: 'text-blue-600 dark:text-blue-400' },
    { icon: <IconUsers className="w-8 h-8" />, number: '3000+', label: 'Students Trained', color: 'text-green-600 dark:text-green-400' },
    { icon: <IconAward className="w-8 h-8" />, number: '50+', label: 'Training Events', color: 'text-purple-600 dark:text-purple-400' },
    { icon: <IconTarget className="w-8 h-8" />, number: '8+', label: 'Years Experience', color: 'text-orange-600 dark:text-orange-400' }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Me</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Bridging the gap between artificial intelligence and biology to unlock the secrets of life and accelerate medical breakthroughs
            </p>
          </div>

          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto">
            <blockquote className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 11-2 0 1 1 0 012 0zM7 8a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl italic text-gray-700 dark:text-gray-300 leading-relaxed">
                "My mission is to harness the transformative power of artificial intelligence to decode the complexities of biological systems, 
                translating vast molecular datasets into actionable insights that can revolutionize healthcare and improve lives worldwide."
              </p>
              <cite className="block mt-4 text-right text-primary-600 dark:text-primary-400 font-semibold">
                — Md. Jubayer Hossain
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-white dark:bg-gray-700 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-16">
              {/* Professional Journey Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <span className="mr-3">🚀</span>
                  Professional Journey
                </h2>
                <div className="space-y-6">
                  {timelineEvents.map((event, index) => {
                    const typeColors = {
                      work: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800',
                      research: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800',
                      education: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-800',
                      training: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-800'
                    };
                    return (
                      <div key={index} className="relative pl-8 pb-6 group">
                        <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-10"></div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${typeColors[event.type]}`}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </span>
                            <time className="text-sm font-medium text-gray-500 dark:text-gray-400">{event.year}</time>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{event.title}</h3>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">{event.institution}</p>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{event.description}</p>
                          {event.highlights && (
                            <div className="flex flex-wrap gap-2">
                              {event.highlights.map(highlight => (
                                <span key={highlight} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Research Focus Areas Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <span className="mr-3">🔬</span>
                  Research Focus Areas
                </h2>
                <div className="grid gap-6">
                  {researchInterests.map((interest, index) => (
                    <div key={interest.title} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-6">
                          <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/50 dark:to-primary-800/50 group-hover:scale-110 transition-transform duration-300">
                            {interest.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{interest.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{interest.description}</p>
                          
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Technologies:</h4>
                              <div className="flex flex-wrap gap-2">
                                {interest.technologies.map(tech => (
                                  <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Impact:</h4>
                              <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{interest.impact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Teaching Experience Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <span className="mr-3">🎓</span>
                  Teaching Experience
                </h2>
                <div className="space-y-6">
                  {teachingExperience.map((experience, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                        <span className="text-sm font-medium text-green-600 dark:text-green-400 mt-1 sm:mt-0">{experience.year}</span>
                      </div>
                      <p className="text-green-700 dark:text-green-300 font-semibold mb-3">{experience.institution}</p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.highlights.map(highlight => (
                          <span key={highlight} className="px-2 py-1 bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs rounded-md">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Skills Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <span className="mr-3">⚡</span>
                  Technical Skills
                </h2>
                <div className="grid gap-6">
                  {Object.entries(technicalSkills).map(([category, skills]) => (
                    <div key={category} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map(skill => (
                          <span key={skill} className="px-3 py-2 bg-gradient-to-r from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-lg border border-primary-200 dark:border-primary-800 hover:scale-105 transition-transform duration-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Research Philosophy Section */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                  <span className="mr-3">💡</span>
                  Research Philosophy
                </h2>
                <div className="space-y-6">
                  {philosophy.map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Profile Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <OptimizedImage 
                    src="https://spaces-cdn.owlstown.com/blobs/lb0dtxxthwlho2poglu8wogl42w2" 
                    alt="Md. Jubayer Hossain - Bioinformatics & AI Researcher" 
                    className="w-full h-64 object-cover"
                    width={400}
                    height={256}
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6 -mt-12 relative z-10">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Md. Jubayer Hossain</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm">Founder & CEO, DeepBio Limited</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Executive Director, CHIRAL Bangladesh</p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-200 text-sm mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-1">
                        {['AI/ML', 'Genomics', 'Drug Discovery', 'Public Health'].map(skill => (
                          <span key={skill} className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <a
                        href="/cv.pdf"
                        download
                        className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                      >
                        <IconDownload className="w-4 h-4 mr-2" />
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Facts Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="mr-2">⚡</span>
                  Quick Facts
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-500">📍</span>
                    <span className="text-gray-700 dark:text-gray-300">Based in Dhaka, Bangladesh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-500">🎓</span>
                    <span className="text-gray-700 dark:text-gray-300">M.S. in Microbiology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-500">🔬</span>
                    <span className="text-gray-700 dark:text-gray-300">AI in Public Health Expert</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">🚀</span>
                    <span className="text-gray-700 dark:text-gray-300">Serial Entrepreneur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">📚</span>
                    <span className="text-gray-700 dark:text-gray-300">Open Science Advocate</span>
                  </li>
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="mr-2">📧</span>
                  Let's Connect
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Interested in collaboration or have questions about my research?
                </p>
                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;