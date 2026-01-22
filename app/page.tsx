import { FAQSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import MagneticLogoGrid from "@/components/magnetic-log";
import { ServicesSection } from "@/components/service-section";
import { TestimonialsSection } from "@/components/testimonial-section";
import { AnimatedJourney } from "@/components/home/animated-journey";
import { PartnerLogos } from "@/components/home/partner-logos";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Setup in Dubai & UAE | NexusGate",
  description: "Your gateway to business setup in Dubai. We specialize in Mainland & Free Zone company formation, Golden Visas, and Corporate Tax compliance.",
};

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* NEW: Intro Section (Split Layout) */}
      <section className="w-full bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading */}
          <div>
            <span className="font-space font-bold text-xs tracking-[0.2em] text-primary uppercase block mb-4">
              Welcome to NexusGate
            </span>
            <h2 className="font-space text-3xl md:text-5xl font-bold text-[#0f2a44] mb-6 leading-tight">
              Your Gateway to <br /> Business in Dubai.
            </h2>
            <p className="font-arimo text-gray-600 text-lg leading-relaxed mb-8">
              Navigate the complexities of UAE business setup with confidence. We combine local expertise with global standards to deliver seamless corporate solutions.
            </p>
            <p className="font-arimo text-gray-600 text-lg leading-relaxed mb-8">
              Navigate the complexities of UAE business setup with confidence. We combine local expertise with global standards to deliver seamless corporate solutions.
            </p>
            <div className="h-1.5 w-16 bg-primary rounded-full"></div>
          </div>

          {/* Right: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/home-intro.jpg"
              alt="Dubai Business"
              className="w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* NEW: Why Choose Us (Features Grid) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-space font-bold text-xs tracking-[0.2em] text-primary uppercase">
              Why Choose NexusGate
            </span>
            <h2 className="font-space text-3xl md:text-4xl font-bold text-[#0f2a44] mt-4">
              Excellence in Every Detail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Mastery",
                desc: "Native understanding of UAE regulations and government liaising.",
                icon: "🏛️"
              },
              {
                title: "Speed & Efficiency",
                desc: "Expedited processing for trade licenses, visas, and permits.",
                icon: "⚡"
              },
              {
                title: "Transparent Pricing",
                desc: "Clear upfront costs with zero hidden fees or surprises.",
                icon: "💎"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="font-space text-xl font-bold text-[#0f2a44] mb-4">{feature.title}</h3>
                <p className="font-arimo text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Expertise & Impact (The "Second" Grid Section) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <span className="font-space font-bold text-xs tracking-[0.2em] text-primary uppercase block mb-4">
                Our Expertise
              </span>
              <h2 className="font-space text-3xl md:text-5xl font-bold text-[#0f2a44] leading-tight">
                Specialized Solutions <br /> for Global Ambition.
              </h2>
            </div>
            <div>
              <p className="font-arimo text-gray-600 text-lg leading-relaxed">
                We don't just process papers; we build foundations. Our expertise spans across highly regulated industries, ensuring your business is compliant and competitive from day one.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Mainland Setup", value: "100%", detail: "Foreign Ownership" },
              { title: "Freezone Hubs", value: "45+", detail: "Specialized Zones" },
              { title: "Banking Success", value: "High", detail: "Approval Rate" },
              { title: "PRO Support", value: "24/7", detail: "Concierge Service" }
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-2xl group hover:bg-[#0f2a44] transition-all duration-500">
                <h4 className="font-space text-gray-500 text-sm uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">{stat.title}</h4>
                <div className="font-space text-4xl font-bold text-[#0f2a44] group-hover:text-white transition-colors mb-2">{stat.value}</div>
                <div className="font-arimo text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedJourney />

      {/* NEW: Methodology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-8">
                {[
                  {
                    step: "01",
                    title: "Strategic Advisory",
                    desc: "We analyze your business goals and recommend the most optimal jurisdiction and legal structure."
                  },
                  {
                    step: "02",
                    title: "Documentation & Approval",
                    desc: "Our PRO team handles all legal paperwork, notarization, and government approvals seamlessly."
                  },
                  {
                    step: "03",
                    title: "Operational Launch",
                    desc: "From trade licenses to bank accounts and visas, we ensure your business is fully ready to trade."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="font-space text-5xl font-bold text-gray-100 group-hover:text-primary/20 transition-colors">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-space text-xl font-bold text-[#0f2a44] mb-2">{item.title}</h3>
                      <p className="font-arimo text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-space font-bold text-xs tracking-[0.2em] text-primary uppercase block mb-4">
                Our Methodology
              </span>
              <h2 className="font-space text-3xl md:text-5xl font-bold text-[#0f2a44] mb-6 leading-tight">
                A Proven Path to <br /> Your Success.
              </h2>
              <p className="font-arimo text-gray-600 text-lg leading-relaxed mb-8">
                We've refined our process over a decade to eliminate bottlenecks and ensure absolute compliance at every stage of your setup.
              </p>
              <div className="h-2 w-20 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Core Commitment Strip (Replaced Stats) */}
      <section className="py-20 bg-[#0f2a44]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Strategic Precision", desc: "Data-driven insights for optimal setup" },
              { title: "Absolute Compliance", desc: "Strict adherence to UAE regulatory laws" },
              { title: "Ethical Standards", desc: "Complete transparency in every transaction" },
              { title: "Long-term Partnership", desc: "Support that grows with your business" }
            ].map((pillar, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="font-space text-xl font-bold text-white mb-2">{pillar.title}</div>
                <div className="font-arimo text-gray-400 text-sm leading-relaxed">{pillar.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* NEW: CTA Strip */}
      <section className="py-20 bg-[#0f2a44] text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-space text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Launch Your Business?
          </h2>
          <p className="font-arimo text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of successful companies who trusted NexusGate to build their foundation in Dubai.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-[#2c8c91] text-white font-space font-bold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg"
          >
            Start Your Journey
          </a>
        </div>
      </section>
      <PartnerLogos />
      <FAQSection />

      <TestimonialsSection />
      <MagneticLogoGrid />
    </>
  );
}
