import { useState } from 'react'
import Layout from '../layouts/Layout'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // No backend — just reset for demo
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <Layout footerVariant="minimal" bgClass="bg-[#f6f7f8]">
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        {/* Page Title */}
        <h1 className="text-[48px] font-extrabold tracking-[-1.2px] leading-[48px] text-[#0f172a] mb-2">
          Contact
        </h1>
        <p className="text-[20px] font-medium text-[#64748b] mb-12">
          Let's discuss your IT solutions.
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <div className="flex-1 max-w-[600px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold text-[#0f172a]">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border border-[#e2e8f0] rounded-[8px] px-4 py-3 text-[16px] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 transition bg-white"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold text-[#0f172a]">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full border border-[#e2e8f0] rounded-[8px] px-4 py-3 text-[16px] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 transition bg-white"
                />
              </div>
              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold text-[#0f172a]">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full border border-[#e2e8f0] rounded-[8px] px-4 py-3 text-[16px] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#137fec] focus:ring-2 focus:ring-[#137fec]/20 transition resize-none bg-white"
                />
              </div>
              {/* Submit */}
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="bg-[#137fec] text-white text-[16px] font-bold px-6 py-3 rounded-[8px] hover:bg-[#0479fc] transition-colors"
                >
                  Send Message
                </button>
                <span className="text-[12px] text-[#64748b] leading-[16px]">
                  We usually respond within 24 hours.
                </span>
              </div>
            </form>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10 lg:w-[460px] shrink-0">
            {/* Office Info Card */}
            <div className="bg-white rounded-[16px] border border-[#e2e8f0] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] p-8 flex flex-col gap-8">
              <h2 className="text-[24px] font-bold leading-[32px] text-[#0f172a]">Office Information</h2>
              <div className="flex flex-col gap-8">
                {/* Visit */}
                <div className="flex items-start gap-5">
                  <div className="w-[42px] h-[42px] bg-[#eff6ff] rounded-[10px] flex items-center justify-center shrink-0">
                    <img src="/icons/icon-location.svg" alt="" className="w-[19px] h-[23px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
                  </div>
                  <div>
                    <p className="text-[18px] font-bold leading-[22.5px] text-[#0f172a] mb-1">Visit Us</p>
                    <p className="text-[16px] leading-[26px] text-[#64748b]">
                      Jakarta, Indonesia<br />
                      Sentral Senayan II, Jl. Asia Afrika No.8
                    </p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-[42px] h-[42px] bg-[#eff6ff] rounded-[10px] flex items-center justify-center shrink-0">
                    <img src="/icons/icon-email.svg" alt="" className="w-[23px] h-[19px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
                  </div>
                  <div>
                    <p className="text-[18px] font-bold leading-[22.5px] text-[#0f172a] mb-1">Email Us</p>
                    <p className="text-[16px] leading-[26px] text-[#64748b]">contact@inforhan.com</p>
                    <p className="text-[14px] text-[#94a3b8]">For general inquiries and support</p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-[42px] h-[42px] bg-[#eff6ff] rounded-[10px] flex items-center justify-center shrink-0">
                    <img src="/icons/icon-phone.svg" alt="" className="w-[21px] h-[21px]" style={{ filter: 'invert(40%) sepia(90%) saturate(400%) hue-rotate(190deg) brightness(105%)' }} />
                  </div>
                  <div>
                    <p className="text-[18px] font-bold leading-[22.5px] text-[#0f172a] mb-1">Call Us</p>
                    <p className="text-[16px] leading-[26px] text-[#64748b]">Mon-Fri from 9am to 6pm</p>
                    <p className="text-[16px] font-medium text-[#0f172a]">+62 21 555 0199</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div className="relative rounded-[16px] overflow-hidden h-[200px]">
              <img
                src="/images/contact-building.png"
                alt="InforHan office building"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <button className="flex items-center gap-2 bg-white/10 backdrop-blur-[12px] border border-white/20 text-white text-[14px] font-medium px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                  <img src="/icons/icon-map.svg" alt="" className="w-[14px] h-[14px] brightness-[100] invert" />
                  View on Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
