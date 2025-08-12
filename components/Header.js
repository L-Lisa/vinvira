export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-soft">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-bold text-vinvira-primary">Vinvira</a>
        <nav className="flex gap-6 text-sm">
          <a href="/webb" className="hover:text-vinvira-primary">Webb</a>
          <a href="/seo" className="hover:text-vinvira-primary">SEO</a>
          <a href="/admin" className="hover:text-vinvira-primary">Admin</a>
          <a href="/projekt" className="hover:text-vinvira-primary">Projekt</a>
          <a href="#contact" className="px-3 py-1.5 rounded-2xl bg-vinvira-primary text-white">Boka möte</a>
        </nav>
      </div>
    </header>
  );
}
