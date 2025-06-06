import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container d-flex flex-column justify-content-center mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
