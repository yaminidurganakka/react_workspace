import React from "react";
import "./middlenavi.css";
import societies from "./Images/societies.webp";
import home from "./Images/home.webp";
import city from "./Images/city-1.webp";

function Middlenavi() {
  return (
    <div>
      <div class="footer">
        <div class="foot">
          <img src={societies} alt="Notfound" class="img1" />
          <h1>25,000+ societies</h1>
        </div>
        <div class="foot">
          <img src={home} alt="NotFound" class="img1" />
          <h1>3.5 million+ homes</h1>
        </div>
        <div class="foot">
          <img src={city} alt="NotFound" class="img1" />
          <h1>27 major cities</h1>
        </div>
      </div>
    </div>
  );
}

export default Middlenavi;