import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutPage from "./pages/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  )
}

export default App