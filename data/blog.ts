export interface BlogContentSection {
    type: 'paragraph' | 'heading' | 'quote' | 'list';
    text?: string;
    author?: string;
    items?: string[];
}

export interface Blog {
    slug: string;
    title: string;
    description: string;
    category: string;
    publishedAt: string;
    readTime: string;
    image: string;
    icon?: string;
    content: BlogContentSection[];
}

export const blogs: Blog[] = [
    {
        slug: 'starting-business-dubai-2024',
        title: 'Starting a Business in Dubai 2024: The Definitive Guide',
        description: 'Dubai remains at the forefront of global entrepreneurship.',
        category: 'Market Entry',
        publishedAt: 'Jan 12, 2024',
        readTime: '8 min read',
        image: '/dubai-skyline.png',
        content: [
            {
                type: 'paragraph',
                text:
                    'Dubai remains at the forefront of global entrepreneurship. As we step into 2024, the landscape for business setup has evolved with new regulatory frameworks designed to attract foreign investment and foster innovation.',
            },
            {
                type: 'heading',
                text: 'Key Regulatory Updates',
            },
            {
                type: 'paragraph',
                text:
                    'The UAE government has introduced streamlined processes for digital entrepreneurs. Most notably, the “One-Stop-Shop” initiative for Free Zone licenses has reduced processing times by nearly 40%.',
            },
            {
                type: 'quote',
                text:
                    'Dubai is no longer just a transit hub; it is the definitive destination for capital-efficient growth in the MENA region.',
                author: 'Amina Al-Sayed',
            },
            {
                type: 'heading',
                text: 'Free Zone vs. Mainland',
            },
            {
                type: 'paragraph',
                text:
                    'Choosing the right jurisdiction remains the most critical decision for new entrants. While Free Zones offer 100% foreign ownership, Mainland licenses provide unrestricted access to the local UAE market.',
            },
            {
                type: 'list',
                items: [
                    '100% repatriation of profits and capital',
                    'Zero corporate tax for qualified income',
                    'Direct access to world-class logistics',
                ],
            },
        ],
    },

    {
        slug: 'freezone-vs-mainland-uae',
        title: 'Free Zone vs Mainland: Choosing the Right UAE License',
        description: 'Understand the key differences before you register.',
        category: 'Business Setup',
        publishedAt: 'Feb 05, 2024',
        readTime: '6 min read',
        image: '/dubai-skyline.png',
        content: [
            {
                type: 'paragraph',
                text:
                    'Selecting between a Free Zone and Mainland license affects taxation, ownership, and scalability.',
            },
            {
                type: 'heading',
                text: 'Free Zone Advantages',
            },
            {
                type: 'list',
                items: [
                    'Full foreign ownership',
                    'Simplified licensing',
                    'Industry-specific ecosystems',
                ],
            },
            {
                type: 'heading',
                text: 'Mainland Advantages',
            },
            {
                type: 'list',
                items: [
                    'Operate anywhere in UAE',
                    'Government contracts eligibility',
                    'Unlimited visa quotas',
                ],
            },
        ],
    },

    {
        slug: 'corporate-tax-uae-explained',
        title: 'UAE Corporate Tax Explained for Entrepreneurs',
        description: 'What founders must know about the new tax regime.',
        category: 'Legal',
        publishedAt: 'Mar 18, 2024',
        readTime: '5 min read',
        image: '/dubai-skyline.png',
        content: [
            {
                type: 'paragraph',
                text:
                    'The introduction of corporate tax in the UAE marks a strategic shift aligned with global standards.',
            },
            {
                type: 'list',
                items: [
                    '0% tax up to AED 375,000',
                    '9% standard corporate tax',
                    'Exemptions for qualifying free zones',
                ],
            },
        ],
    },

    {
        slug: 'why-dubai-for-startups',
        title: 'Why Dubai Is the Best Startup Hub in 2024',
        description: 'A deep dive into Dubai’s startup ecosystem.',
        category: 'Strategy',
        publishedAt: 'Apr 02, 2024',
        readTime: '7 min read',
        image: '/dubai-skyline.png',
        content: [
            {
                type: 'paragraph',
                text:
                    'Dubai offers unmatched connectivity, capital access, and regulatory clarity for startups.',
            },
            {
                type: 'list',
                items: [
                    'Strategic geographic location',
                    'Strong investor ecosystem',
                    'Government-backed innovation programs',
                ],
            },
        ],
    },
];

