import { Linkedin, Github, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ]

  const supportLinks = [
    { name: "Help Center", href: "#help" },
    { name: "Contact Support", href: "#support" },
    { name: "FAQs", href: "#faq" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Demo", href: "#demo" },
  ]

  const learningLinks = [
    { name: "Courses", href: "#courses" },
    { name: "Projects", href: "#projects" },
    { name: "Resources", href: "#resources" },
    { name: "Blog", href: "#blog" },
  ]

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Partners", href: "#partners" },
    { name: "Press Kit", href: "#press" },
  ]

  return (
    <>
    <footer id="contact" className="relative bg-black border-t border-purple-500/20 py-12 px-6 overflow-hidden">
      {/* Purple glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 md:gap-6 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-3">
              CodeMaster Academy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Learn to code faster with AI-powered guidance and real-world projects.
            </p>
            <a
              href="mailto:support@codemaster.academy"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-300 text-sm"
            >
              <Mail className="w-4 h-4" />
              support@codemaster.academy
            </a>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <nav className="flex flex-col gap-3">
              {productLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Learning</h4>
            <nav className="flex flex-col gap-3">
              {learningLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <nav className="flex flex-col gap-3">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col gap-3">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Changed Support column heading */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <nav className="flex flex-col gap-3">
              {supportLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-500/20 flex flex-col items-center justify-center gap-4">
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center hover:bg-purple-600/40 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
                </a>
              )
            })}
          </div>

          <p className="text-gray-400 text-sm">© 2025 CodeMaster Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}
