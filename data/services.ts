export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    icon: string;
    benefits: string[];
    process: { step: string; title: string; desc: string }[];
}

export const services: Service[] = [
    {
        slug: "corporate-incorporation",
        title: "Corporate Incorporation & Licensing",
        shortDescription: "Seamless Company Formation",
        fullDescription: "We facilitate seamless company formation across UAE Mainland and Free Zones, overseeing the entire lifecycle from initial trade license acquisition to seamless annual renewals. Our team ensures that your corporate structure is both compliant and optimized for your specific business activities.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
        icon: "🏢",
        benefits: [
            "Mainland & Free Zone licensing expertise",
            "100% foreign ownership guidance",
            "Trade name reservation & approvals",
            "Memorandum of Association (MoA) drafting",
            "Annual license renewal management"
        ],
        process: [
            { step: "01", title: "Strategy & Jurisidiction", desc: "Determining the ideal legal structure based on your goals." },
            { step: "02", title: "Documentation & Approval", desc: "Preparing legal documents and securing Govt. permissions." },
            { step: "03", title: "License Issuance", desc: "Finalizing the incorporation and handing over your trade license." }
        ]
    },
    {
        slug: "government-relations",
        title: "Government Relations & Regulatory Liaison",
        shortDescription: "Expert Govt. Liaison (PRO)",
        fullDescription: "Our experts manage all essential interactions with authorities and departments, securing the critical approvals required for your business to operate legally. We act as your bridge to the UAE government, ensuring that every regulatory requirement is met with precision and speed.",
        image: "https://images.unsplash.com/photo-1541872703-74c5e443d1fe?auto=format&fit=crop&q=80&w=2062",
        icon: "🤝",
        benefits: [
            "Liaising with DED, MOHRE, and Immigration",
            "Document clearing & notarization",
            "Regulatory compliance audits",
            "Trade license amendments & upgrades",
            "Govt. department specific approvals"
        ],
        process: [
            { step: "01", title: "Compliance Review", desc: "Auditing your current status and requirements." },
            { step: "02", title: "Govt. Interaction", desc: "Direct representation at various regulatory bodies." },
            { step: "03", title: "Speedy Approvals", desc: "Securing permits and clearances in record time." }
        ]
    },
    {
        slug: "global-mobility",
        title: "Global Mobility & Residency Solutions",
        shortDescription: "Golden Visa & Executive Residency",
        fullDescription: "We manage the end-to-end residency cycle, specializing in Golden Visa and executive residencies including all government administration for both corporate sponsors and dependents. Our priority is ensuring a smooth transition for you and your key personnel.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2070",
        icon: "🛂",
        benefits: [
            "10-Year Golden Visa specialized processing",
            "Investor & Partner visa management",
            "Family sponsorship services",
            "Medical insurance coordination",
            "Emirates ID & Medical typing support"
        ],
        process: [
            { step: "01", title: "Eligibility Assessment", desc: "Determining the best residency pathway for your profile." },
            { step: "02", title: "Govt. Filing", desc: "Managing the entire immigration lifecycle and govt. fee payments." },
            { step: "03", title: "ID & Stamping", desc: "Coordinating medical tests and final residency issuance." }
        ]
    },
    {
        slug: "taxation-compliance",
        title: "Taxation & Statutory Compliance",
        shortDescription: "Corporate Tax & VAT Experts",
        fullDescription: "Our team ensures your business adheres to the latest UAE fiscal regulations through expert Tax registration and ongoing compliance management for both VAT and Corporate Tax. We protect your enterprise from regulatory risks and financial penalties.",
        image: "https://images.unsplash.com/photo-1554224155-1f9129515582?auto=format&fit=crop&q=80&w=2012",
        icon: "⚖️",
        benefits: [
            "Corporate Tax registration & impact assessment",
            "VAT registration and periodic filing",
            "Economic Substance Regulation (ESR) compliance",
            "Anti-Money Laundering (AML) reporting",
            "FTA audit representation & support"
        ],
        process: [
            { step: "01", title: "Diagnostic Audit", desc: "Reviewing your financial structure for tax nexus." },
            { step: "02", title: "Registration", desc: "Securing TRN and Corporate Tax registration numbers." },
            { step: "03", title: "Ongoing Filing", desc: "Managing monthly/quarterly submissions to the FTA." }
        ]
    },
    {
        slug: "financial-management",
        title: "Financial Management & Bookkeeping",
        shortDescription: "Precision Accounting Services",
        fullDescription: "We deliver precise accounting and bookkeeping services that safeguard your financial integrity and ensure your records meet international standards and local regulatory requirements. Our meticulous oversight provides you with the transparency needed for strategic growth.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
        icon: "📊",
        benefits: [
            "Outsourced bookkeeping & accounting",
            "Meticulous financial reporting & analysis",
            "Cash flow management & forecasting",
            "Internal audit readiness",
            "International accounting standard (IFRS) compliance"
        ],
        process: [
            { step: "01", title: "System Setup", desc: "Implementing robust cloud-based accounting workflows." },
            { step: "02", title: "Data Management", desc: "Precise entry and reconciliation of all transactions." },
            { step: "03", title: "Insightful Reporting", desc: "Delivering monthly management reports for board review." }
        ]
    },
    {
        slug: "banking-support",
        title: "Banking & Financial Support",
        shortDescription: "Strategic Banking Solutions",
        fullDescription: "We bridge the gap between your business and financial institutions, providing strategic support to streamline the corporate bank account opening process and ongoing banking needs. Our relationships with major UAE banks help you overcome institutional hurdles.",
        image: "https://images.unsplash.com/photo-1601597111158-2fcee29a4a39?auto=format&fit=crop&q=80&w=2070",
        icon: "🏦",
        benefits: [
            "Corporate bank account opening assistance",
            "Wealth management institution introductions",
            "KYC & AML documentation pre-vetting",
            "Trade finance and credit line support",
            "Institutional banking relationship management"
        ],
        process: [
            { step: "01", title: "Institutional Matching", desc: "Identifying the right bank for your activity and volume." },
            { step: "02", title: "Pre-Approval Check", desc: "Reviewing your business profile against bank KYC rules." },
            { step: "03", title: "Onboarding Liaison", desc: "Managing the application from submission to account active." }
        ]
    },
    {
        slug: "corporate-branding",
        title: "Corporate Branding",
        shortDescription: "Premium Visual Identity",
        fullDescription: "Beyond administration, we help establish your market presence through professional branding services that build a strong and recognizable identity for your new venture. We ensure your business is perceived with the authority and prestige it deserves.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2074",
        icon: "🎨",
        benefits: [
            "Bespoke logo & visual identity design",
            "Strategic market positioning",
            "Corporate stationery & collateral design",
            "Brand guideline development",
            "Aesthetic alignment with UAE market standards"
        ],
        process: [
            { step: "01", title: "Identity Discovery", desc: "Defining your vision, values, and market niche." },
            { step: "02", title: "Creative Design", desc: "Crafting visual assets that project authority." },
            { step: "03", title: "Brand Activation", desc: "Delivering a complete, ready-to-launch corporate identity." }
        ]
    }
];
