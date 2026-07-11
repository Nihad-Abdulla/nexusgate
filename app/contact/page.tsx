import { ContactSection } from "@/components/contact-section";
import ContactForm from "@/components/core/contact-form";
import { PageHeader } from "@/components/core/hader-section";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with NexusGate for a free consultation on company formation, visas, and legal services in Dubai.",
};

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

    const mapUrl = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7283.872107976281!2d55.33206871415727!3d25.24478708334827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAl%20Muhairebi%20Building%20Sheikh%20Rashid%20Rd%2C%20Al%20Garhoud%20Dubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1783785975663!5m2!1sen!2sin";

    return (
        <>
            <div className="p-2 g-gray-100">

                <PageHeader
                    backgroundImage="/images/contact-header.jpg"
                    badge="GET IN TOUCH"
                    title="Your Success Starts with a Conversation"
                    subtitle="Connect with our senior partners today to navigate your UAE business journey with confidence and clarity."
                    height="lg"
                    alignment="left"
                />
            </div>
            <ContactSection
                locationTitle="Office 09, Al Muhairebi Building"
                locationSubtext="Sheikh Rashid Rd, Al Garhoud
Dubai, United Arab Emirates"
                contactInfo={sampleContactInfo}
                socialLinks={socialLinks}
                mapEmbedUrl={mapUrl}
                directionsUrl="https://maps.app.goo.gl/RvzdCeFnrG4rNqaV7?g_st=ic"
            />
            <ContactForm />
        </>
    );

}