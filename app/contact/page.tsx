import { ContactSection } from "@/components/contact-section";
import ContactForm from "@/components/core/contact-form";
import { PageHeader } from "@/components/core/hader-section";

export default function Contact() {
    const sampleContactInfo = [
        {
            icon: 'phone' as const,
            label: 'PRIORITY LINE',
            value: '+971 4 888 0000',
            href: 'tel:+97148880000'
        },
        {
            icon: 'email' as const,
            label: 'PARTNERSHIPS',
            value: 'partners@firm.ae',
            href: 'mailto:partners@firm.ae'
        },
        {
            icon: 'location' as const,
            label: 'OFFICE HOURS',
            value: 'Mon - Fri: 9AM - 6PM',
            subtext: 'Sat: 10AM - 2PM'
        }
    ];

    // Sample Google Maps embed URL for Dubai DIFC
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1686645430826!2d55.14170731501482!3d25.20493698389653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85bf%3A0x4a9a396c1c3a0258!2sGate%20District!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae";

    return (
        <>
            <div className="p-2 g-gray-100">

                <PageHeader
                    backgroundImage="https://www.shutterstock.com/image-photo/museum-future-sunset-nicknamed-most-600nw-2483595635.jpg"
                    badge="ESTABLISHED 2008 • DUBAI"
                    title="The Standard of Excellence"
                    subtitle="A boutique consultancy firm dedicated to navigating the complexities of the Middle Eastern market with precision and local wisdom."
                    height="lg"
                    alignment="left"
                />
            </div>
            <ContactSection
                locationTitle="The Gate District, Building 4"
                locationSubtext="DIFC, Dubai, United Arab Emirates"
                contactInfo={sampleContactInfo}
                mapEmbedUrl={mapUrl}
                directionsUrl="https://maps.google.com/?q=The+Gate+District+DIFC+Dubai"
            />
            <ContactForm />
        </>
    );

}