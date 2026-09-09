import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient background: grid + aurora orbs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="bg-grid absolute inset-0" />
        <div className="orb -left-44 -top-44 h-[30rem] w-[30rem] bg-teal-500/15" />
        <div className="orb -right-52 top-[20%] h-[32rem] w-[32rem] bg-cyan-400/10" />
        <div className="orb -bottom-52 left-[12%] h-[30rem] w-[30rem] bg-violet-500/15" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-page to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-page to-transparent" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Work />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
