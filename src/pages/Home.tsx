import { Link } from 'react-router-dom'
import Layout from '../layouts/Layout'

const stats = [
  { label: 'Projects Done', value: '50+' },
  { label: 'Years Experience', value: '4+' },
  { label: 'Team Experts', value: '35+' },
]

const services = [
  {
    icon: '/icons/icon-web.svg',
    title: 'Web Application',
    desc: 'Robust and scalable web solutions using React, Vue, and modern frameworks tailored for performance.',
  },
  {
    icon: '/icons/icon-mobile.svg',
    title: 'Mobile Application',
    desc: 'Native and cross-platform mobile applications for iOS and Android that engage users on the go.',
  },
  {
    icon: '/icons/icon-consulting.svg',
    title: 'IT Consulting',
    desc: 'Strategic technology planning and digital transformation consulting to accelerate your business growth.',
  },
]

export default function Home() {
  return (
    <Layout footerVariant="full">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '620px',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-8 py-24 flex items-center">
          <div className="max-w-[580px] z-10">
            <h1 className="text-[56px] font-extrabold leading-[60px] text-[#0f172a] mb-6">
              Building{' '}
              <span className="text-[#137fec]">Web &<br />Application</span>
              {' '}Solutions<br />for Your Business
            </h1>
            <p className="text-[18px] leading-[32px] text-[#475569] mb-8 max-w-[520px]">
              We provide expert Web and Application Development services to help your business grow.
              Transform your ideas into robust digital solutions with our dedicated team.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/services"
                className="bg-[#137fec] text-white text-[16px] font-bold px-6 py-3 rounded-md hover:bg-[#0479fc] transition-colors"
              >
                View Our Services
              </Link>
              <Link
                to="/projects"
                className="text-[#334155] text-[16px] font-semibold px-6 py-3 rounded-md border border-[#cbd5e1] bg-white hover:border-[#137fec] transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
          <div className="absolute right-8 top-8 bottom-8 w-[44%] hidden lg:block">
            <img src="/images/hero-laptop.png" alt="Web development dashboard" className="h-full w-full object-contain" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-10 border-b border-[#e2e8f0]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-center justify-around flex-wrap gap-8">
            {stats.map(({ label, value }) => (
              <div key={label} className="flex flex-col items-center gap-1 text-center">
                <span className="text-[14px] font-medium text-[#64748b]">{label}</span>
                <span className="text-[30px] font-bold tracking-[-0.75px] leading-[36px] text-[#0f172a]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[16px] font-semibold text-[#137fec] mb-4">Our Expertise</p>
            <h2 className="text-[36px] font-bold tracking-[-0.9px] leading-[40px] text-[#0f172a] mb-4">
              Cutting-edge solutions tailored to your needs
            </h2>
            <p className="text-[18px] leading-[32px] text-[#475569] max-w-[600px] mx-auto">
              We leverage the latest technologies to build scalable, secure, and user-centric digital products.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-[16px] p-8 shadow-[0px_4px_12px_rgba(0,0,0,0.06),0px_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.10)] transition-shadow"
              >
                <div className="w-[40px] h-[40px] bg-[#eff6ff] rounded-[10px] flex items-center justify-center mb-5">
                  <img src={icon} alt={title} className="w-[22px] h-[22px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
                </div>
                <h3 className="text-[20px] font-bold text-[#0f172a] mb-3">{title}</h3>
                <p className="text-[16px] leading-[28px] text-[#475569] mb-6">{desc}</p>
                <Link to="/services" className="flex items-center gap-1 text-[14px] font-semibold text-[#137fec] hover:gap-2 transition-all">
                  Learn more
                  <img src="/icons/arrow-right.svg" alt="" className="w-[9px] h-[9px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-block bg-[#0f172a] text-white text-[16px] font-bold px-8 py-3 rounded-md hover:bg-[#1e293b] transition-colors"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative bg-[#137fec] py-20 px-8 overflow-hidden"
      >
        <img src="/icons/cta-mask.svg" alt="" className="absolute left-0 top-0 h-full pointer-events-none opacity-20" />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="flex flex-wrap gap-16 items-start">
            {/* Left */}
            <div className="max-w-[480px]">
              <h2 className="text-[36px] font-bold leading-[40px] text-white mb-4">
                Ready to start your digital journey?
              </h2>
              <p className="text-[18px] leading-[32px] text-[#dbeafe] mb-8">
                Contact our team today for a free consultation. Let's discuss how we can bring your vision to life.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  to="/contact"
                  className="bg-white text-[#137fec] text-[14px] font-semibold px-5 py-2 rounded-md hover:bg-[#f0f9ff] transition-colors"
                >
                  Get started
                </Link>
                <Link to="/services" className="flex items-center gap-1 text-white text-[14px] font-semibold hover:gap-2 transition-all">
                  Learn more
                  <img src="/icons/arrow-right.svg" alt="" className="w-[9px] h-[9px] brightness-[100] invert" />
                </Link>
              </div>
            </div>
            {/* Right – feature blocks */}
            <div className="flex gap-12 flex-wrap">
              <div className="max-w-[220px]">
                <div className="w-[34px] h-[36px] bg-white/10 rounded-[6px] flex items-center justify-center mb-3">
                  <img src="/icons/icon-calendar.svg" alt="" className="w-[20px] h-[20px] brightness-[100] invert" />
                </div>
                <h4 className="text-[16px] font-semibold leading-[24px] text-white mb-2">Weekly Strategy Meetings</h4>
                <p className="text-[16px] leading-[28px] text-[#dbeafe]">
                  We keep you in the loop with regular updates and transparent communication channels.
                </p>
              </div>
              <div className="max-w-[220px]">
                <div className="w-[32px] h-[36px] bg-white/10 rounded-[6px] flex items-center justify-center mb-3">
                  <img src="/icons/icon-security.svg" alt="" className="w-[20px] h-[20px] brightness-[100] invert" />
                </div>
                <h4 className="text-[16px] font-semibold leading-[24px] text-white mb-2">Enterprise Security</h4>
                <p className="text-[16px] leading-[28px] text-[#dbeafe]">
                  Your data is safe with us. We follow industry best practices for security and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
