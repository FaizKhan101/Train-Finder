import { useContext, useState } from "react";
import { TRAINS } from "../data";
import SearchBar from "./SearchBar";
import TrainList from "./TrainList";
import { AuthContext } from "./Auth.context";

function Home() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [trains] = useState(TRAINS);
  // const [component, setComponent] = useState("list");

  // useEffect(() => {
  //   fetch(`http://localhost:3000/trains`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Something went wrong.");
  //       }
  //       return response.json();
  //     })
  //     .then((trains) => {
  //       setTrains(trains);
  //     });
  // }, []);

  // function handleSearchTrain(text) {
  //   fetch(`http://localhost:3000/trains/${text}`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Something went wrong.");
  //       }
  //       return response.json();
  //     })
  //     .then((trains) => {
  //       setTrains(trains);
  //     });
  // }

  // function handleDetail(trainNumber) {
  //   if (!trainNumber) {
  //     setComponent("list");
  //     return;
  //   }
  //   fetch(`http://localhost:3000/trains/${trainNumber}/detail`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Something went wrong.");
  //       }
  //       return response.json();
  //     })
  //     .then((train) => {
  //       setComponent(train);
  //     });
  // }

  // let content;

  // if (component === "list") {
  //   content = ;
  // } else if (component !== false) {
  //   content = <TrainDetail train={component} onBackClick={handleDetail} />;
  // }

  function handleSearchTrain(text) {
    console.log(text);
  }

  return (
    <>
      {isAuthenticated && <h1>Welcome {user.email}</h1>}
      <main className="container d-flex flex-column justify-content-center mt-5">
        <SearchBar searchTrain={handleSearchTrain} />
        <TrainList trains={trains} />
      </main>
    </>
  );
}

export default Home;
