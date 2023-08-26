import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Blog from "./pages/Blog";
import Testimonial from "./pages/Testimonial";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { useSelector } from "react-redux";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";

function App() {
  const { isAuthenticated } = useSelector((state) => state.root);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />

          
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
          <Route path="/blogs" element={ <Blog /> }/>
          <Route path="/testimonial" element={<Testimonial />} />
          </Route>
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
