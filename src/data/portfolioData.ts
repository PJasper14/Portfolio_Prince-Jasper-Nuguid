import { CertificationGroup, EducationItem, ExperienceItem, ProjectItem, SkillItem } from '../types';

export const PERSONAL_INFO = {
  name: "Prince Jasper G. Nuguid",
  primaryHeadline: "Aspiring Software Engineer | Information Technology Graduate",
  alternateHeadlines: [
    "Information Technology Graduate",
    "Entry-Level Software Developer",
    "Web & Mobile Application Developer",
    "Software Development Enthusiast"
  ],
  degree: "Bachelor of Science in Information Technology",
  university: "Pamantasan ng Cabuyao",
  gradYear: "2026",
  email: "nuguidprincejasper14@gmail.com",
  location: "Cabuyao City, Laguna, Philippines",
  github: "https://github.com/PJasper14",
  linkedin: "https://www.linkedin.com/in/prince-jasper-nuguid-233b2a40b",
  jobstreet: "https://ph.jobstreet.com/profiles/princejasper-nuguid-yk5VTFBKRT",
  summary: "A motivated Information Technology graduate from Pamantasan ng Cabuyao with a strong passion for software engineering, full-stack web development, and mobile applications. Driven by curiosity and a commitment to continuous learning, I build clean, practical digital solutions that solve real-world problems.",
  aboutNarrative: `I recently graduated with a Bachelor of Science in Information Technology from Pamantasan ng Cabuyao. Throughout my college journey, I developed a deep fascination with how code turns abstract ideas into functional, real-world solutions that improve people's everyday lives.

My academic journey and hands-on internship experience gave me practical exposure to full-stack web development, mobile application development, database management, technical support, and system architecture. Beyond coding, I enjoy graphic design, system analysis, and technical documentation—allowing me to bridge the gap between technical logic and user-centered design.

Although I am at the beginning of my professional career, I approach software development with high curiosity, discipline, and a strong work ethic. I am eager to contribute my technical foundation to a collaborative team, learn from experienced engineering mentors, and continuously evolve into an impactful software engineer.`
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: 'JavaScript', category: 'Programming', level: 'Intermediate' },
  { name: 'TypeScript', category: 'Programming', level: 'Intermediate' },
  { name: 'PHP', category: 'Programming', level: 'Intermediate' },
  { name: 'Java', category: 'Programming', level: 'Foundational' },
  { name: 'SQL', category: 'Programming', level: 'Intermediate' },

  // Frontend
  { name: 'React', category: 'Frontend', level: 'Intermediate' },
  { name: 'HTML5', category: 'Frontend', level: 'Advanced' },
  { name: 'CSS3', category: 'Frontend', level: 'Advanced' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Intermediate' },

  // Backend
  { name: 'Laravel', category: 'Backend', level: 'Intermediate' },
  { name: 'REST API Design', category: 'Backend', level: 'Intermediate' },

  // Mobile
  { name: 'React Native', category: 'Mobile', level: 'Intermediate' },

  // Database
  { name: 'MySQL', category: 'Database', level: 'Intermediate' },

  // Tools
  { name: 'Git', category: 'Tools', level: 'Intermediate' },
  { name: 'GitHub', category: 'Tools', level: 'Intermediate' },
  { name: 'VS Code', category: 'Tools', level: 'Advanced' },
  { name: 'Figma', category: 'Tools', level: 'Intermediate' },
  { name: 'Canva', category: 'Tools', level: 'Advanced' },
  { name: 'Microsoft Office', category: 'Tools', level: 'Advanced' },

  // Other
  { name: 'Computer Networking', category: 'Other', level: 'Foundational' },
  { name: 'Technical Troubleshooting', category: 'Other', level: 'Intermediate' },
  { name: 'IT Support', category: 'Other', level: 'Intermediate' },
  { name: 'Graphic Design', category: 'Other', level: 'Intermediate' },
  { name: 'System Analysis & Design', category: 'Other', level: 'Intermediate' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'peso-internship',
    title: 'Information Technology Intern',
    company: 'PESO Cabuyao – Nutrition Office',
    department: 'Municipal IT & Nutrition Services',
    period: 'January 2026 – April 2026',
    startDate: '2026-01',
    endDate: '2026-04',
    location: 'Cabuyao City, Laguna',
    type: 'Internship',
    highlights: [
      'Engineered and deployed a Barangay Document Request System to digitize and expedite municipal document issuance.',
      'Provided hands-on technical support and IT operations assistance across department workstations and hardware equipment.',
      'Conducted rigorous software testing, system troubleshooting, and data verification to maintain municipal record accuracy.',
      'Designed official digital graphic announcements, infographics, and event collateral for public community programs.',
      'Authored detailed user documentation, administrative operating procedures, and technical logs for office personnel.'
    ],
    technologies: ['React', 'PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'Figma', 'Technical Writing']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'integrated-mgmt-system',
    title: 'Integrated Web & Mobile EPOL Management System',
    tagline: 'Comprehensive enterprise operational suite with biometric authentication and geofenced attendance tracking.',
    category: 'Full-Stack & Mobile',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    overview: 'A robust multi-module management solution engineered to unify organizational workflow, employee tracking, inventory oversight, and incident reporting across both web dashboard and mobile application platforms.',
    problem: 'Organizations often struggle with fragmented administrative systems, manual attendance logging prone to proxy punching, delayed inventory reconciliation, and inefficient incident reporting.',
    solution: 'Built a centralized Web & Mobile system powered by a unified REST API, integrating biometric fingerprint authentication and GPS geofencing to validate employee check-ins and streamline operational records.',
    modules: [
      'Attendance Management (Biometric & Geofenced)',
      'Inventory & Asset Tracking',
      'Employee Directory & Account Management',
      'Incident & Issue Reporting Pipeline',
      'Role-based Access Control (RBAC)'
    ],
    features: [
      'Biometric Fingerprint Authentication integration for tamper-proof attendance',
      'GPS Geofencing to verify physical location during mobile check-ins',
      'Real-time inventory level alerts and stock movement history',
      'Interactive incident reporting pipeline with priority status tracking',
      'Responsive admin web portal and cross-platform mobile companion app'
    ],
    technologies: ['React', 'React Native', 'Laravel', 'MySQL', 'REST API', 'Tailwind CSS'],
    challenges: 'Ensuring real-time synchronization between the mobile app and backend API while handling network latency in field conditions, alongside integrating hardware biometric SDK protocols.',
    lessonsLearned: 'Mastered REST API contract design, mobile state management with React Native, geofencing boundary calculations, and database indexing for high-frequency attendance logging.',
    githubUrl: 'https://github.com/PJasper14',
    liveUrl: '#'
  },
  {
    id: 'barangay-doc-system',
    title: 'Barangay Document Request System',
    tagline: 'Automated municipal portal reducing document request processing times for local residents.',
    category: 'Web Application',
    featured: true,
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80',
    overview: 'A web-based document issuance platform built during my IT internship at PESO Cabuyao – Nutrition Office to streamline resident requests for official clearances, certificates, and municipal permits.',
    problem: 'Manual paper-based document requests resulted in long queue lines at local offices, lost physical forms, and administrative delays in verifying resident eligibility.',
    solution: 'Designed an intuitive self-service portal where residents can submit request forms, upload supporting requirements, and track issuance status digitally, while administrators process applications with automated status updates.',
    features: [
      'Digital request submission form with file upload support',
      'Real-time application status tracking with unique tracking code',
      'Admin approval workflow with automated document generation',
      'Encrypted record storage and searchable resident database',
      'Analytics dashboard summarizing weekly document request volume'
    ],
    technologies: ['React', 'PHP / Laravel', 'MySQL', 'Tailwind CSS', 'Figma'],
    challenges: 'Designing a simple user interface accessible for residents of all digital literacy levels, while ensuring administrative security for municipal records.',
    lessonsLearned: 'Gained invaluable domain experience in civic technology, user experience (UX) simplification, government administrative workflows, and input sanitization for public web forms.',
    githubUrl: 'https://github.com/PJasper14/SalaManagementSystem',
    liveUrl: '#'
  },
  {
    id: 'coffee-shop-sap',
    title: 'SAP Coffee Shop Management System',
    tagline: 'Point-of-sale and inventory management solution built for a local coffee shop business.',
    category: 'Desktop Application',
    featured: true,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    overview: 'A business management application designed for a local coffee shop, providing streamlined order processing, inventory tracking, and sales reporting in a single integrated desktop solution.',
    problem: 'Local coffee shops operating manually struggle with inefficient order taking, inaccurate inventory counts, and no clear visibility into daily sales performance or profit trends.',
    solution: 'Developed a complete point-of-sale and back-office management system that digitizes order processing, automates inventory deduction per sale, and generates visual sales reports for the business owner.',
    features: [
      'Point-of-sale interface for fast order entry and billing',
      'Product catalog management with category organization',
      'Real-time inventory deduction and low-stock alerts',
      'Daily, weekly, and monthly sales reports with visual charts',
      'Transaction history and receipt generation'
    ],
    technologies: ['Java', 'MySQL', 'NetBeans IDE', 'JFreeChart'],
    challenges: 'Designing an intuitive POS interface that non-technical staff could operate efficiently under high-volume rush hours, while maintaining accurate inventory synchronization after every transaction.',
    lessonsLearned: 'Strengthened understanding of Java desktop GUI development, relational database design for transactional systems, and applying business process analysis to real-world software requirements.',
    githubUrl: 'https://github.com/PJasper14/SAP_CoffeShop_Nuguid',
    liveUrl: '#'
  },
  {
    id: 'spotmap',
    title: 'SpotMap – Child Malnutrition Mapping System',
    tagline: 'Interactive geospatial mapping tool for tracking and visualizing child malnutrition status in communities.',
    category: 'Web Application',
    featured: true,
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
    overview: 'A web-based geographic mapping system developed during internship at PESO Cabuyao – Nutrition Office that enables health workers to pin, edit, and remove location markers representing children screened for malnutrition, with visual status indicators per household.',
    problem: 'Barangay nutrition workers relied on manual paper maps and spreadsheets to track household locations and malnutrition status of monitored children, making it difficult to visualize geographic distribution or identify high-risk areas quickly.',
    solution: "Built an interactive map application where authorized users can add, edit, and delete location pins for each child record. Each pin visually encodes the child's malnutrition status using color-coded markers, providing health officials with an at-a-glance geographic overview of community nutritional health.",
    features: [
      'Interactive map with custom pin placement for each child household',
      'Color-coded status markers indicating malnutrition severity levels',
      'Add, edit, and delete pin functionality with confirmation dialogs',
      'Child record details viewable on pin click (name, age, status, barangay)',
      'Role-based access for health workers and administrators'
    ],
    technologies: ['PHP', 'JavaScript', 'Leaflet.js', 'MySQL', 'CSS3'],
    challenges: 'Integrating an open-source map library with a server-side PHP backend while ensuring that pin state changes were reliably persisted to the database and reflected in real-time without page reloads.',
    lessonsLearned: 'Gained experience with geospatial web mapping libraries (Leaflet.js), civic/health data systems, and designing UI for non-technical government field workers with low digital literacy.',
    githubUrl: 'https://github.com/PJasper14/SpotMap',
    liveUrl: '#'
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    tagline: 'High-performance developer portfolio showcasing frontend craft, responsive design, and technical identity.',
    category: 'Frontend Engineering',
    featured: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    overview: 'A sleek, modern developer portfolio created to showcase my software development journey, technical skills, and academic projects with a premium aesthetic.',
    problem: 'Standard resume PDFs lack interactivity and fail to demonstrate modern frontend engineering practices, design sensibilities, accessibility standards, and responsive execution.',
    solution: 'Engineered a lightning-fast single-page web app using React, Vite, TypeScript, and Framer Motion with Dark/Light theme switching, clean micro-interactions, and accessible UI patterns.',
    features: [
      'Minimalist Vercel & Linear inspired design system',
      'Seamless Light & Dark theme toggle with persistence',
      'Interactive project modal views with technical breakdowns',
      'Smooth scroll navigation and scroll-triggered animations',
      'Fully responsive dynamic grid layout optimized for mobile and desktop'
    ],
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
    challenges: 'Balancing visually striking visual elements (animations, glassmorphism) with strict performance budget and accessibility standards.',
    lessonsLearned: 'Deepened expertise in TypeScript component architecture, Tailwind styling primitives, accessibility focus management, and fluid motion design.',
    githubUrl: 'https://github.com/PJasper14/Portfolio_Prince-Jasper-Nuguid',
    liveUrl: '#'
  }
];

export const CERTIFICATIONS_DATA: CertificationGroup[] = [
  {
    provider: 'Cisco',
    items: [
      {
        title: 'Computer Hardware Basics',
        description: 'Essential PC architecture, component diagnostics, assembly, hardware maintenance, and troubleshooting protocols.',
        skills: ['Computer Hardware', 'Diagnostics', 'Hardware Maintenance']
      },
      {
        title: 'Digital Awareness',
        description: 'Fundamental digital literacy, internet navigation principles, and emerging technology concepts.',
        skills: ['Digital Literacy', 'Emerging Tech', 'IT Fundamentals']
      },
      {
        title: 'Digital Safety and Security Awareness',
        description: 'Online security practices, data privacy fundamentals, personal cyber hygiene, and threat awareness.',
        skills: ['Digital Safety', 'Data Privacy', 'Cyber Hygiene']
      },
      {
        title: 'Introduction to Cybersecurity',
        description: 'Foundational concepts in network security, threat mitigation strategies, encryption, and defense protocols.',
        skills: ['Cybersecurity', 'Network Security', 'Threat Assessment']
      },
      {
        title: 'Introduction to Internet of Things',
        description: 'Overview of IoT ecosystems, connected devices, sensor networks, and smart technology integration.',
        skills: ['IoT', 'Smart Devices', 'Network Integration']
      },
      {
        title: 'Introduction to Modern AI',
        description: 'Foundational understanding of modern artificial intelligence, machine learning concepts, and practical applications.',
        skills: ['Modern AI', 'Machine Learning', 'AI Applications']
      }
    ]
  },
  {
    provider: 'IBM',
    items: [
      {
        title: 'Web Development Fundamentals',
        description: 'Core web architecture, modern standards, client-side development principles, and HTML/CSS/JS practices.',
        skills: ['Web Development', 'HTML5 & CSS3', 'JavaScript', 'Web Architecture']
      },
      {
        title: 'Cybersecurity Fundamentals',
        description: 'Defense-in-depth principles, security frameworks, cryptography, and enterprise threat analysis.',
        skills: ['Cybersecurity', 'Security Frameworks', 'Cryptography']
      },
      {
        title: 'Information Technology Fundamentals',
        description: 'Broad foundational mastery of computer systems, networking basics, operating systems, and data management.',
        skills: ['IT Systems', 'Operating Systems', 'Networking Basics']
      },
      {
        title: 'Artificial Intelligence Fundamentals',
        description: 'Fundamental principles of AI models, natural language processing, computer vision, and machine intelligence.',
        skills: ['Artificial Intelligence', 'AI Models', 'Machine Intelligence']
      },
      {
        title: 'Cloud Computing Fundamentals',
        description: 'Cloud service models (IaaS, PaaS, SaaS), virtualization, cloud security, and deployment strategies.',
        skills: ['Cloud Computing', 'IaaS / PaaS / SaaS', 'Virtualization']
      }
    ]
  },
  {
    provider: 'TESDA',
    items: [
      {
        title: 'Developing Designs for User Experience',
        description: 'User-centered design methodologies, UX research practices, wireframing, and usability testing.',
        skills: ['UX Design', 'Wireframing', 'User Research']
      },
      {
        title: 'Developing Designs for User Interface',
        description: 'Visual UI layout composition, color theory, typography, design design systems, and interactive prototyping.',
        skills: ['UI Design', 'Visual Layouts', 'Prototyping']
      },
      {
        title: 'Introduction to Visual Graphic Design',
        description: 'Core graphic design principles, digital asset creation, brand identity elements, and visual communication.',
        skills: ['Graphic Design', 'Visual Composition', 'Digital Media']
      },
      {
        title: 'Microsoft Cybersecurity Course: Security, Compliance, and Identity Fundamentals',
        description: 'Microsoft security solutions, identity and access management (IAM), compliance standards, and cloud defense.',
        skills: ['Microsoft Security', 'IAM', 'Compliance', 'Cloud Defense']
      },
      {
        title: 'Computer System Servicing NC II',
        description: 'National certification covering computer assembly, OS installation, network configuration, and hardware repair.',
        skills: ['System Servicing', 'Hardware Assembly', 'Network Setup']
      }
    ]
  },
  {
    provider: 'Google',
    items: [
      {
        title: 'Google Analytics Certification',
        description: 'Web analytics, event tracking setup, user behavior analysis, conversion measurement, and data reporting.',
        skills: ['Google Analytics', 'Web Analytics', 'Data Reporting']
      }
    ]
  },
  {
    provider: 'Wadhwani',
    items: [
      {
        title: 'Job Ready: Employability Skills',
        description: 'Professional workplace communication, team collaboration, problem-solving, and career readiness competencies.',
        skills: ['Employability Skills', 'Team Collaboration', 'Workplace Readiness']
      }
    ]
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Science in Information Technology',
  field: 'Information Technology',
  institution: 'Pamantasan ng Cabuyao',
  period: '2022 – 2026',
  location: 'Cabuyao City, Laguna',
  status: 'Graduate',
  coursework: [
    'Web Systems & Technologies',
    'Application Development & Emerging Technologies',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Software Engineering & System Analysis',
    'Mobile Computing',
    'Computer Networks & Security',
    'Human-Computer Interaction'
  ],
  achievements: [
    'Successfully developed and defended capstone project on Integrated Web & Mobile EPOL Management System.',
    'Completed 500 hours of IT internship at PESO Cabuyao–Nutrition Office.',
    'Active participant in academic technology seminars and developer workshops.'
  ]
};
