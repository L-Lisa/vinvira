export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-bold text-vinvira-primary mb-2">Vinvira</div>
          <p className="text-sm text-gray-600">Smidiga och prisvärda digitala tjänster för småföretagare i Sverige.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Tjänster</div>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="/webb">Webb & hemsida</a></li>
            <li><a href="/seo">SEO</a></li>
            <li><a href="/admin">Administrativ support</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Kontakt</div>
          <p className="text-sm text-gray-600">E-post: <a href="mailto:info@vinvira.se" className="underline">info@vinvira.se</a></p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t">© {new Date().getFullYear()} Vinvira</div>
    </footer>
  );
}
