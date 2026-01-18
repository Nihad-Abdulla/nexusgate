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
        slug: "office-space",
        title: "Office Space Solutions",
        shortDescription: "Commercial Real Estate & Investment",
        fullDescription: "Finding the perfect office space is critical for your business operations and compliance in the UAE. Whether you need a flexi-desk for a freelancer permit, a fully serviced office for your team, or a warehouse for logistics, NexusGate connects you with premium commercial real estate options tailored to your budget and licensing requirements.",
        image: "/modern-office-space-dubai-skyline.jpg",
        icon: "🏢",
        benefits: [
            "Ejari registration assistance",
            "Prime business locations",
            "Flexible lease terms",
            "Furnished & key-ready options",
            "Compliance with Freezone/Mainland rules"
        ],
        process: [
            { step: "01", title: "Requirement Analysis", desc: "We enable you to define your space, budget, and location needs." },
            { step: "02", title: "Site Selection", desc: "We provide a curated list of properties matching your criteria." },
            { step: "03", title: "Lease & Compliance", desc: "We handle lease negotiation and Ejari registration." }
        ]
    },
    {
        slug: "business-visa",
        title: "Business & Residence Visas",
        shortDescription: "Get Corporate Visa",
        fullDescription: "Navigating UAE immigration laws can be complex. NexusGate simplifies the visa process for investors, employees, and families. From Golden Visas to standard employment permits, we ensure accurate documentation and fast-track processing with relevant government authorities.",
        image: "/business-visa-passport-documents.jpg",
        icon: "🛂",
        benefits: [
            "Golden Visa consultation",
            "Investor & Partner visas",
            "Employee visa processing",
            "Family sponsorship",
            "Medical & ID typing services"
        ],
        process: [
            { step: "01", title: "Eligibility Check", desc: "We assess the best visa category for you and your team." },
            { step: "02", title: "Documentation", desc: "We prepare and file all necessary government forms." },
            { step: "03", title: "Stamping & ID", desc: "We coordinate medical tests and final ID issuance." }
        ]
    },
    {
        slug: "business-setup",
        title: "Business Setup Services",
        shortDescription: "Mainland, Freezone, Offshore & SME",
        fullDescription: "Launch your venture with confidence. NexusGate offers end-to-end business setup solutions across Mainland, Free Zone, and Offshore jurisdictions. We advise on the right structure, activity, and license type to maximize your operational efficiency and minimize ownership risks.",
        image: "/uae-flag-dubai-business-setup.jpg",
        icon: "🚀",
        benefits: [
            "Trade License issuance",
            "100% Foreign Ownership consulting",
            "Local Service Agent (LSA) arrangements",
            "Bank account opening assistance",
            "Government approvals processing"
        ],
        process: [
            { step: "01", title: "Consultation", desc: "Identify the right jurisdiction and legal structure." },
            { step: "02", title: "Licensing", desc: "Reserve trade name and submit initial approvals." },
            { step: "03", title: "Incorporation", desc: "Receive your Trade License and start operations." }
        ]
    },
    {
        slug: "pro-services",
        title: "Corporate PRO Services",
        shortDescription: "Setup your Business in UAE",
        fullDescription: "Outsource your government liaison tasks to NexusGate. Our experienced PROs handle all document clearing, renewals, and regulatory compliance, allowing you to focus on your core business. We build relationships with government departments to ensure swift approvals.",
        image: "/professional-services-uae-government.jpg",
        icon: "🤝",
        benefits: [
            "Trade License Renewals",
            "Quota upgrades",
            "Labour card & Immigration file management",
            "Notary Public attestation",
            "Regulatory compliance audits"
        ],
        process: [
            { step: "01", title: "Doc Collection", desc: "Secure pickup of your legal documents." },
            { step: "02", title: "Processing", desc: "Liaising with DED, MOHRE, and Immigration." },
            { step: "03", title: "Delivery", desc: "Return of processed documents and receipts." }
        ]
    },
    {
        slug: "legal-support",
        title: "Legal Support & Advisory",
        shortDescription: "Setup your Legal team",
        fullDescription: "Protect your business interests with robust legal frameworks. Our legal partners assist with drafting MoAs, shareholder agreements, and commercial contracts. We allow you to operate with peace of mind knowing your corporate governance is sound.",
        image: "/legal-support-lady-justice-statue.jpg",
        icon: "⚖️",
        benefits: [
            "MoA & AoA drafting",
            "Shareholder agreements",
            "Commercial contracts",
            "Power of Attorney",
            "Corporate restructuring"
        ],
        process: [
            { step: "01", title: "Briefing", desc: "Understanding your legal requirements and risks." },
            { step: "02", title: "Drafting", desc: "Preparation of legally binding agreements." },
            { step: "03", title: "Notarization", desc: "Formal signing and court attestation." }
        ]
    },
    {
        slug: "branding",
        title: "Branding & Identity",
        shortDescription: "Start building your brand",
        fullDescription: "Stand out in the competitive Dubai market. Beyond setup, we help build your brand's visual identity. From logo creation to full brand guidelines, our creative team ensures your business looks as professional as it operates.",
        image: "/brand-identity-company-logo-design.jpg",
        icon: "🎨",
        benefits: [
            "Logo Design",
            "Brand Guidelines",
            "Corporate Stationery",
            "Digital Access",
            "Marketing Collateral"
        ],
        process: [
            { step: "01", title: "Discovery", desc: "Understanding your brand values and vision." },
            { step: "02", title: "Design", desc: "Creating concepts and visual assets." },
            { step: "03", title: "Launch", desc: "Final delivery of brand assets." }
        ]
    }
];
