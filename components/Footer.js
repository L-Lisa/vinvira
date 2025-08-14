export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-vin-neutral-50 to-white border-t border-vin-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-bold text-vin-primary-600 mb-3 text-lg">VINVIRA</div>
          <p className="text-sm text-vin-neutral-600 leading-relaxed">
            Smidiga och prisvärda digitala tjänster för småföretagare i Sverige.
          </p>
        </div>
        
        <div>
          <div className="font-semibold mb-3 text-vin-neutral-800">Tjänster</div>
          <ul className="text-sm text-vin-neutral-600 space-y-2">
            <li>
              <a href="/webb" className="hover:text-vin-primary-600 transition-colors duration-200">
                Webb & hemsida
              </a>
            </li>
            <li>
              <a href="/seo" className="hover:text-vin-primary-600 transition-colors duration-200">
                SEO
              </a>
            </li>
            <li>
              <a href="/admin" className="hover:text-vin-primary-600 transition-colors duration-200">
                Administrativ support
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <div className="font-semibold mb-3 text-vin-neutral-800">Kontakt</div>
          <p className="text-sm text-vin-neutral-600">
            E-post: <a href="mailto:info@vinvira.se" className="underline hover:text-vin-primary-600 transition-colors duration-200">info@vinvira.se</a>
          </p>
        </div>
      </div>
      
      <div className="text-center text-xs text-vin-neutral-500 py-6 border-t border-vin-neutral-200">
        © {new Date().getFullYear()} Vinvira
      </div>
    </footer>
  );
}

