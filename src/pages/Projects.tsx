import { Link } from 'react-router-dom'
import Layout from '../layouts/Layout'

interface Project {
  id: number
  category: 'Mobile App' | 'SaaS Platform'
  title: string
  desc: string
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Mobile App',
    title: 'Lorem Ipsum App',
    desc: "A secure and intuitive mobile banking solution designed for Indonesia's growing digital economy. Features include QR payments, real-time transfers, and investment tracking.",
    image: '/images/project1.svg',
  },
  {
    id: 2,
    category: 'SaaS Platform',
    title: 'Lorem Ipsum',
    desc: 'Comprehensive fleet management and tracking dashboard for a nationwide logistics provider. Optimized for high-volume data visualization and real-time reporting.',
    image: '/images/project2.svg',
  },
  {
    id: 3,
    category: 'SaaS Platform',
    title: 'Lorem Ipsum',
    desc: 'Comprehensive fleet management and tracking dashboard for a nationwide logistics provider. Optimized for high-volume data visualization and real-time reporting.',
    image: '/images/project3.svg',
  },
  {
    id: 4,
    category: 'Mobile App',
    title: 'Lorem Ipsum App',
    desc: 'Comprehensive fleet management and tracking dashboard for a nationwide logistics provider. Optimized for high-volume data visualization and real-time reporting.',
    image: '/images/project4.svg',
  },
  {
    id: 5,
    category: 'SaaS Platform',
    title: 'Lorem Ipsum',
    desc: 'Comprehensive fleet management and tracking dashboard for a nationwide logistics provider. Optimized for high-volume data visualization and real-time reporting.',
    image: '/images/project5.svg',
  },
  {
    id: 6,
    category: 'Mobile App',
    title: 'Lorem Ipsum App',
    desc: 'Comprehensive fleet management and tracking dashboard for a nationwide logistics provider. Optimized for high-volume data visualization and real-time reporting.',
    image: '/images/project6.svg',
  },
]

const categoryColors: Record<Project['category'], string> = {
  'Mobile App': 'text-[#1e40af] bg-[#dbeafe]',
  'SaaS Platform': 'text-[#3730a3] bg-[#e0e7ff]',
}

export default function Projects() {
  return (
    <Layout footerVariant="projects" bgClass="bg-[#f5f5f7]">
      {/* Header */}
      <section className="px-8 pt-14 pb-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#137fec]/10 rounded-full px-3 py-1 mb-6">
            <img src="/icons/icon-portfolio.svg" alt="" className="w-[14px] h-[11px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
            <span className="text-[12px] font-bold tracking-[0.6px] uppercase text-[#137fec]">Our Portfolio</span>
          </div>
          <h1 className="text-[48px] font-extrabold tracking-[-1.2px] leading-[48px] text-[#0f172a] mb-5 max-w-[700px]">
            Delivering Digital Excellence<br />across Indonesia.
          </h1>
          <p className="text-[18px] leading-[29.25px] text-[#475569] max-w-[560px]">
            Explore how InforHan transforms businesses through innovative IT solutions,<br />
            from fintech platforms to logistics dashboards.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-[16px] border border-[#f1f5f9] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Image */}
                <div className="h-[220px] overflow-hidden bg-[#f1f5f9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <span className={`inline-block text-[12px] font-medium leading-[16px] px-2 py-0.5 rounded w-fit ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                  <h3 className="text-[24px] font-bold leading-[32px] text-[#0f172a]">{project.title}</h3>
                  <p className="text-[16px] leading-[24px] text-[#475569] flex-1">{project.desc}</p>
                  <Link
                    to="/contact"
                    className="flex items-center gap-1 text-[14px] font-bold text-[#137fec] hover:gap-2 transition-all w-fit mt-2"
                  >
                    View Case Study
                    <img src="/icons/arrow-right-blue.svg" alt="" className="w-[12px] h-[12px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-8 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[30px] font-bold leading-[36px] text-[#0f172a] mb-4">
            Ready to start your project?
          </h2>
          <p className="text-[16px] leading-[24px] text-[#475569] mb-8">
            Let's collaborate to build something amazing. Our team of experts is ready to help you<br />
            achieve your digital goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#137fec] text-white text-[16px] font-bold px-8 py-3 rounded-[8px] hover:bg-[#0479fc] transition-colors shadow-[0px_4px_6px_rgba(59,130,246,0.30),0px_10px_15px_rgba(59,130,246,0.30)]"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </Layout>
  )
}
