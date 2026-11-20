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
  'Data Cleaning',
  'Data Analysis',
  'Data Visualization',
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
