import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// import Blog from './pages/Blog'

const App = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/blog"}>Blog</Link>
      <Link to={"/blog/basic"}>Blog Menu 1</Link>
      <h6>Redirect Netlifly</h6>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/blog/*" element={<Blog />} /> */}
      </Routes>
    </div>
  )
}

export default App
