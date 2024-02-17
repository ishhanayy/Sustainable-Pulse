import React from "react";
import Leaf from "../img/Leaf.png";
import Bohemian from "../img/Bohemian.png";

function Pic() {
  return (
    <div class="div2" id="expandable-image">
      <div className="drifting-container">
        <img
          className="BohemianPic drifting-image"
          src={Bohemian}
          alt="bohemian"
        />
      </div>
      <div>
        <img class="image" src={Leaf} alt="sustainable message" />
      </div>
    </div>
  );
}

export default Pic;
