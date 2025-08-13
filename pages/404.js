export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-8 text-center bg-vin-bgLight">
      <div>
        <h1 className="text-5xl font-bold mb-4 text-vin-textDark">Sidan finns inte</h1>
        <p className="text-gray-600 mb-6">Länken kan vara fel eller sidan har flyttats.</p>
        <a href="/" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-vin-primary to-vin-highlight text-white shadow-glow hover:shadow-glowHighlight hover:scale-105 transition-all duration-200 ease-in-out">
          Till startsidan
        </a>
      </div>
    </main>
  );
}
