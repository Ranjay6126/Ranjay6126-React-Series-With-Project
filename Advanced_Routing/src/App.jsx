import { Route, Routes } from "react-router-dom"
import Footer from "./assets/components/Footer"
import Navbar from "./assets/components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Product from "./pages/Product"
import NotFound from "./pages/NotFound"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Kids from "./pages/Kids"        // ✅ Added missing import
import Courses from "./pages/Courses"
import CourseDetail from "./pages/CourseDetail"

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />

        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} /> {/* ✅ fixed path */}
          <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
