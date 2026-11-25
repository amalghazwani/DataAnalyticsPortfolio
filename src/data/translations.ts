export type Language = 'en' | 'ar';

export type TranslationSet = {
  nav: { home: string; about: string; experience: string; skills: string; process: string; projects: string; contact: string };
  hero: { name: string; tagline: string; projects: string; contact: string };
  about: { eyebrow: string; title: string; paragraphs: string[]; highlights: { title: string; text: string }[] };
  experience: { eyebrow: string; title: string; education: string; degree: string; gpa: string; honors: string; certifications: string; },
  skills: { eyebrow: string; title: string };
  process: { eyebrow: string; title: string; steps: { number: string; title: string; description: string }[] };
  projects: { eyebrow: string; title: string; filters: { all: string; excel: string; powerBI: string }; caseStudy: string; keyMetrics: string; viewCaseStudy: string; noProjects: string };
  contact: { eyebrow: string; title: string; description: string; email: string; linkedin: string; github: string };
  footer: { copyright: string };
};

export const translations: Record<Language, TranslationSet> = {
  en: {
    nav: {
      home: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', process: 'How I Work', projects: 'Projects', contact: 'Contact',
    },
    hero: {
      name: 'Amal Ghazwani',
      tagline: 'Data analyst turning complex data into clear insights and actionable decisions.',
      projects: 'View Projects',
      contact: 'Get in Touch',
    },
    about: {
      eyebrow: 'About',
      title: 'I turn numbers into clear stories',
      paragraphs: [
        'I enjoy exploring data and finding the story behind the numbers. I’m interested in understanding patterns, uncovering meaningful insights, and presenting information in a way that feels clear and easy to follow.',
        'I believe good analysis is not only about finding the numbers, but also about understanding what they mean and turning them into something useful. My goal is to make data simpler, clearer, and more meaningful.',
      ],
      highlights: [
        { title: 'Turning raw data into insight', text: 'Cleaning messy, unstructured data and shaping it into something clear and understandable.' },
        { title: 'Building dashboards', text: 'Designing dashboards that make trends and patterns easy to read at a glance.' },
        { title: 'Supporting decisions', text: 'Presenting findings as decision-ready stories that support data-driven choices.' },
      ],
    },
    experience: { eyebrow: 'Experience & Education', title: 'A concise view of my background', education: 'Education', degree: 'Bachelor of Management Information Systems (MIS)', gpa: 'GPA 4.38 / 5.00', honors: 'Second-Class Honors', certifications: 'Training & Certifications' },
    skills: { eyebrow: 'Skills', title: 'Tools and strengths' },
    process: {
      eyebrow: 'How I Work',
      title: 'From raw data to clear insight',
      steps: [
        { number: '01', title: 'Understand', description: 'Understand the data, the business context, and the questions that need to be answered.' },
        { number: '02', title: 'Clean', description: 'Prepare the data by checking missing values, duplicates, inconsistencies, and data quality.' },
        { number: '03', title: 'Analyze', description: 'Explore patterns, trends, and relationships to turn raw data into meaningful insights.' },
        { number: '04', title: 'Visualize', description: 'Build clear visualizations and dashboards that make findings easy to understand and use.' },
      ],
    },
    projects: {
      eyebrow: 'Projects', title: 'Selected work',
      filters: { all: 'All', excel: 'Excel', powerBI: 'Power BI' },
      caseStudy: 'Project', keyMetrics: 'Key Metrics', viewCaseStudy: 'View Project', noProjects: 'No projects found for this filter.',
    },
    contact: {
      eyebrow: 'Contact', title: 'Let’s connect',
      description: 'Have a project, opportunity, or inquiry? I’d be happy to connect and discuss how I can help.',
      email: 'Email', linkedin: 'LinkedIn', github: 'GitHub',
    },
    footer: { copyright: 'All rights reserved.' },
  },

  ar: {
    nav: {
      home: 'الرئيسية', about: 'نبذة عني', experience: 'الخبرات والتعليم', skills: 'المهارات', process: 'طريقة عملي', projects: 'المشاريع', contact: 'تواصل معي',
    },
    hero: {
      name: 'أمل غزواني',
      tagline: 'محللة بيانات أحوّل البيانات المعقدة إلى رؤى واضحة وقرارات قابلة للتنفيذ.',
      projects: 'استعرض المشاريع',
      contact: 'تواصل معي',
    },
    about: {
      eyebrow: 'نبذة عني',
      title: 'أحوّل الأرقام إلى قصص واضحة',
      paragraphs: [
        'أستمتع باستكشاف البيانات والبحث عن القصة الموجودة خلف الأرقام. أهتم بفهم الأنماط، واكتشاف الرؤى المهمة، وتقديم المعلومات بطريقة واضحة وسهلة المتابعة.',
        'أؤمن أن التحليل الجيد لا يقتصر على إيجاد الأرقام، بل يشمل فهم معناها وتحويلها إلى شيء مفيد. هدفي هو جعل البيانات أبسط وأوضح وأكثر معنى.',
      ],
      highlights: [
        { title: 'تحويل البيانات الخام إلى رؤى', text: 'تنظيف البيانات غير المرتبة وغير المنظمة وتشكيلها بطريقة واضحة وسهلة الفهم.' },
        { title: 'بناء لوحات المعلومات', text: 'تصميم لوحات معلومات تجعل الاتجاهات والأنماط سهلة القراءة والفهم من النظرة الأولى.' },
        { title: 'دعم اتخاذ القرار', text: 'عرض النتائج كقصص واضحة تساعد على اتخاذ قرارات مبنية على البيانات.' },
      ],
    },
    experience: { eyebrow: 'الخبرات والتعليم', title: 'نبذة مختصرة عن مسيرتي', education: 'التعليم', degree: 'بكالوريوس نظم المعلومات الإدارية (MIS)', gpa: 'المعدل 4.38 من 5.00', honors: 'مرتبة الشرف الثانية', certifications: 'الدورات والشهادات' },
    skills: { eyebrow: 'المهارات', title: 'الأدوات ونقاط القوة' },
    process: {
      eyebrow: 'طريقة عملي',
      title: 'من البيانات الخام إلى الرؤية الواضحة',
      steps: [
        { number: '01', title: 'الفهم', description: 'فهم البيانات وسياق العمل والأسئلة التي نحتاج إلى الإجابة عنها.' },
        { number: '02', title: 'التنظيف', description: 'تجهيز البيانات من خلال التحقق من القيم المفقودة والتكرار والتناقضات وجودة البيانات.' },
        { number: '03', title: 'التحليل', description: 'استكشاف الأنماط والاتجاهات والعلاقات لتحويل البيانات الخام إلى رؤى ذات معنى.' },
        { number: '04', title: 'التصور', description: 'بناء تصورات ولوحات معلومات واضحة تجعل النتائج سهلة الفهم والاستخدام.' },
      ],
    },
    projects: {
      eyebrow: 'المشاريع', title: 'أعمال مختارة',
      filters: { all: 'الكل', excel: 'Excel', powerBI: 'Power BI' },
      caseStudy: 'مشروع', keyMetrics: 'أهم المؤشرات', viewCaseStudy: 'عرض المشروع', noProjects: 'لا توجد مشاريع لهذا الفلتر.',
    },
    contact: {
      eyebrow: 'تواصل معي', title: 'خلّنا نتواصل',
      description: 'عندك مشروع، فرصة عمل، أو استفسار؟ يسعدني نتواصل ونناقش كيف يمكنني المساعدة.',
      email: 'البريد الإلكتروني', linkedin: 'LinkedIn', github: 'GitHub',
    },
    footer: { copyright: 'جميع الحقوق محفوظة.' },
  },
};
