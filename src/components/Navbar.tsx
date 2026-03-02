import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#e2e8f0] h-14 flex items-center px-8">
      <div className="max-w-[1280px] mx-auto w-full flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/icons/logo-icon.svg" alt="InforHan logo" className="w-[22px] h-[22px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
          <span className="text-[20px] font-bold tracking-[-0.5px] text-[#0f172a]">InforHan</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-[50px]">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-[18px] font-medium leading-[20px] transition-colors ${
                  isActive ? 'text-[#0479fc]' : 'text-[#475569] hover:text-[#0479fc]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="bg-[#137fec] text-white text-[14px] font-bold px-4 py-2 rounded-md hover:bg-[#0479fc] transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  )
}
