
import { Publication, ResearchProject, Course, PressFeature } from '../types';

export const publicationsData: Publication[] = [
  // GBD Collaborator Publications
  {
    id: 1,
    title: 'Global, regional, and national trends in routine childhood vaccination coverage from 1980 to 2023 with forecasts to 2030: a systematic analysis for the Global Burden of Disease Study 2023',
    authors: ['GBD 2023 Childhood Vaccination Collaborators'],
    journal: 'The Lancet',
    year: 2025,
    links: { doi: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)01037-2/' },
    status: 'published',
    category: 'gbd-collaborator',
    bibtex: `@article{gbd2025vaccination,
  title={Global, regional, and national trends in routine childhood vaccination coverage from 1980 to 2023 with forecasts to 2030: a systematic analysis for the Global Burden of Disease Study 2023},
  author={{GBD 2023 Childhood Vaccination Collaborators}},
  journal={The Lancet},
  year={2025},
  publisher={Elsevier}
}`
  },
  {
    id: 2,
    title: 'Global, regional, and national burden of breast cancer among females, 1990-2023, with forecasts to 2050: a systematic analysis for the Global Burden of Disease Study 2023',
    authors: ['GBD 2023 Breast Cancer Collaborators'],
    journal: 'TBD',
    year: 2025,
    links: {},
    status: 'under-review',
    category: 'gbd-collaborator',
    bibtex: `@article{gbd2025breast,
  title={Global, regional, and national burden of breast cancer among females, 1990-2023, with forecasts to 2050: a systematic analysis for the Global Burden of Disease Study 2023},
  author={{GBD 2023 Breast Cancer Collaborators}},
  journal={Under Review},
  year={2025}
}`
  },
  {
    id: 3,
    title: 'Global, regional, and national burdens of headache disorders, 1990-2023: a systematic analysis for the Global Burden of Disease Study 2023',
    authors: ['GBD 2023 Headache Disorders Collaborators'],
    journal: 'TBD',
    year: 2025,
    links: {},
    status: 'under-review',
    category: 'gbd-collaborator',
    bibtex: `@article{gbd2025headache,
  title={Global, regional, and national burdens of headache disorders, 1990-2023: a systematic analysis for the Global Burden of Disease Study 2023},
  author={{GBD 2023 Headache Disorders Collaborators}},
  journal={Under Review},
  year={2025}
}`
  },

  // 2025 Publications
  {
    id: 4,
    title: 'Clinical and Hematological Manifestation of Dengue Patients in 2022 Outbreak: A Tertiary Care Hospital-Based Cross-Sectional Study',
    authors: ['Hossain, M.J.', 'Das, M.', 'Shahjahan, M.', 'Islam, M.W.', 'Towhid, S.T.'],
    journal: 'Health Science Reports',
    year: 2025,
    links: { doi: 'https://doi.org/10.1002/hsr2.70356' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2025clinical,
  title={Clinical and Hematological Manifestation of Dengue Patients in 2022 Outbreak: A Tertiary Care Hospital-Based Cross-Sectional Study},
  author={Hossain, Md Jubayer and Das, M and Shahjahan, M and Islam, MW and Towhid, ST},
  journal={Health Science Reports},
  volume={8},
  pages={e70356},
  year={2025},
  publisher={Wiley}
}`
  },
  {
    id: 5,
    title: 'Pan-cancer analysis reveals immunological and prognostic significance of CCT5 in human tumors',
    authors: ['Ahmed, M.Z.', 'Billah, M.M.', 'Ferdous, J.', 'Hossain, M.J.', 'et al.'],
    journal: 'Scientific Reports',
    year: 2025,
    links: { doi: 'https://doi.org/10.1038/s41598-025-88339-z' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{ahmed2025pan,
  title={Pan-cancer analysis reveals immunological and prognostic significance of CCT5 in human tumors},
  author={Ahmed, MZ and Billah, MM and Ferdous, J and Hossain, Md Jubayer and others},
  journal={Scientific Reports},
  volume={15},
  pages={14405},
  year={2025},
  publisher={Nature Publishing Group}
}`
  },
  {
    id: 6,
    title: 'Young stroke in Bangladesh: addressing rare cases with diagnostic challenges and much-needed solutions',
    authors: ['Das, M.', 'Hossain, M.J.'],
    journal: 'Stroke and Vascular Neurology',
    year: 2025,
    links: { doi: 'https://svn.bmj.com/content/early/2025/04/07/svn-2025-004178' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{das2025young,
  title={Young stroke in Bangladesh: addressing rare cases with diagnostic challenges and much-needed solutions},
  author={Das, M and Hossain, Md Jubayer},
  journal={Stroke and Vascular Neurology},
  year={2025},
  publisher={BMJ Publishing Group}
}`
  },

  // 2024 Publications
  {
    id: 7,
    title: 'Urgent call for compulsory premarital screening: a crucial step towards thalassemia prevention in Bangladesh',
    authors: ['Hossain, M.J.', 'Das, M.', 'Munni, U.R.'],
    journal: 'Orphanet Journal of Rare Diseases',
    year: 2024,
    links: { doi: 'https://doi.org/10.1186/s13023-024-03344-1' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2024urgent,
  title={Urgent call for compulsory premarital screening: a crucial step towards thalassemia prevention in Bangladesh},
  author={Hossain, Md Jubayer and Das, M and Munni, UR},
  journal={Orphanet Journal of Rare Diseases},
  volume={19},
  pages={326},
  year={2024},
  publisher={BioMed Central}
}`
  },
  {
    id: 8,
    title: 'Resistance and Co-Resistance of Metallo-Beta-Lactamase Genes in Diarrheal and Urinary-Tract Pathogens in Bangladesh',
    authors: ['Shanta, A.S.', 'Islam, N.', 'Al Asad, M.', 'Akter, K.', 'Habib, M.B.', 'Hossain, M.J.', 'Nahar, S.', 'Godman, B.', 'Islam, S.'],
    journal: 'Microorganisms',
    year: 2024,
    links: { doi: 'https://doi.org/10.3390/microorganisms12081589' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{shanta2024resistance,
  title={Resistance and Co-Resistance of Metallo-Beta-Lactamase Genes in Diarrheal and Urinary-Tract Pathogens in Bangladesh},
  author={Shanta, AS and Islam, N and Al Asad, M and Akter, K and Habib, MB and Hossain, Md Jubayer and Nahar, S and Godman, B and Islam, S},
  journal={Microorganisms},
  volume={12},
  pages={1589},
  year={2024},
  publisher={MDPI}
}`
  },
  {
    id: 9,
    title: 'Factors contributing to antibiotic misuse among parents of school-going children in Dhaka City, Bangladesh',
    authors: ['Islam, M.W.', 'Shahjahan, M.', 'Azad, A.K.', 'Hossain, M.J.'],
    journal: 'Scientific Reports',
    year: 2024,
    links: { doi: 'https://doi.org/10.1038/s41598-024-52313-y' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{islam2024factors,
  title={Factors contributing to antibiotic misuse among parents of school-going children in Dhaka City, Bangladesh},
  author={Islam, MW and Shahjahan, M and Azad, AK and Hossain, Md Jubayer},
  journal={Scientific Reports},
  volume={14},
  pages={2318},
  year={2024},
  publisher={Nature Publishing Group}
}`
  },
  {
    id: 10,
    title: 'Community engagement and social participation in dengue prevention: A cross-sectional study in Dhaka City',
    authors: ['Hossain, M.J.', 'Das, M.', 'Islam, M.W.', 'Shahjahan, M.', 'Ferdous, J.'],
    journal: 'Health Science Reports',
    year: 2024,
    links: { doi: 'https://doi.org/10.1002/hsr2.2022' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2024community,
  title={Community engagement and social participation in dengue prevention: A cross-sectional study in Dhaka City},
  author={Hossain, Md Jubayer and Das, M and Islam, MW and Shahjahan, M and Ferdous, J},
  journal={Health Science Reports},
  volume={7},
  pages={e2022},
  year={2024},
  publisher={Wiley}
}`
  },
  {
    id: 11,
    title: 'Prevalence, antibiotic resistance pattern for bacteriuria from patients with urinary tract infections',
    authors: ['Hossain, M.J.', 'Azad, A.K.', 'Shahid, M.S.B.', 'Shahjahan, M.', 'Ferdous, J.'],
    journal: 'Health Science Reports',
    year: 2024,
    links: { doi: 'https://doi.org/10.1002/hsr2.2039' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2024prevalence,
  title={Prevalence, antibiotic resistance pattern for bacteriuria from patients with urinary tract infections},
  author={Hossain, Md Jubayer and Azad, AK and Shahid, MSB and Shahjahan, M and Ferdous, J},
  journal={Health Science Reports},
  volume={7},
  pages={e2039},
  year={2024},
  publisher={Wiley}
}`
  },
  {
    id: 12,
    title: 'Food Consumption Patterns and Sedentary Behaviors Among the University Students: A Cross-Sectional Study',
    authors: ['Akter, M.M.', 'Hossain, M.J.'],
    journal: 'Health Science Reports',
    year: 2024,
    links: { doi: 'https://doi.org/10.1002/hsr2.70259' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{akter2024food,
  title={Food Consumption Patterns and Sedentary Behaviors Among the University Students: A Cross-Sectional Study},
  author={Akter, MM and Hossain, Md Jubayer},
  journal={Health Science Reports},
  volume={7},
  pages={e70259},
  year={2024},
  publisher={Wiley}
}`
  },

  // 2023 Publications
  {
    id: 13,
    title: 'Health-related quality of life among thalassemia patients in Bangladesh using the SF‑36 questionnaire',
    authors: ['Hossain, M.J.', 'Islam, M.W.', 'Munni, U.R.', 'Gulshan, R.', 'Mukta, S.A.', 'Miah, M.S.', 'Sultana, S.', 'Karmakar, M.', 'Ferdous, J.', 'Islam, M.A.'],
    journal: 'Scientific Reports',
    year: 2023,
    links: { doi: 'https://doi.org/10.1038/s41598-023-34205-9' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2023health,
  title={Health-related quality of life among thalassemia patients in Bangladesh using the SF‑36 questionnaire},
  author={Hossain, Md Jubayer and Islam, MW and Munni, UR and Gulshan, R and Mukta, SA and Miah, MS and Sultana, S and Karmakar, M and Ferdous, J and Islam, MA},
  journal={Scientific Reports},
  volume={13},
  number={1},
  year={2023},
  publisher={Nature Publishing Group}
}`
  },
  {
    id: 14,
    title: 'Knowledge and Self-Management Practice Among Diabetic Patients from the Urban Areas in Bangladesh',
    authors: ['Hossain, M.J.', 'Towhid, S.T.', 'Akter, S.', 'Shahjahan, M.', 'Roy, T.', 'Akter, B.', 'Nodee, T.A.'],
    journal: 'Journal of Angiotherapy',
    year: 2023,
    links: { doi: 'https://doi.org/10.25163/angiotherapy.717340' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2023knowledge,
  title={Knowledge and Self-Management Practice Among Diabetic Patients from the Urban Areas in Bangladesh},
  author={Hossain, Md Jubayer and Towhid, ST and Akter, S and Shahjahan, M and Roy, T and Akter, B and Nodee, TA},
  journal={Journal of Angiotherapy},
  volume={7},
  number={1},
  pages={1--10},
  year={2023}
}`
  },

  // 2022 Publications
  {
    id: 15,
    title: 'Perception of Students on Antibiotic Resistance and Prevention: An Online, Community-Based Case Study from Dhaka, Bangladesh',
    authors: ['Towhid, S.T.', 'Hossain, M.J.', 'Sammo, M.A.S.', 'Akter, S.'],
    journal: 'European Journal of Biology and Biotechnology',
    year: 2022,
    links: { doi: 'https://doi.org/10.24018/ejbio.2022.3.3.341' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{towhid2022perception,
  title={Perception of Students on Antibiotic Resistance and Prevention: An Online, Community-Based Case Study from Dhaka, Bangladesh},
  author={Towhid, ST and Hossain, Md Jubayer and Sammo, MAS and Akter, S},
  journal={European Journal of Biology and Biotechnology},
  year={2022}
}`
  },
  {
    id: 16,
    title: 'Knowledge and Attitudes towards Thalassemia among Public University Students in Bangladesh',
    authors: ['Hossain, M.J.', 'Towhid, S.T.', 'Sultana, S.', 'Mukta, S.A.', 'Gulshan, R.', 'Miah, M.S.'],
    journal: 'Microbial Bioactives',
    year: 2022,
    links: { doi: 'https://doi.org/10.25163/microbbioacts.526325' },
    status: 'published',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2022knowledge,
  title={Knowledge and Attitudes towards Thalassemia among Public University Students in Bangladesh},
  author={Hossain, Md Jubayer and Towhid, ST and Sultana, S and Mukta, SA and Gulshan, R and Miah, MS},
  journal={Microbial Bioactives},
  volume={5},
  number={2},
  year={2022}
}`
  },

  // Under Review
  {
    id: 17,
    title: 'Lack of knowledge and training about antibiotic resistance among community pharmacists in Bangladesh: a cross-sectional study',
    authors: ['Hossain, M.J.', 'Shahariar, M.', 'Barsha, L.H.J.', 'Shahjahan, M.', 'Towhid, S.T.', 'Sheikh, M.K.', 'Hasan, M.M.', 'Rahman, M.H.', 'Sazid, M.S.'],
    journal: 'Health Science Reports',
    year: 2024,
    links: {},
    status: 'submitted',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2024lack,
  title={Lack of knowledge and training about antibiotic resistance among community pharmacists in Bangladesh: a cross-sectional study},
  author={Hossain, Md Jubayer and Shahariar, M and Barsha, LHJ and Shahjahan, M and Towhid, ST and Sheikh, MK and Hasan, MM and Rahman, MH and Sazid, MS},
  journal={Submitted to Health Science Reports},
  year={2024}
}`
  },
  {
    id: 18,
    title: 'Improving access to care and treatment for Hirayama patients in Bangladesh: a call for action',
    authors: ['Hossain, M.J.', 'Das, M.'],
    journal: 'Orphanet Journal of Rare Diseases',
    year: 2024,
    links: {},
    status: 'submitted',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2024improving,
  title={Improving access to care and treatment for Hirayama patients in Bangladesh: a call for action},
  author={Hossain, Md Jubayer and Das, M},
  journal={Submitted to Orphanet Journal of Rare Diseases},
  year={2024}
}`
  },
  {
    id: 19,
    title: 'Differential Expression and Prognostic Significance of CDK1 and CDK6 in Breast Cancer: A Multi-Omics Approach',
    authors: ['Islam, M.W.', 'Fariha, F.T.J.', 'Ahmed, M.Z.', 'Ferdous, J.', 'Lota, H.B.', 'Hossain, M.S.', 'Kundu, P.', 'Shahjahan, M.', 'Hossain, M.J.'],
    journal: 'Heliyon',
    year: 2024,
    links: {},
    status: 'submitted',
    category: 'peer-reviewed',
    bibtex: `@article{islam2024differential,
  title={Differential Expression and Prognostic Significance of CDK1 and CDK6 in Breast Cancer: A Multi-Omics Approach},
  author={Islam, MW and Fariha, FTJ and Ahmed, MZ and Ferdous, J and Lota, HB and Hossain, MS and Kundu, P and Shahjahan, M and Hossain, Md Jubayer},
  journal={Submitted to Heliyon},
  year={2024}
}`
  },
  {
    id: 20,
    title: 'Eating disorders and associated mental health problems among the students at selected schools and colleges in Dhaka city, Bangladesh',
    authors: ['Akter, M.M.', 'Sakib, M.N.', 'Bhuiyan, Z.R.', 'Hossen, I.', 'Paul, A.', 'Limon, M.H.', 'Munny, F.A.', 'Tisha, A.T.', 'Imita, R.T.', 'Mehjabin, K.', 'Bethi, K.B.', 'Yusuf, S.', 'Banik, P.C.', 'Hossain, M.J.'],
    journal: 'The Lancet Child & Adolescent Health',
    year: 2024,
    links: {},
    status: 'submitted',
    category: 'peer-reviewed',
    bibtex: `@article{akter2024eating,
  title={Eating disorders and associated mental health problems among the students at selected schools and colleges in Dhaka city, Bangladesh},
  author={Akter, MM and Sakib, MN and Bhuiyan, ZR and Hossen, I and Paul, A and Limon, MH and Munny, FA and Tisha, AT and Imita, RT and Mehjabin, K and Bethi, KB and Yusuf, S and Banik, PC and Hossain, Md Jubayer},
  journal={Submitted to The Lancet Child \& Adolescent Health},
  year={2024}
}`
  },
  {
    id: 21,
    title: 'Two out of five babies are born through c-section in Bangladesh: An urgent call for healthcare policy reforms',
    authors: ['Hossain, M.J.', 'Shahjahan, M.', 'Hassan, M.M.', 'Nohor, N.', 'Sony, S.A.'],
    journal: 'BMC Public Health',
    year: 2024,
    links: {},
    status: 'submitted',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2024two,
  title={Two out of five babies are born through c-section in Bangladesh: An urgent call for healthcare policy reforms},
  author={Hossain, Md Jubayer and Shahjahan, M and Hassan, MM and Nohor, N and Sony, SA},
  journal={Submitted to BMC Public Health},
  year={2024}
}`
  },

  // In Preparation
  {
    id: 22,
    title: 'One‑Health Assessment of Emerging Antimicrobial Resistance Genes (ARGs) in Bangladeshi Livestock, Soil, Environment, and Human: Tackling the Crisis Together',
    authors: ['Hossain, M.J.', 'Islam, S.'],
    journal: 'TBD',
    year: 2024,
    links: {},
    status: 'in-preparation',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2024one,
  title={One‑Health Assessment of Emerging Antimicrobial Resistance Genes (ARGs) in Bangladeshi Livestock, Soil, Environment, and Human: Tackling the Crisis Together},
  author={Hossain, Md Jubayer and Islam, S},
  journal={In Preparation},
  year={2024}
}`
  },
  {
    id: 23,
    title: 'Heat Stress Analysis using Discomfort Index Method: A Comprehensive Study in Bangladesh',
    authors: ['Hossain, M.J.', 'Habiba, U.', 'Tuhin, M.A.A.', 'Mim, N.A.', 'Mabsurah, K.'],
    journal: 'TBD',
    year: 2024,
    links: {},
    status: 'in-preparation',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2024heat,
  title={Heat Stress Analysis using Discomfort Index Method: A Comprehensive Study in Bangladesh},
  author={Hossain, Md Jubayer and Habiba, U and Tuhin, MAA and Mim, NA and Mabsurah, K},
  journal={In Preparation},
  year={2024}
}`
  },
  {
    id: 24,
    title: 'Premarital Screening for Thalassemia Prevention: A KAP Study in Bangladesh',
    authors: ['Hossain, M.J.', 'Das, M.', 'Maruf, M.F.', 'Akter, M.M.', 'Towhid, S.T.'],
    journal: 'TBD',
    year: 2023,
    links: {},
    status: 'in-preparation',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2023premarital,
  title={Premarital Screening for Thalassemia Prevention: A KAP Study in Bangladesh},
  author={Hossain, Md Jubayer and Das, M and Maruf, MF and Akter, MM and Towhid, ST},
  journal={In Preparation},
  year={2023}
}`
  },
  {
    id: 25,
    title: 'Depression, Anxiety, and Stress with Associated Factors among Bangladeshi University Students',
    authors: ['Hossain, M.J.', 'Hasan, M.T.', 'Iffat, N.', 'Maruf, M.F.', 'Das, M.', 'Akter, M.M.', 'Shahjahan, M.', 'Islam, W.'],
    journal: 'TBD',
    year: 2023,
    links: {},
    status: 'in-preparation',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2023depression,
  title={Depression, Anxiety, and Stress with Associated Factors among Bangladeshi University Students},
  author={Hossain, Md Jubayer and Hasan, MT and Iffat, N and Maruf, MF and Das, M and Akter, MM and Shahjahan, M and Islam, W},
  journal={In Preparation},
  year={2023}
}`
  },
  {
    id: 26,
    title: 'Factors influencing the knowledge, attitudes, and practices of biomedical waste management among healthcare professionals in Bangladesh',
    authors: ['Hossain, M.J.', 'Rahmuna, T.', 'Tamim, T.M.', 'Akter, N.', 'Das, M.'],
    journal: 'TBD',
    year: 2023,
    links: {},
    status: 'in-preparation',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2023factors,
  title={Factors influencing the knowledge, attitudes, and practices of biomedical waste management among healthcare professionals in Bangladesh},
  author={Hossain, Md Jubayer and Rahmuna, T and Tamim, TM and Akter, N and Das, M},
  journal={In Preparation},
  year={2023}
}`
  },
  {
    id: 27,
    title: 'Knowledge and awareness about breast cancer among school and college‑going girls in Bangladesh',
    authors: ['Hossain, M.J.', 'Das, M.', 'Akter, M.M.'],
    journal: 'TBD',
    year: 2023,
    links: {},
    status: 'in-preparation',
    category: 'peer-reviewed',
    bibtex: `@article{hossain2023knowledge,
  title={Knowledge and awareness about breast cancer among school and college‑going girls in Bangladesh},
  author={Hossain, Md Jubayer and Das, M and Akter, MM},
  journal={In Preparation},
  year={2023}
}`
  }
];

export const researchProjectsData: ResearchProject[] = [
  {
    id: 1,
    title: 'AI-driven Genomic Variant Interpretation',
    description: 'Developing a deep learning framework to classify the pathogenicity of genomic variants, integrating multi-omic data sources for improved accuracy.',
    tags: ['Deep Learning', 'Genomics', 'Variant Calling', 'Multi-omics'],
    links: { github: '#' },
  },
  {
    id: 2,
    title: 'Single-Cell Atlas of Immune Response',
    description: 'Mapping the dynamic changes in immune cell populations during disease progression using high-throughput single-cell RNA sequencing and custom computational pipelines.',
    tags: ['scRNA-seq', 'Immunology', 'Bioinformatics Pipeline', 'Data Visualization'],
    links: { github: '#', paper: '#' },
  },
  {
    id: 3,
    title: 'Predictive Modeling for Personalized Medicine',
    description: 'Building machine learning models that predict patient response to therapies based on their genetic and clinical profiles, aiming to advance personalized medicine.',
    tags: ['Machine Learning', 'Personalized Medicine', 'Clinical Data', 'Predictive Analytics'],
    links: {},
  },
];

export const coursesData: Course[] = [
    {
        id: 1,
        title: "Introduction to Computational Biology",
        code: "BIO-301",
        description: "A foundational course covering key algorithms and data structures used in bioinformatics, from sequence alignment to phylogenetic analysis.",
        links: { syllabus: '#', slides: '#'}
    },
    {
        id: 2,
        title: "Machine Learning for Biologists",
        code: "CSB-510",
        description: "An applied course on machine learning techniques tailored for biological data, including deep learning for genomics and proteomics.",
        links: { syllabus: '#', slides: '#', github: '#'}
    },
    {
        id: 3,
        title: "Advanced Topics in Single-Cell Analysis",
        code: "GEN-720",
        description: "A graduate-level seminar on the latest computational methods for analyzing single-cell multi-omics data.",
        links: { syllabus: '#'}
    }
];

export const pressFeaturesData: PressFeature[] = [
  {
    id: 1,
    outletName: 'The Daily Star',
    outletLogoUrl: 'https://picsum.photos/seed/dailystar/400/200',
    headline: "Young Bangladeshi Researcher Leading AI Revolution in Global Health",
    date: "November 15, 2024",
    link: "#",
    type: 'Feature Story',
    featured: true
  },
  {
    id: 2,
    outletName: 'Dhaka Tribune',
    outletLogoUrl: 'https://picsum.photos/seed/dhakatribune/400/200',
    headline: "From Data to Innovation: How Bioinformatics is Transforming Healthcare in Bangladesh",
    date: "October 8, 2024",
    link: "#",
    type: 'Interview',
    featured: true
  },
  {
    id: 3,
    outletName: 'Bangladesh Pratidin',
    outletLogoUrl: 'https://picsum.photos/seed/bdpratidin/400/200',
    headline: "DeepBio Limited: Pioneering AI-Driven Solutions for Personalized Medicine",
    date: "September 22, 2024",
    link: "#",
    type: 'Business Profile',
    featured: true
  },
  {
    id: 4,
    outletName: 'New Age',
    outletLogoUrl: 'https://picsum.photos/seed/newage/400/200',
    headline: "CHIRAL Bangladesh: Building the Future of Computational Biology Education",
    date: "August 30, 2024",
    link: "#",
    type: 'Education Feature'
  },
  {
    id: 5,
    outletName: 'The Business Standard',
    outletLogoUrl: 'https://picsum.photos/seed/tbsnews/400/200',
    headline: "Tech Entrepreneur Bridges Gap Between Academic Research and Industry Innovation",
    date: "July 18, 2024",
    link: "#",
    type: 'Entrepreneur Spotlight'
  },
  {
    id: 6,
    outletName: 'United News of Bangladesh',
    outletLogoUrl: 'https://picsum.photos/seed/unb/400/200',
    headline: "AI and Machine Learning Applications in Drug Discovery: Bangladesh Perspective",
    date: "June 25, 2024",
    link: "#",
    type: 'Research Coverage'
  },
  {
    id: 7,
    outletName: 'Prothom Alo',
    outletLogoUrl: 'https://picsum.photos/seed/prothomalo/400/200',
    headline: "Digital Health Revolution: How Young Researchers are Changing Healthcare",
    date: "May 12, 2024",
    link: "#",
    type: 'Feature Story'
  },
  {
    id: 8,
    outletName: 'The Independent',
    outletLogoUrl: 'https://picsum.photos/seed/independent/400/200',
    headline: "Training the Next Generation: Innovative Approaches to Bioinformatics Education",
    date: "April 5, 2024",
    link: "#",
    type: 'Education Feature'
  },
  {
    id: 9,
    outletName: 'Financial Express',
    outletLogoUrl: 'https://picsum.photos/seed/financialexpress/400/200',
    headline: "Startup Success: How DeepBio is Making Waves in the Biotech Industry",
    date: "March 20, 2024",
    link: "#",
    type: 'Startup Feature'
  },
  {
    id: 10,
    outletName: 'bdnews24.com',
    outletLogoUrl: 'https://picsum.photos/seed/bdnews24/400/200',
    headline: "Research Excellence: Publications That are Shaping Global Health Policy",
    date: "February 14, 2024",
    link: "#",
    type: 'Research Achievement'
  }
];
