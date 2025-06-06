import { useRef } from "react";

export default function SearchBar({ searchTrain }) {
  const searchNumber = useRef();

  function handleChange() {
    const enteredText = searchNumber.current.value;
    searchTrain(enteredText);
  }
  return (
    <div id="searching-area">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          🔍
        </span>
        <input
          ref={searchNumber}
          type="text"
          className="form-control"
          placeholder="Search 09254, Rajdhani Express, Friday"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
