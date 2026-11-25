export const profile = {
  name: 'Amal Ghazwani',
  title: 'Data Analyst',
  tagline: 'Turning data into clear insights and decision-ready stories.',
  email: 'amal.s.ghazwani@gmail.com',
  linkedin: 'https://www.linkedin.com/in/amal-ghazwani-4037432aa',
  github: 'https://github.com/amalghazwani',
};

export const skills = [
  'Microsoft Excel',
  'Power BI',
  'SQL',
  'Data Cleaning',
  'Data Analysis',
  'Data Visualization',
  'Microsoft Word',
] as const;

export const experience = [
  {
    role: 'Institutional Performance Specialist',
    company: 'Ministry of Education',
    location: 'Al-Aydabi, Jazan',
    period: 'Dec 2025 – Jun 2026',
    summary: 'Managed academic records and student results, prepared administrative reports, and supported electronic operations using Excel, Word, and Noor.',
    roleAr: 'أخصائية أداء مؤسسي',
    summaryAr: 'إدارة السجلات الأكاديمية ونتائج الطالبات، وإعداد التقارير الإدارية، ودعم العمليات الإلكترونية باستخدام Excel وWord ونظام نور.',
  },
  {
    role: 'Travel Operations Coordinator',
    company: 'Saudia Airlines — Jazan',
    location: 'Jazan',
    period: 'May 2024 – Jul 2024',
    summary: 'Reviewed travel and operational data, organized Excel records, compared competitive fares, and worked with Amadeus for reservation and travel data.',
    roleAr: 'منسقة عمليات سفر',
    summaryAr: 'مراجعة بيانات الرحلات والعمليات، وتنظيم سجلات Excel، ومقارنة الأسعار التنافسية، والتعامل مع نظام Amadeus لبيانات الحجوزات والسفر.'
  },
] as const;

export const education = {
  degree: 'Bachelor of Management Information Systems (MIS)',
  university: 'Jazan University',
  period: 'Nov 2025',
  gpa: '4.38 / 5.00',
  distinction: 'Second-Class Honors',
} as const;

export const timeline = [
  {
    date: 'Nov 2023',
    type: 'certification',
    title: 'CAPM — Certified Associate in Project Management',
    titleAr: 'CAPM — مساعد معتمد في إدارة المشاريع',
    detail: 'King Abdulaziz University · 23 hours',
    detailAr: 'جامعة الملك عبدالعزيز · 23 ساعة',
  },
  {
    date: 'May – Jul 2024',
    type: 'experience',
    title: 'Travel Operations Coordinator',
    titleAr: 'منسقة عمليات سفر',
    detail: 'Saudia Airlines — Jazan',
    detailAr: 'الخطوط السعودية — جازان',
    summary: 'Reviewed travel and operational data, organized Excel records, compared competitive fares, and worked with Amadeus for reservation and travel data.',
    summaryAr: 'مراجعة بيانات الرحلات والعمليات، وتنظيم سجلات Excel، ومقارنة الأسعار التنافسية، والتعامل مع نظام Amadeus لبيانات الحجوزات والسفر.',
  },
  {
    date: 'Oct 2024',
    type: 'certification',
    title: 'Data Fundamentals and Analysis',
    titleAr: 'أساسيات البيانات والتحليل',
    detail: 'IBM SkillsBuild',
    detailAr: 'IBM SkillsBuild',
  },
  {
    date: 'Jul 2025',
    type: 'certification',
    title: 'First Data Journey: Introduction to Data Analysis',
    titleAr: 'الرحلة الأولى في البيانات: مقدمة في تحليل البيانات',
    detail: 'Tharaa Training · 15 hours',
    detailAr: 'تدريب ثراء · 15 ساعة',
  },
  {
    date: 'Aug 2025',
    type: 'certification',
    title: 'Data Analysis with Power BI',
    titleAr: 'تحليل البيانات باستخدام Power BI',
    detail: 'Digital Donation Initiative',
    detailAr: 'مبادرة التبرع الرقمي',
  },
  {
    date: 'Oct 2025',
    type: 'project',
    title: 'Graduation Project — Na’mah',
    titleAr: 'مشروع التخرج — نعمة',
    detail: 'Food-waste reduction platform · SQL database',
    detailAr: 'منصة للحد من هدر الطعام · قاعدة بيانات SQL',
    summary: 'Connected restaurants with charities to reduce food waste, with a relational SQL database for inventory and donation tracking.',
    summaryAr: 'ربط المطاعم بالجمعيات الخيرية للحد من هدر الطعام، مع قاعدة بيانات SQL مترابطة لتتبع المخزون والتبرعات.',
  },
  {
    date: 'Nov 2025',
    type: 'education',
    title: 'Bachelor of Management Information Systems (MIS)',
    titleAr: 'بكالوريوس نظم المعلومات الإدارية (MIS)',
    detail: 'Jazan University · GPA 4.38 / 5.00 · Second-Class Honors',
    detailAr: 'جامعة جازان · المعدل 4.38 من 5.00 · مرتبة الشرف الثانية',
  },
  {
    date: 'Dec 2025 – Jun 2026',
    type: 'experience',
    title: 'Institutional Performance Specialist',
    titleAr: 'أخصائية أداء مؤسسي',
    detail: 'Ministry of Education — Al-Aydabi, Jazan',
    detailAr: 'وزارة التعليم — العيدابي، جازان',
    summary: 'Managed academic records and student results, prepared administrative reports, and supported electronic operations using Excel, Word, and Noor.',
    summaryAr: 'إدارة السجلات الأكاديمية ونتائج الطالبات، وإعداد التقارير الإدارية، ودعم العمليات الإلكترونية باستخدام Excel وWord ونظام نور.',
  },
] as const;

export const certifications = [
  { name: 'CAPM — Certified Associate in Project Management', provider: 'King Abdulaziz University', period: 'Nov 2023 · 23 hours' },
  { name: 'Data Fundamentals and Analysis', provider: 'IBM SkillsBuild', period: 'Oct 2024' },
  { name: 'Data Analysis with Power BI', provider: 'Digital Donation Initiative', period: 'Aug 2025' },
  { name: 'First Data Journey: Introduction to Data Analysis', provider: 'Tharaa Training', period: 'Jul 2025 · 15 hours' },
] as const;

export type StatItem = {
  label: string;
  value: string;
};

export type Project = {
  name: string;
  tools: string[];
  description: string;
  stats?: StatItem[];
  image?: string;
};

export const projects: Project[] = [
  {
    name: 'Retail Sales Performance Analysis',
    tools: ['Microsoft Excel'],
    description:
      'An exploratory analysis of synthetic retail sales data using Excel to evaluate revenue performance, product categories, sales channels, and returns.',
    image: '/projects/retail-sales.png',
    stats: [
      { label: 'Total Revenue', value: '$773,924.37' },
      { label: 'Order Lines', value: '7,000' },
      { label: 'Total Units', value: '11,853' },
      { label: 'Top Category', value: 'Electronics · $326,204.01' },
      { label: 'Top Channel', value: 'Web' },
      { label: 'Highest Return Rate', value: 'Apparel · 20.70%' },
    ],
  },

  {
    name: 'Adidas Sales Performance Analysis',
    tools: ['Microsoft Excel'],
    description:
      'An analysis of Adidas sales data using Excel to evaluate sales performance, profitability, products, regions, and sales channels.',
    image: '/projects/adidas-sales.png',
    stats: [
      { label: 'Total Sales', value: '$899.9M' },
      { label: 'Operating Margin', value: '42.30%' },
      { label: 'Transactions', value: '9,648' },
      { label: 'Top Product', value: "Men's Street Footwear" },
      { label: 'Top Region', value: 'West' },
      { label: 'Leading Channel', value: 'In-store · 39.63%' },
    ],
  },

  {
    name: 'Travel Analytics Dashboard',
    tools: ['Power BI'],
    description:
      'An interactive Power BI dashboard analyzing travel patterns, destinations, accommodation preferences, transportation, and travel costs.',
    image: '/projects/travel-dashboard.png',
    stats: [
      { label: 'Total Trips', value: '137' },
      { label: 'Destinations', value: '39' },
      { label: 'Avg. Trip Duration', value: '7.6 days' },
      { label: 'Total Travel Cost', value: '$258,325' },
      { label: 'Most Visited', value: 'Paris' },
      { label: 'Most Common Stay', value: 'Hotels · 44%' },
    ],
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;
