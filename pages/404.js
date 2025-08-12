export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-8 text-center">
      <div>
        <h1 className="text-5xl font-bold mb-4">Sidan finns inte</h1>
        <p className="text-gray-600 mb-6">Länken kan vara fel eller sidan har flyttats.</p>
        <a href="/" className="px-6 py-3 bg-vinvira-primary text-white rounded-2xl">Till startsidan</a>
      </div>
    </main>
  );
}
