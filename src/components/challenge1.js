import React, { useState } from "react";
import Score from "./score";

const Challenge1 = ({onNextChallenge}) => {
  const [response, setResponse] = useState(""); //intially the useState is set empty to the 'response'

  const GreenClick = () => {
    setResponse("Green");
    Score();
  };

  const RedClick = () => {
    setResponse("Red");
  };

  const handleNextClick = () =>
  {
    onNextChallenge();
  }

  return (
    <div className="Challenges">
      <p>
        Do you use biodegradable; like wooden toothbrush or non-plastic items in
        your daily life ?
      </p>
      <div className="buttons">
        <button className="commonButton" onClick={GreenClick}>YES</button>
        <button className="commonButton" onClick={RedClick}>NO</button>
      </div>
      <button className="NextButton"onClick={handleNextClick}>Next ➡️</button>
    </div>
  );
};

export default Challenge1;