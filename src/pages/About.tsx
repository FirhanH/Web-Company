import { Link } from 'react-router-dom'
import Layout from '../layouts/Layout'

export default function About() {
  return (
    <Layout footerVariant="minimal" bgClass="bg-[#eceff1]">
      <div className="max-w-[1280px] mx-auto px-8 py-16">

        {/* Hero Row */}
        <div className="bg-white rounded-[20px] overflow-hidden flex flex-col lg:flex-row shadow-sm mb-12">
          {/* Image */}
          <div className="lg:w-[55%] min-h-[380px] overflow-hidden">
            <img
              src="/images/about-office.svg"
              alt="InforHan office conference room"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="lg:w-[45%] p-12 flex flex-col justify-center gap-6">
            <div>
              <h1 className="text-[36px] font-extrabold tracking-[-0.9px] leading-[40px] text-[#0f172a] mb-4">
                Empowering<br />Indonesian<br />Businesses Through<br />IT.
              </h1>
              <div className="w-12 h-1 bg-[#137fec] rounded mb-5" />
              <p className="text-[18px] font-medium leading-[29.25px] text-[#475569]">
                InforHan is a premier IT consulting firm dedicated to streamlining digital infrastructures.
                We bridge the gap between complex technology and actionable business results.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-[14px] font-bold tracking-[0.35px] uppercase text-[#137fec] hover:gap-3 transition-all w-fit"
            >
              Meet Our Team
              <img src="/icons/arrow-right.svg" alt="" className="w-[9px] h-[9px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
            </Link>
          </div>
        </div>

        {/* Vision & Mission */}
        <h2 className="text-[30px] font-extrabold tracking-[-0.9px] leading-[40px] text-[#0f172a] text-center mb-8">
          Our Vision &amp; Mission
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Vision Card – blue */}
          <div className="bg-[#137fec] rounded-[16px] p-10 shadow-[0px_2px_4px_rgba(0,0,0,0.10),0px_4px_6px_rgba(0,0,0,0.10)] relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <img src="/icons/icon-vision.svg" alt="" className="w-[15px] h-[20px] brightness-[100] invert" />
              <span className="text-[20px] font-bold tracking-[1px] uppercase text-white">Our Vision</span>
            </div>
            <p className="text-[30px] font-bold leading-[36px] text-white">
              To modernize the digital landscape of Indonesia by providing robust, scalable, and secure IT solutions for every enterprise.
            </p>
          </div>

          {/* Mission Card – white */}
          <div className="bg-white rounded-[16px] p-10 border border-[#e2e8f0] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] flex flex-col justify-center gap-5">
            <div className="flex flex-col items-center gap-3">
              <img src="/icons/icon-mission.svg" alt="" className="w-[30px] h-[27px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
              <span className="text-[20px] font-bold text-[#0f172a]">OUR MISSION</span>
            </div>
            <p className="text-[30px] font-bold leading-[36px] text-[#000000] text-center">
              Delivering high-performance infrastructure that scales with your ambition.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
