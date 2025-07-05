import { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import TrainList from "./TrainList";
import { AuthContext } from "./Auth.context";

function Home() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
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

  return (
    <>
      {isAuthenticated && <h1>Welcome {user.email}</h1>}
      <main className="container d-flex flex-column justify-content-center mt-5">
        <SearchBar searchTrain={handleSearchTrain} />
        {loading ? (
          <div className="card mt-4">
            <h5 className="card-header">Loading...</h5>
          </div>
        ) : (
          <TrainList trains={trains} />
        )}
      </main>
    </>
  );
}

export default Home;
