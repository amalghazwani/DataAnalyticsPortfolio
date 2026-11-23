export type Language = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      process: 'How I Work',
      projects: 'Projects',
      contact: 'Contact',
    },

    hero: {
      name: 'Amal Ghazwani',
      title: 'Data Analyst',
      tagline: 'Finding the story hidden within the data.',
      projects: 'View My Projects',
      contact: 'Contact Me',
    },

    about: {
      eyebrow: 'About',
      title: 'I turn numbers into clear stories',
      paragraph1:
        'I enjoy working with data to uncover patterns, understand what is happening, and turn findings into clear insights.',
      paragraph2:
        'My focus is on building practical analyses and dashboards that make information easier to understand and support better decisions.',
      highlights: [
        {
          title: 'Turning raw data into insight',
          description:
            'Exploring data to uncover patterns, trends, and meaningful findings.',
        },
        {
          title: 'Building dashboards',
          description:
            'Creating clear and focused visualizations that make data easier to understand.',
        },
        {
          title: 'Supporting decisions',
          description:
            'Presenting insights in a practical way that helps connect data with decisions.',
        },
      ],
    },

    skills: {
      eyebrow: 'Skills',
      title: 'Tools and strengths',
      items: [
        'Microsoft Excel',
        'Power BI',
        'Data Cleaning',
        'Data Analysis',
        'Data Visualization',
      ],
    },

    process: {
      eyebrow: 'How I Work',
      title: 'From raw data to clear insight',
      steps: [
        {
          number: '01',
          title: 'Understand',
          description:
            'Understand the data, the business context, and the questions that need to be answered.',
        },
        {
          number: '02',
          title: 'Clean',
          description:
            'Prepare the data by checking missing values, duplicates, inconsistencies, and data quality.',
        },
        {
          number: '03',
          title: 'Analyze',
          description:
            'Explore patterns, trends, and relationships to turn raw data into meaningful insights.',
        },
        {
          number: '04',
          title: 'Visualize',
          description:
            'Build clear visualizations and dashboards that make findings easy to understand and use.',
        },
      ],
    },

    projects: {
      eyebrow: 'Projects',
      title: 'Selected work',
      all: 'All',
      excel: 'Excel',
      powerBI: 'Power BI',
      caseStudy: 'Case Study',
      keyMetrics: 'Key Metrics',
      viewCaseStudy: 'View Case Study',
      noProjects: 'No projects found for this filter.',
    },

    contact: {
      eyebrow: 'Contact',
      title: "Let's connect",
    },

    footer: {
      rights: 'All rights reserved.',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'نبذة عني',
      skills: 'المهارات',
      process: 'كيف أعمل',
      projects: 'المشاريع',
      contact: 'تواصل معي',
    },

    hero: {
      name: 'أمل غزواني',
      title: 'محللة بيانات',
      tagline: 'أبحث عن القصة التي تختبئ داخل البيانات.',
      projects: 'استعرض مشاريعي',
      contact: 'تواصل معي',
    },

    about: {
      eyebrow: 'نبذة عني',
      title: 'أحوّل الأرقام إلى قصص واضحة',
      paragraph1:
        'أستمتع بالعمل مع البيانات لاكتشاف الأنماط وفهم ما يحدث وتحويل النتائج إلى رؤى واضحة.',
      paragraph2:
        'أركز على بناء تحليلات ولوحات معلومات عملية تجعل المعلومات أسهل للفهم وتدعم اتخاذ قرارات أفضل.',
      highlights: [
        {
          title: 'تحويل البيانات الخام إلى رؤى',
          description:
            'استكشاف البيانات لاكتشاف الأنماط والاتجاهات والنتائج المهمة.',
        },
        {
          title: 'بناء لوحات المعلومات',
          description:
            'إنشاء تصورات واضحة ومركزة تجعل البيانات أسهل للفهم.',
        },
        {
          title: 'دعم اتخاذ القرار',
          description:
            'عرض النتائج بطريقة عملية تربط البيانات بالقرارات.',
        },
      ],
    },

    skills: {
      eyebrow: 'المهارات',
      title: 'أدواتي ونقاط قوتي',
      items: [
        'Microsoft Excel',
        'Power BI',
        'تنظيف البيانات',
        'تحليل البيانات',
        'تصور البيانات',
      ],
    },

    process: {
      eyebrow: 'كيف أعمل',
      title: 'من البيانات الخام إلى رؤية واضحة',
      steps: [
        {
          number: '01',
          title: 'الفهم',
          description:
            'فهم البيانات والسياق والأسئلة التي نحتاج إلى الإجابة عنها.',
        },
        {
          number: '02',
          title: 'التنظيف',
          description:
            'تجهيز البيانات من خلال التحقق من القيم المفقودة والتكرار وعدم الاتساق وجودة البيانات.',
        },
        {
          number: '03',
          title: 'التحليل',
          description:
            'استكشاف الأنماط والاتجاهات والعلاقات لتحويل البيانات الخام إلى رؤى مفيدة.',
        },
        {
          number: '04',
          title: 'التصور',
          description:
            'بناء تصورات ولوحات معلومات واضحة تجعل النتائج سهلة الفهم والاستخدام.',
        },
      ],
    },

    projects: {
      eyebrow: 'المشاريع',
      title: 'أعمال مختارة',
      all: 'الكل',
      excel: 'Excel',
      powerBI: 'Power BI',
      caseStudy: 'دراسة حالة',
      keyMetrics: 'أهم المؤشرات',
      viewCaseStudy: 'استعرض دراسة الحالة',
      noProjects: 'لا توجد مشاريع لهذا التصنيف.',
    },

    contact: {
      eyebrow: 'تواصل معي',
      title: 'خلّنا نتواصل',
    },

    footer: {
      rights: 'جميع الحقوق محفوظة.',
    },
  },
} as const;
