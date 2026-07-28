import { CertificationGroup, EducationItem, ExperienceItem, ProjectItem, SkillItem } from '../types';

export const PERSONAL_INFO = {
  name: "Prince Jasper Nuguid",
  primaryHeadline: "Aspiring Software Engineer | Information Technology Graduate",
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
  // Languages (moved from Programming, placed under appropriate sections below)

  // Frontend
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'Vue', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vite', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },

  // Backend
  { name: 'PHP', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Java', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },

  // Mobile
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Dart', category: 'Mobile' },

  // Database
  { name: 'MySQL', category: 'Database' },
  { name: 'SQLite', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Canva', category: 'Tools' },
  { name: 'Microsoft Office', category: 'Tools' },

  // Other
  { name: 'Computer Networking', category: 'Other' },
  { name: 'Technical Troubleshooting', category: 'Other' },
  { name: 'IT Support', category: 'Other' },
  { name: 'Graphic Design', category: 'Other' },
  { name: 'System Analysis & Design', category: 'Other' },
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
    technologies: ['React', 'PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'Figma']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'integrated-mgmt-system',
    title: 'Integrated Web & Mobile EPOL Management System',
    tagline: 'Capstone project — Comprehensive enterprise operational suite with biometric authentication and geofenced attendance tracking.',
    category: 'Full-Stack & Mobile (Capstone Project)',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    overview: 'Capstone project developed as the culminating requirement for a Bachelor of Science in Information Technology. A robust three-component system — Laravel REST API backend, Next.js 15 admin web portal, and an Expo React Native mobile app — engineered to unify field officer attendance, incident reporting, inventory management, validation workflows, and team assignment tracking for Environment Rescue Service (ERS) operations.',
    problem: 'Field operations teams struggled with manual paper-based attendance prone to proxy punching, fragmented inventory tracking, delayed incident reporting, and no real-time visibility into officer locations or team assignment status. Operations became critical when officers were deployed in areas with unreliable network connectivity.',
    solution: 'Built a centralized three-component architecture: (1) Laravel 12 REST API backend with Sanctum authentication, (2) Next.js 15 admin web dashboard, and (3) React Native mobile app via Expo SDK 54. Integrated biometric fingerprint authentication (expo-local-authentication), GPS geofencing (expo-location + react-native-maps), offline queue synchronization (AsyncStorage + custom SyncService), push notifications, and real-time in-app notification bubbles with scheduled missing validation checks.',
    modules: [
      'Attendance Management (Biometric & Geofenced Check-In/Out)',
      'Incident & Issue Reporting with Photo/Video Attachments',
      'Inventory & Equipment Distribution with Request Workflows',
      'Employee Directory & Team Assignment Management',
      'Validation Workflows (Team Leader Approval with Late/Missing Alerts)',
      'Role-based Access Control (Admin, Team Leader, Sub-Team Leader, Field Officer)',
      'Offline Queue & Sync Engine',
      'Real-time Notification System (In-App Bubbles + Push)',
      'Password Reset & Account Management',
      'PDF Export for DTR, Attendance Reports, and Safeguarding Records'
    ],
    features: [
      'Biometric Fingerprint Authentication (expo-local-authentication)',
      'GPS Geofencing with React Native Maps and Leaflet.js (web)',
      'Offline queue with AsyncStorage and auto-sync on reconnection',
      'Real-time in-app notification bubbles with 10-second polling',
      'Push notifications and scheduled Laravel commands for missing validations',
      'Multi-role workflows: Admin, Team Leader, Sub-Team Leader, Field Officer',
      'Inventory request, distribution, and return tracking',
      'Incident reporting with image/video capture (expo-image-picker)',
      'PDF generation for DTR and attendance reports (jsPDF + jspdf-autotable)',
      'Responsive admin web portal with Next.js 15, Tailwind CSS, and Radix UI'
    ],
    technologies: [
      'React Native',
      'Expo SDK 54',
      'Next.js 15',
      'React',
      'TypeScript',
      'Laravel 12',
      'PHP 8.2',
      'Laravel Sanctum',
      'MySQL',
      'React Navigation',
      'React Native Maps',
      'Leaflet.js',
      'Expo Location',
      'Expo Local Authentication',
      'Expo Image Picker',
      'AsyncStorage',
      'Radix UI',
      'Tailwind CSS',
      'jsPDF',
      'React Hook Form',
      'Zod'
    ],
    challenges: 'Engineering a reliable offline-first mobile architecture that queues attendance, inventory requests, and incident reports when network is unavailable, then syncs intelligently on reconnection without data loss or duplicate submissions. Implementing accurate GPS geofencing validation for attendance with device location permission variability across Android and iOS. Designing a scalable Laravel Sanctum token-based auth system shared across web and mobile platforms while maintaining session security.',
    lessonsLearned: 'Mastered offline-first mobile app patterns with AsyncStorage-backed queue services and sync reconciliation logic. Gained deep experience with Expo managed workflows, biometric APIs, geolocation services, and push notification setup across platforms. Learned Laravel Sanctum multi-guard authentication, scheduled artisan commands for background jobs (missing validation alerts), and Laravel REST API design with pagination, filtering, and real-time polling endpoints. Strengthened skills in React Native navigation (stack + drawer), React context state management, and building production-grade full-stack systems with comprehensive user role management.',
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
    category: 'Web Application',
    featured: true,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    overview: 'A single-page React application built as an academic lab project for ITP110 (Web Technologies), presenting a fully interactive coffee shop website with smooth scroll navigation, dynamic menu filtering, and a responsive layout.',
    problem: 'Academic requirement to demonstrate Single Page Application (SPA) architecture using React, implementing component-based design, state management, and seamless section navigation without page reloads.',
    solution: 'Built a complete Coffee Haven SPA in React with five content sections — Home, About, Menu, Contact, and Gallery — using Bootstrap for responsive styling and Vite as the build tool.',
    features: [
      'Single Page Application with all 5 sections on one scrollable page',
      'Sticky header with active section highlighting based on scroll position',
      'Dynamic menu category filtering (Hot Coffee, Cold Brew, Pastries) using React state',
      'Interactive contact form with validation and submission feedback',
      'Fully mobile-responsive design with Bootstrap 5 grid and custom CSS animations'
    ],
    technologies: ['React', 'Vite', 'Bootstrap 5', 'CSS3'],
    challenges: 'Designing an intuitive POS interface that non-technical staff could operate efficiently under high-volume rush hours, while maintaining accurate inventory synchronization after every transaction.',
    lessonsLearned: 'Strengthened understanding of React SPA architecture, component-based design, smooth scroll navigation, state management with React Hooks, and responsive web design with Bootstrap.',
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
    technologies: ['Next.js', 'React', 'TypeScript', 'MapLibre GL', 'Tailwind CSS', 'jsPDF', 'html2canvas'],
    challenges: 'Integrating an interactive map library (MapLibre GL) within a Next.js environment while ensuring that pin state changes were reliably persisted and reflected in real-time, and implementing PDF export of map views for health worker reporting.',
    lessonsLearned: 'Gained experience with geospatial web mapping libraries (MapLibre GL), Next.js app routing, civic/health data systems, PDF generation with jsPDF and html2canvas, and designing UI for non-technical government field workers with low digital literacy.',
    githubUrl: 'https://github.com/PJasper14/SpotMap',
    liveUrl: '#'
  },
  {
    id: 'ccs-profiling-system',
    title: 'CCS Profiling System',
    tagline: 'Full-stack student profiling platform for the College of Computer Studies with data export and role-based access.',
    category: 'Full-Stack Web Application',
    featured: true,
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1200&q=80',
    overview: 'A collaborative full-stack web application built for the College of Computer Studies (CCS) to manage and profile student and faculty records across three distinct user roles — Admin, Faculty, and Student — each with dedicated dashboards, login flows, and access-controlled features.',
    problem: 'Student and faculty profiling within a college department was managed through disconnected spreadsheets and manual records, making it difficult to consolidate data, track academic status across roles, and generate reports efficiently.',
    solution: 'Developed a centralized profiling system with a React SPA frontend and Laravel REST API backend supporting three POVs: an Admin dashboard for full data oversight, a Faculty dashboard for class and student management, and a Student dashboard for personal profile access. Secured with Laravel Sanctum token-based auth and Cloudinary-powered file uploads.',
    modules: [
      'Admin POV – Full dashboard with student/faculty CRUD, scheduling, events, instructions, and data export',
      'Faculty POV – Faculty dashboard with assigned student records and profile management',
      'Student POV – Student dashboard for personal profile viewing and updates'
    ],
    features: [
      'Three-role system: Admin, Faculty, and Student — each with separate login, signup, and dashboard',
      'Admin dashboard with modules for Users, Reports, Scheduling, Events, and Instructions',
      'Student and Faculty profile management with Cloudinary image uploads',
      'Data export to PDF (jsPDF + jspdf-autotable) and Excel (ExcelJS) formats',
      'Bulk ZIP download of exported records using JSZip',
      'Secure API authentication with Laravel Sanctum token-based auth',
      'Email notifications via Symfony Brevo mailer integration',
      'Dark mode support and responsive SPA navigation with React Router DOM'
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Laravel', 'PHP', 'Laravel Sanctum', 'MySQL', 'Cloudinary', 'jsPDF', 'ExcelJS', 'REST API'],
    challenges: 'Coordinating frontend and backend development across a team while maintaining a consistent REST API contract for three distinct user roles, and implementing reliable multi-format data export (PDF, Excel, ZIP) with shared data fetching optimized via a custom caching layer.',
    lessonsLearned: 'Gained experience in team-based full-stack collaboration, multi-role authentication flows with Laravel Sanctum, Cloudinary media management, shared state architecture across role-based layouts, and comprehensive data export pipelines for institutional web applications.',
    githubUrl: 'https://github.com/Sarino-Nhoel-Ivan/CCS-ProfilingSystem',
    liveUrl: 'https://ccs-profiling-system-sigma.vercel.app'
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
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Software Engineering & System Analysis',
    'Mobile Computing',
    'Computer Networks & Security',
    'Human-Computer Interaction',
    'Information Management',
    'Systems Integration & Architecture',
    'IT Infrastructure & Virtualization',
    'Technopreneurship',
    'Professional Ethics in IT'
  ],
  achievements: [
    'Successfully developed and defended capstone project on Integrated Web & Mobile EPOL Management System.',
    'Completed 500 hours of IT internship at PESO Cabuyao–Nutrition Office.',
    'Active participant in academic technology seminars and developer workshops.',
    'Earned multiple industry-recognized certifications from Cisco, IBM, Google, and TESDA covering cybersecurity, cloud computing, AI, web development, and UX/UI design.',
    'Continuously pursued self-directed learning through online certification programs to expand technical expertise beyond the academic curriculum.'
  ]
};
