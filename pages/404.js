export default function Custom404() {
  return (
    <main className="min-h-screen grid place-items-center p-8 text-center bg-vin-neutral-50">
      <div className="max-w-md mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-vin-neutral-900">Sidan finns inte</h1>
        <p className="text-vin-neutral-700 mb-8">Sidan du letar efter finns inte.</p>
        <a href="/" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-primary-600 to-vin-secondary-600 text-white shadow-accessible hover:shadow-accessible-lg hover:scale-105 transition-all duration-200 ease-in-out">
          Gå till startsidan
        </a>
      </div>
    </main>
  );
}
