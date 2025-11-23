import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 980);
    };
    window.addEventListener('resize', handleResize);

    document.body.classList.add('is-preload');
    const timer = setTimeout(() => {
      document.body.classList.remove('is-preload');
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Header footer={!isMobile ? <Footer /> : null} />
      <About />
      {isMobile && <Footer />}
    </>
  )
}

export default App
