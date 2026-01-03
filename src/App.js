import { motion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="App selection:bg-accent-teal/30 selection:text-accent-teal overflow-x-hidden bg-dark-bg text-gray-300 relative min-h-screen font-sans cursor-none">
      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border-2 border-accent-teal rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      
      {/* Global Background Animation Elements */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-dark-bg">
        <motion.div 
            animate={{ 
                x: [0, 50, 0],
                y: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-accent-teal/5 rounded-full blur-[120px]"
        />
        <motion.div 
            animate={{ 
                x: [0, -50, 0],
                y: [0, -30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-[700px] h-[700px] bg-accent-blue/5 rounded-full blur-[150px]"
        />
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-teal to-accent-blue z-50 origin-left"
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
