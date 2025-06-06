import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import TrainDetail from "./TrainDetail";
import TrainList from "./TrainList";

function Home() {
  const [trains, setTrains] = useState([]);
  const [component, setComponent] = useState("list");
  console.log(trains);

  useEffect(() => {
    fetch(`/trains`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong.");
        }
        return response.json();
      })
      .then((trains) => {
        setTrains(trains);
      });
  }, []);

  function handleSearchTrain(text) {
    fetch(`/trains/${text}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong.");
        }
        return response.json();
      })
      .then((trains) => {
        setTrains(trains);
      });
  }

  function handleDetail(trainNumber) {
    if (!trainNumber) {
      setComponent("list");
      return;
    }
    fetch(`/trains/${trainNumber}/detail`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong.");
        }
        return response.json();
      })
      .then((train) => {
        setComponent(train);
      });
  }

  let content;

  if (component === "list") {
    content = <TrainList trains={trains} onDetail={handleDetail} />;
  } else if (component !== false) {
    content = <TrainDetail train={component} onBackClick={handleDetail} />;
  }

  return (
    <>
      <main className="container d-flex flex-column justify-content-center mt-5">
        <SearchBar searchTrain={handleSearchTrain} />
        {content}
      </main>
    </>
  );
}

export default Home;
