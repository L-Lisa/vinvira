export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background with Mesh Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-vin-neutral-900 via-vin-neutral-800 to-vin-neutral-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.2),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(120,219,255,0.1),transparent_50%)]"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Brand Section - Takes more space */}
            <div className="lg:col-span-5">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-vin-primary-400 to-vin-secondary-500 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-white to-vin-neutral-300 bg-clip-text text-transparent">
                    VINVIRA
                  </div>
                </div>
                <p className="text-vin-neutral-300 text-lg leading-relaxed mb-6 max-w-md">
                  AI-drivna digitala lösningar för småföretag. Snabbare, smartare och mer prisvärt än traditionella byråer.
                </p>
                
                {/* Value Props */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center text-vin-neutral-400">
                    <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3"></div>
                    <span className="text-sm">AI-optimerad utveckling</span>
                  </div>
                  <div className="flex items-center text-vin-neutral-400">
                    <div className="w-2 h-2 bg-vin-secondary-400 rounded-full mr-3"></div>
                    <span className="text-sm">Transparent prissättning</span>
                  </div>
                  <div className="flex items-center text-vin-neutral-400">
                    <div className="w-2 h-2 bg-vin-accent-400 rounded-full mr-3"></div>
                    <span className="text-sm">Snabb leverans</span>
                  </div>
                  <div className="flex items-center text-vin-neutral-400">
                    <div className="w-2 h-2 bg-vin-primary-400 rounded-full mr-3"></div>
                    <span className="text-sm">Svensk kvalitet</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-6 text-lg">Tjänster</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/webb" className="group flex items-center text-vin-neutral-400 hover:text-white transition-all duration-300">
                    <div className="w-1 h-1 bg-vin-primary-400 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                    Webb & hemsida
                  </a>
                </li>
                <li>
                  <a href="/seo" className="group flex items-center text-vin-neutral-400 hover:text-white transition-all duration-300">
                    <div className="w-1 h-1 bg-vin-secondary-400 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                    SEO & optimering
                  </a>
                </li>
                <li>
                  <a href="/admin" className="group flex items-center text-vin-neutral-400 hover:text-white transition-all duration-300">
                    <div className="w-1 h-1 bg-vin-accent-400 rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                    Admin support
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Pricing */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-6 text-lg">Priser</h3>
              <ul className="space-y-4 text-vin-neutral-400">
                <li className="text-sm">
                  <span className="text-white font-medium">Hemsida:</span> från 5.000 kr
                </li>
                <li className="text-sm">
                  <span className="text-white font-medium">SEO:</span> från 500 kr/mån
                </li>

                <li>
                  <a href="/" className="text-vin-primary-400 hover:text-vin-primary-300 text-sm underline transition-colors">
                    Se alla paket →
                  </a>
                </li>
              </ul>
            </div>
            
            {/* CTA Section */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold mb-6 text-lg">Redo att komma igång?</h3>
              <div className="bg-gradient-to-br from-vin-neutral-800/50 to-vin-neutral-700/30 backdrop-blur-sm border border-vin-neutral-600/30 rounded-2xl p-6">
                <p className="text-vin-neutral-300 text-sm mb-4">
                  Få en kostnadsfri konsultation och se hur vi kan hjälpa ditt företag växa online.
                </p>
                <a 
                  href="/kontakt"
                  className="group inline-flex items-center justify-center w-full bg-gradient-to-r from-vin-primary-500 to-vin-secondary-500 hover:from-vin-primary-400 hover:to-vin-secondary-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-vin-primary-500/25"
                >
                  <svg className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Kontakta oss
                </a>
                <p className="text-vin-neutral-400 text-xs mt-3 text-center">
                  <a href="mailto:hej@vinvira.se" className="hover:text-vin-primary-400 transition-colors">hej@vinvira.se</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-vin-neutral-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="text-vin-neutral-500 text-sm mb-4 sm:mb-0">
                © {new Date().getFullYear()} Vinvira. Alla rättigheter förbehållna.
              </div>
              <div className="flex items-center space-x-6 text-vin-neutral-500 text-sm">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-vin-success-400 rounded-full mr-2 animate-pulse"></div>
                  Byggd med AI-teknik
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Sverige
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

