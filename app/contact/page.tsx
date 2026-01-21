import { ContactSection } from "@/components/contact-section";
import ContactForm from "@/components/core/contact-form";
import { PageHeader } from "@/components/core/hader-section";

export default function Contact() {
    const sampleContactInfo = [
        {
            icon: 'phone' as const,
            label: 'PRIORITY LINE',
            value: '+971 58 897 5654',
            href: 'tel:+971 58 897 5654'
        },
        {
            icon: 'email' as const,
            label: 'PARTNERSHIPS',
            value: 'office@nexusgateuae.com',
            href: 'mailto:office@nexusgateuae.com'
        },
        {
            icon: 'location' as const,
            label: 'OFFICE HOURS',
            value: 'Mon - Fri: 9AM - 6PM',
            subtext: 'Sat: 10AM - 5PM'
        }
    ];


    const socialLinks = [
        {
            icon: 'instagram' as const,
            href: 'https://www.instagram.com/nexusgate.ae?igsh=MTFwcnJuY2RuNHU5aQ=='
        },
        {
            icon: 'linkedin' as const,
            href: 'https://www.linkedin.com/company/nexusgate-ae/'
        }
    ];

    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.17865241031!2d55.277!3d25.213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzQ2LjgiTiA1NcKwMTYnMzcuMiJF!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"; // Placeholder for DIFC

    return (
        <>
            <div className="p-2 g-gray-100">

                <PageHeader
                    backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=2070&auto=format&fit=crop"
                    badge="• DUBAI"
                    title="The Standard of Excellence"
                    subtitle="A boutique consultancy firm dedicated to navigating the complexities of the Middle Eastern market with precision and local wisdom."
                    height="lg"
                    alignment="left"
                />
            </div>
            <ContactSection
                locationTitle="A1 Building, Dubai Business Park"
                locationSubtext="Silicon Oasis, Dubai"
                contactInfo={sampleContactInfo}
                socialLinks={socialLinks}
                mapEmbedUrl={mapUrl}
                directionsUrl="https://maps.app.goo.gl/xZFJdMhR3kQaAKX68"
            />
            <ContactForm />
        </>
    );

}