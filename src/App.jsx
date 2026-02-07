import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Navigation from './components/Navigation'
import ThemeToggle from './components/ThemeToggle'
import NotFound from './components/NotFound'

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
    <ThemeProvider>
      <Router>
        <ThemeToggle />
        <Header footer={!isMobile ? <Footer /> : null} />
        <div id="main">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {isMobile && <Footer />}
      </Router>
    </ThemeProvider>
  )
}

export default App
