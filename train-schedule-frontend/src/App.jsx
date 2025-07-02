import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/ContactUs";
import TrainForm from "./components/TrainForm";

function App() {
  const handleTrainSubmit = (trainData) => {
    console.log("Submitted Train:", trainData);
    fetch("http://localhost:3000/train", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trainData),
    });
    redirect("/");
    // Optionally send it to backend here via fetch/axios
  };

  return (
    <>
      <Router>
        <Header />

        <main className="container d-flex flex-column justify-content-center mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/add-train"
              element={<TrainForm onSubmit={handleTrainSubmit} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
