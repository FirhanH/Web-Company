import { Link } from 'react-router-dom'
import Layout from '../layouts/Layout'

const services = [
  {
    icon: '/icons/icon-webdev.svg',
    title: 'Web Development',
    desc: 'Robust and scalable websites tailored to your specific enterprise needs using modern frameworks and best practices.',
  },
  {
    icon: '/icons/icon-appdev.svg',
    title: 'Application Development',
    desc: 'Native and cross-platform mobile solutions that engage users anywhere, ensuring seamless performance on all devices.',
  },
  {
    icon: '/icons/icon-uiux.svg',
    title: 'UI/UX Design',
    desc: 'Intuitive interfaces designed to maximize user satisfaction and retention through research-driven design systems.',
  },
  {
    icon: '/icons/icon-support.svg',
    title: 'Maintenance & Support',
    desc: 'Reliable 24/7 support to ensure your systems run smoothly without interruption, securing your business continuity.',
  },
]

export default function Services() {
  return (
    <Layout footerVariant="full" bgClass="bg-[#f6f7f8]">
      {/* Hero */}
      <section
        className="py-20 px-8 text-center"
        style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
      >
        <div className="max-w-[900px] mx-auto">
          <span className="inline-block text-[14px] font-bold tracking-[0.35px] uppercase text-[#137fec] bg-[#eff6ff] border border-[#bfdbfe] rounded-full px-4 py-1 mb-6">
            Expertise &amp; Excellence
          </span>
          <h1 className="text-[56px] font-extrabold tracking-[-1.5px] leading-[60px] text-[#0f172a] mb-6">
            Professional IT Solutions<br />for Your Business
          </h1>
          <p className="text-[20px] font-medium leading-[28px] text-[#475569]">
            InforHan delivers precision engineering and design to elevate your<br />
            digital presence with scalable, robust technologies.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-[12px] border border-[#f1f5f9] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] p-10 flex flex-col gap-6 hover:shadow-md transition-shadow"
              >
                <div className="w-[48px] h-[48px] bg-[#eff6ff] rounded-[10px] flex items-center justify-center">
                  <img src={icon} alt={title} className="w-[28px] h-[28px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-[24px] font-bold leading-[32px] text-[#0f172a]">{title}</h2>
                  <p className="text-[16px] leading-[26px] text-[#475569]">{desc}</p>
                </div>
                <Link
                  to="/contact"
                  className="flex items-center gap-1 text-[14px] font-bold text-[#137fec] hover:gap-2 transition-all w-fit"
                >
                  Learn more
                  <img src="/icons/arrow-right-sm.svg" alt="" className="w-[12px] h-[12px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0f172a] py-20 px-8 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[36px] font-bold tracking-[-0.9px] leading-[40px] text-white mb-5">
            Ready to transform your business?
          </h2>
          <p className="text-[18px] leading-[28px] text-[#94a3b8] mb-10">
            Our team of experts is ready to help you build the digital future of your enterprise.<br />
            Contact us today for a free consultation.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-[#137fec] text-white text-[16px] font-bold px-8 py-3 rounded-md hover:bg-[#0479fc] transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="text-white text-[16px] font-bold px-8 py-3 rounded-md border border-white/30 hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
