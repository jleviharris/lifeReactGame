import React from "react";

const GenerationCounter = ({ generation }) => {
  return (
    <div className="countConponent">
      <div className="countContainer">
        <h2>Generation</h2>
        <h3>{generation}</h3>
      </div>
    </div>
  );
};

export default GenerationCounter;
