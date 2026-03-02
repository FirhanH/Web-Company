import { Link } from 'react-router-dom'

interface FooterProps {
  variant?: 'full' | 'minimal' | 'projects'
}

export default function Footer({ variant = 'full' }: FooterProps) {
  if (variant === 'minimal') {
    return (
      <footer className="bg-white border-t border-[#e2e8f0] px-8 py-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src="/icons/logo-icon.svg" alt="InforHan" className="w-[22px] h-[22px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
              <span className="text-[18px] font-bold text-[#0f172a]">InforHan</span>
            </div>
            <p className="text-[14px] text-[#64748b]">© 2024 InforHan. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-8 flex-wrap">
            <div className="flex items-center gap-8 text-[14px] font-medium text-[#64748b]">
              <a href="#" className="hover:text-[#137fec] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#137fec] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#137fec] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#137fec] transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  if (variant === 'projects') {
    return (
      <footer className="bg-white px-8 pt-12 pb-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-wrap gap-12 justify-between mb-10">
            {/* Brand */}
            <div className="flex flex-col gap-4 max-w-[260px]">
              <div className="flex items-center gap-2">
                <img src="/icons/icon-triangle.svg" alt="InforHan" className="w-[17px] h-[13px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
                <span className="text-[18px] font-bold text-[#0f172a]">InforHan</span>
              </div>
              <p className="text-[14px] leading-[22.75px] text-[#64748b]">
                Leading IT consultancy firm in Indonesia,<br />
                dedicated to empowering businesses<br />
                through technology.
              </p>
            </div>
            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[16px] font-bold text-[#0f172a]">Company</h4>
              <div className="flex flex-col gap-2 text-[14px] text-[#64748b]">
                <a href="#" className="hover:text-[#137fec] transition-colors">About Us</a>
                <a href="#" className="hover:text-[#137fec] transition-colors">Careers</a>
                <a href="#" className="hover:text-[#137fec] transition-colors">Partners</a>
              </div>
            </div>
            {/* Services */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[16px] font-bold text-[#0f172a]">Services</h4>
              <div className="flex flex-col gap-2 text-[14px] text-[#64748b]">
                <a href="#" className="hover:text-[#137fec] transition-colors">Web Development</a>
                <a href="#" className="hover:text-[#137fec] transition-colors">Mobile Apps</a>
                <a href="#" className="hover:text-[#137fec] transition-colors">Cloud Solutions</a>
              </div>
            </div>
            {/* Connect */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[16px] font-bold text-[#0f172a]">Connect</h4>
              <div className="flex items-center gap-4">
                <img src="/icons/icon-social-globe.svg" alt="Website" className="w-5 h-5" style={{ filter: 'invert(64%) sepia(10%) saturate(600%) hue-rotate(180deg) brightness(100%)' }} />
                <img src="/icons/icon-suitcase.svg" alt="LinkedIn" className="w-5 h-5" style={{ filter: 'invert(64%) sepia(10%) saturate(600%) hue-rotate(180deg) brightness(100%)' }} />
                <img src="/icons/icon-mail-social.svg" alt="Email" className="w-5 h-5" style={{ filter: 'invert(64%) sepia(10%) saturate(600%) hue-rotate(180deg) brightness(100%)' }} />
              </div>
            </div>
          </div>
          <div className="border-t border-[#e2e8f0] pt-5 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[14px] text-[#94a3b8]">© 2024 InforHan Consulting. All rights reserved.</p>
            <div className="flex items-center gap-6 text-[14px] text-[#94a3b8]">
              <a href="#" className="hover:text-[#137fec] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#137fec] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  // Full footer (Home page)
  return (
    <footer className="bg-white px-8 pt-12 pb-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-wrap gap-12 justify-between mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-[280px]">
            <div className="flex items-center gap-2">
              <img src="/icons/logo-icon.svg" alt="InforHan" className="w-[15px] h-[15px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
              <span className="text-[18px] font-bold text-[#0f172a]">InforHan</span>
            </div>
            <p className="text-[14px] leading-[24px] text-[#475569]">
              Empowering businesses with innovative<br />
              technology solutions. Your success is our<br />
              mission.
            </p>
          </div>
          {/* Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-semibold text-[#0f172a]">Services</h4>
            <div className="flex flex-col gap-3 text-[14px] text-[#475569]">
              <Link to="/services" className="hover:text-[#137fec] transition-colors">Web Development</Link>
              <Link to="/services" className="hover:text-[#137fec] transition-colors">Mobile Development</Link>
              <Link to="/services" className="hover:text-[#137fec] transition-colors">Cloud Solutions</Link>
              <Link to="/services" className="hover:text-[#137fec] transition-colors">IT Consulting</Link>
            </div>
          </div>
          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-semibold text-[#0f172a]">Company</h4>
            <div className="flex flex-col gap-3 text-[14px] text-[#475569]">
              <Link to="/about" className="hover:text-[#137fec] transition-colors">About Us</Link>
              <a href="#" className="hover:text-[#137fec] transition-colors">Careers</a>
              <a href="#" className="hover:text-[#137fec] transition-colors">Blog</a>
              <Link to="/contact" className="hover:text-[#137fec] transition-colors">Contact</Link>
            </div>
          </div>
          {/* Social */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[14px] font-semibold text-[#0f172a]">Social</h4>
            <div className="flex flex-col gap-3 text-[14px] text-[#475569]">
              <a href="#" className="hover:text-[#137fec] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#137fec] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#137fec] transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e2e8f0] pt-5 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[12px] text-[#64748b]">© 2024 InforHan. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[12px] text-[#64748b]">
            <a href="#" className="hover:text-[#137fec] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#137fec] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
