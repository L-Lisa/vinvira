import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-vin-bgLight text-vin-textDark">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <a href="#contact"
         className="fixed bottom-5 right-5 z-50 rounded-full px-5 py-3 bg-gradient-to-r from-vin-primary to-vin-highlight text-white shadow-glow hover:shadow-glowHighlight hover:scale-105 transition-all duration-200 ease-in-out">
        Boka möte
      </a>
    </div>
  );
}
