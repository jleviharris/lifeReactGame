import React from "react";

const GenerationCounter = ({ genRef }) => {
  return (
    <div className="countConponent">
      <div className="countContainer">
        <h2>Generation</h2>
        <h3>{genRef.current}</h3>
      </div>
    </div>
  );
};

export default GenerationCounter;
