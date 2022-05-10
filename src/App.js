import { useState } from "react";

function App() {
  // Array of anime lists

  const [options, setOptions] = useState([
    "Death Note",
    "Attack on Titan",
    "Bleach",
    "Dragon Ball Z",
    "Naruto",
    "Demon Slayer",
  ]);

  //selected  option  value
  const [dropdownValue, setDropdownValue] = useState("Option");

  //handle option click

  const handleOptionClick = (value) => {
    var ele = document.getElementsByClassName("dropdownContents")[0];
    ele.style.display = "none";
    setDropdownValue(value);
  };

  //handle hover effect using javascript

  const handleMouseOver = () => {
    document.getElementsByClassName("dropdownContents")[0].style.display =
      "block";
  };

  const handleMouseOut = () => {
    document.getElementsByClassName("dropdownContents")[0].style.display =
      "none";
  };

  return (
    <div className="App">
      <div className="dropdownContainer">
        <h2 className="title">What's ur favourite Anime ?</h2>
        <div
          className="wrapper"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="valueBox">
            <div className="dropdownValue">{dropdownValue}</div>
            <div className="imageBox">
              <img
                src="https://cdn-icons-png.flaticon.com/128/32/32195.png"
                alt="down"
              />
            </div>
          </div>
          <div className="dropdownContents">
            {options.map((option) => {
              return (
                <div
                  className={
                    (dropdownValue === option ? "active" : "") +
                    " dropdownOption"
                  }
                  onClick={() => {
                    handleOptionClick(option);
                  }}
                  key={option}
                >
                  {option}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
