import React, { useState } from "react";
import { answer } from "./score";

const Analysis = () => {
  const [tip, showTip] = useState(false);

  const Tips = () => {
    return (
      <>
        <h1 className="listHeading">Sustainable Living Tips</h1>
        <ul className="list">
          <li>Reduce, Reuse, Recycle.</li>
          <li>Conserve Water.</li>
          <li>Use Energy-Efficient Appliances.</li>
          <li>Switch to Renewable Energy Sources.</li>
          <li>Choose Sustainable Transportation.</li>
          <li>Shop Responsibly.</li>
          <li>Reduce Meat Consumption.</li>
          <li>Support Local and Sustainable Agriculture.</li>
          <li>Minimize Single-Use Plastics.</li>
          <li>Plant Trees and Maintain Green Spaces.</li>
          <li>Practice Eco-Friendly Habits at Home.</li>
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="progressReport">
        Your sustainability progress is at {((answer / 3) * 100).toFixed(2)}%
      </div>
      <div>
        <button className="commonButton" onClick={() => window.location.reload()}>Close</button>
        <button className="commonButton" onClick={()=>showTip(true)}>Tips</button>
      </div>
      {tip && <Tips/>}
    </>
  );
};

export default Analysis;
