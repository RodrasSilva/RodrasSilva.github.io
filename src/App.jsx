import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import NotFound from './components/NotFound'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
