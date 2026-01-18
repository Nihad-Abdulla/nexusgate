"use client"

import { useState } from "react"
import { Plus, Minus, ArrowRight } from "lucide-react"
import Link from "next/link"

interface FAQItem {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: "What is a mainland company in the UAE?",
        answer:
            "A mainland company in the UAE is a business entity that is licensed by the Department of Economic Development (DED) and can operate anywhere within the UAE without restrictions. Unlike free zone companies, mainland companies can trade directly with the local UAE market and are not limited to specific geographic areas.",
    },
    {
        question: "What are the steps involved in a Business setup in UAE?",
        answer:
            "The key steps include: 1) Choosing your business activity and legal structure, 2) Selecting a trade name and getting initial approval, 3) Finding a local sponsor or service agent (for mainland), 4) Preparing legal documents and agreements, 5) Renting office space, 6) Submitting documents to DED, 7) Obtaining your trade license, and 8) Opening a corporate bank account.",
    },
    {
        question: "What types of licenses are required for a Business setup in UAE?",
        answer:
            "The main types of licenses in UAE are: Commercial License (for trading activities), Professional License (for services, professions, and craftsmen), Industrial License (for manufacturing activities), and Tourism License (for tourism-related businesses). The specific license depends on your business activity and jurisdiction.",
    },
]

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-12 md:py-24 bg-[#e8f4fa]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-5 md:p-12">
                    <div className="flex justify-center mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#1e3a5f] flex items-center justify-center">
                            <span className="text-2xl md:text-3xl font-bold ">?</span>
                        </div>
                    </div>

                    <h2 className="text-xl md:text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
                    <p className="text-sm md:text-base text-gray-500 text-center mb-6 md:mb-8">
                        Know about your query and popularly asked questions
                    </p>

                    <div className="space-y-3 md:space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-3 md:p-5 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-medium text-sm md:text-base text-[#1e3a5f] pr-2 md:pr-4">{faq.question}</span>
                                    <span className="flex-shrink-0 text-gray-400">
                                        {openIndex === index ? (
                                            <Minus className="h-4 w-4 md:h-5 md:w-5" />
                                        ) : (
                                            <Plus className="h-4 w-4 md:h-5 md:w-5" />
                                        )}
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <p className="px-3 md:px-5 pb-3 md:pb-5 text-sm md:text-base text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-6 md:mt-8 ">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-5 md:px-8 py-3 md:py-4 border border-primary rounded-full text-sm md:text-base font-medium hover:bg-primary transition-colors"
                        >
                            <span>Book Free Consultation</span>
                            <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
