
import React from 'react';
import Section from '../components/Section';

const CVSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-primary-500 pb-2 mb-4">{title}</h3>
    {children}
  </div>
);

const CVEntry: React.FC<{ title: string; institution: string; date: string; description?: string }> = ({ title, institution, date, description }) => (
  <div className="mb-4">
    <div className="flex justify-between items-baseline">
      <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
    </div>
    <p className="italic text-gray-600 dark:text-gray-300">{institution}</p>
    {description && <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>}
  </div>
);

const CVPage: React.FC = () => {
  return (
    <Section title="Curriculum Vitae">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <a
            href="/cv.pdf" // Placeholder link
            download
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Download CV as PDF
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800/50 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <CVSection title="Education">
            <CVEntry
              title="Ph.D. in Bioinformatics"
              institution="University of Data Science"
              date="2015 - 2020"
              description="Dissertation: 'Scalable Machine Learning Models for Single-Cell Genomics'"
            />
            <CVEntry
              title="B.S. in Molecular Biology"
              institution="State Science College"
              date="2011 - 2015"
            />
          </CVSection>

          <CVSection title="Professional Appointments">
            <CVEntry
              title="Assistant Professor"
              institution="BioAI Institute, Tech University"
              date="2022 - Present"
            />
             <CVEntry
              title="Postdoctoral Research Fellow"
              institution="Tech University"
              date="2020 - 2022"
            />
          </CVSection>

          <CVSection title="Honors and Awards">
             <CVEntry
              title="Young Investigator Award"
              institution="National Bioinformatics Society"
              date="2023"
            />
             <CVEntry
              title="Presidential Postdoctoral Fellowship"
              institution="Tech University"
              date="2020"
            />
          </CVSection>
          
          <CVSection title="Skills">
             <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Programming:</strong> Python (Expert), R (Expert), C++, SQL, Shell Scripting</li>
                <li><strong>Bioinformatics:</strong> scRNA-seq, Bulk RNA-seq, WGS/WES, ChIP-seq, Proteomics, Metabolomics</li>
                <li><strong>Machine Learning:</strong> PyTorch, TensorFlow, Scikit-learn, Deep Learning (CNNs, RNNs, Transformers, VAEs), Statistical Modeling</li>
                <li><strong>Tools:</strong> Docker, Git, Snakemake, AWS, Google Cloud Platform</li>
             </ul>
          </CVSection>
        </div>
      </div>
    </Section>
  );
};

export default CVPage;
