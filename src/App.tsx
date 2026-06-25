import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <WhyChooseUs />
        <Team />
        <TechStack />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;