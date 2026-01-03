import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="App selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden bg-secondary/30 relative">
      {/* Global Background Animation Elements */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <motion.div 
            animate={{ 
                x: [0, 100, 0],
                y: [0, 50, 0],
                rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"
        />
        <motion.div 
            animate={{ 
                x: [0, -100, 0],
                y: [0, -50, 0],
                rotate: [0, -90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-pink-400/5 rounded-full blur-[120px]"
        />
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-pink-400 z-50 origin-left"
        style={{ scaleX }}
      />
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
