import { createContext, useEffect, useState } from "react";

const TrainContext = createContext({
  getTrains: () => {},
  getTrain: (number) => {},
  trains: [],
});

export function TrainContextProvider({ children }) {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    async function getTrains() {
      const response = await fetch("http://localhost:3000");

      if (!response.ok) {
        getTrains;
        throw new Error("Fetching trains fail.");
      }

      const trains = await response.json();

      setTrains(trains);
    }
    getTrains();
  }, []);

  const ctxValue = {
    trains,
  };
  return (
    <TrainContext.Provider value={ctxValue}>{children}</TrainContext.Provider>
  );
}

export default TrainContext;
