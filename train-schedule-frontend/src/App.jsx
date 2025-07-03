import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/ContactUs";
import TrainForm from "./components/TrainForm";
import TrainDetail from "./components/TrainDetail";
import Auth from "./components/Auth";
import { AuthProvider } from "./components/Auth.context";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main className="container d-flex flex-column justify-content-center mt-5">  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/add-train" element={<TrainForm />} />
            <Route path="/train/:trainNumber" element={<TrainDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
