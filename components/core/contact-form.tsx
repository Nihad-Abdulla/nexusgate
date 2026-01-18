'use client';

import { useState } from 'react';

const interests = [
    'Strategy',
    'Market Entry',
    'Legal',
    'Wealth Management',
];

export default function ContactForm() {
    const [selectedInterest, setSelectedInterest] = useState<string | null>(
        'Market Entry'
    );

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-[#0f2a44] mb-3">
                        Inquiry Brief
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Share your corporate objectives with our senior partners.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-8 border border-primary/30 rounded-2xl p-6 md:p-8">
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Johnathan Doe"
                            className="w-full rounded-xl border border-gray-200 px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Company Name
                        </label>
                        <input
                            type="text"
                            placeholder="Global Enterprises Ltd."
                            className="w-full rounded-xl border border-gray-200 px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>

                    {/* Consultancy Interest */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            Consultancy Interest
                        </label>

                        <div className="flex flex-wrap gap-3">
                            {interests.map((item) => {
                                const active = selectedInterest === item;

                                return (
                                    <button
                                        type="button"
                                        key={item}
                                        onClick={() => setSelectedInterest(item)}
                                        className={`px-6 py-3 rounded-full border text-sm font-medium transition-all
                      ${active
                                                ? 'border-primary text-primary bg-primary/5'
                                                : 'border-gray-200 text-gray-600 hover:border-primary'
                                            }
                    `}
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Brief Message */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Brief Message
                        </label>
                        <textarea
                            rows={6}
                            placeholder="How can we assist your expansion?"
                            className="w-full rounded-xl border border-gray-200 px-5 py-3 text-base resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white text-base font-semibold tracking-wider py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-3"
                    >
                        SUBMIT INQUIRY
                        <span className="text-xl">→</span>
                    </button>
                </form>
            </div>
        </section>
    );
}
