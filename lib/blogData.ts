export const blogPosts = [
  {
    slug: 'tax-documentation',
    title: 'Tax Documentation',
    description: 'Comprehensive tax filing and documentation services',
    relatedAnchor: '/#services',
  },
  {
    slug: 'financial-planning',
    title: 'Financial Planning',
    description: 'Strategic financial planning for individuals and businesses',
    relatedAnchor: '/#services',
  },
  {
    slug: 'financial-analysis',
    title: 'Financial Analysis',
    description: 'In-depth analysis of financial statements and reports',
    relatedAnchor: '/#services',
  },
  {
    slug: 'business-growth',
    title: 'Business Growth',
    description: 'Advisory services to accelerate your business growth',
    relatedAnchor: '/#services',
  },
  {
    slug: 'corporate-services',
    title: 'Corporate Services',
    description: 'Complete corporate accounting and compliance services',
    relatedAnchor: '/#services',
  },
  {
    slug: 'client-consultation',
    title: 'Client Consultation',
    description: 'Personalized consultation for all your financial needs',
    relatedAnchor: '/#contact',
  },
];

export function findPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug) || null;
}
