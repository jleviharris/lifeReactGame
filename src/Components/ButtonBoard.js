import React from "react";

const ButtonBoard = () => {
  return (
    <div className="buttonContainer">
      <ul>
        <li>
          <button>Start</button>
        </li>
        <li>
          <button>Stop</button>
        </li>
        <li>
          <button>Resume</button>
        </li>
        <li>
          <button>Reset</button>
        </li>
      </ul>
    </div>
  );
};

export default ButtonBoard;
