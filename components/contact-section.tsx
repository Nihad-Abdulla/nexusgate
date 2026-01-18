
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

interface ContactInfo {
    icon: 'location' | 'phone' | 'email';
    label: string;
    value: string;
    href?: string;
    subtext?: string;
}

interface ContactSectionProps {
    locationTitle: string;
    locationSubtext?: string;
    contactInfo: ContactInfo[];
    mapEmbedUrl: string;
    directionsUrl?: string;
}

export function ContactSection({
    locationTitle,
    locationSubtext,
    contactInfo,
    mapEmbedUrl,
    directionsUrl
}: ContactSectionProps) {
    const getIcon = (iconType: string) => {
        switch (iconType) {
            case 'location':
                return <MapPin className="w-8 h-8 text-primary" />;
            case 'phone':
                return <Phone className="w-8 h-8 text-primary" />;
            case 'email':
                return <Mail className="w-8 h-8 text-primary" />;
            default:
                return null;
        }
    };

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col items-center text-center gap-4 mb-8">
                    <MapPin className="w-12 h-12 text-primary" />
                    <div>
                        <h2 className="text-3xl font-bold text-#000000 mb-2">
                            {locationTitle}
                        </h2>
                        {locationSubtext && (
                            <p className="text-gray-500 text-lg">
                                {locationSubtext}
                            </p>
                        )}
                    </div>
                </div>


                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className="bg-[#f5f7fa] rounded-2xl p-8 "
                        >
                            <div className="mb-4">{getIcon(info.icon)}</div>
                            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                                {info.label}
                            </p>
                            {info.href ? (
                                <Link
                                    href={info.href}
                                    className="text-#000000 text-xl font-semibold hover:text-primary transition-colors"
                                >
                                    {info.value}
                                </Link>
                            ) : (
                                <p className="text-#000000 text-xl font-semibold">
                                    {info.value}
                                </p>
                            )}
                            {info.subtext && (
                                <p className="text-gray-500 text-sm mt-1">{info.subtext}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Map Section */}
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold ">Our Location</h3>
                        {directionsUrl && (
                            <Link
                                href={directionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#c9a961] font-semibold uppercase tracking-wider hover:text-[#1e3a5f] transition-colors"
                            >
                                GET DIRECTIONS
                            </Link>
                        )}
                    </div>

                    {/* Map Embed */}
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}