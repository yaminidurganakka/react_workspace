import React from "react";
import "./middlecard.css";
import society from "./Images/For-Society-1.webp";
import residents from "./Images/For-Residents-1.jpg";
import image1 from "./Images/images1.webp";
import forbrands from "./Images/For-Brands.webp";

function Middlecard() {
  return (
    <div>
      <div class="middle">
        <h2 class="mid1">We simplify the complex!</h2>
        <p class="mid2">
          For everything connected with the housing society, we have a digital
          solution.
        </p>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="card1">
            <a href="">
              <img src={society} alt="Avatar" class="card-img" />
            </a>
          </div>
          <div class="container1">
            <a href="" class="card-head">
              <h2>For Societies</h2>
            </a>
            <p class="card-para">Meet your RWA's smart digital assistant.</p>
            <a href="" class="card-foot">
              Know More{" "}
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card1">
            <a href="">
              <img src={residents} alt="Avatar" class="card-img" />
            </a>
          </div>
          <div class="container1">
            <a href="" class="card-head">
              <h2>For Residents</h2>
            </a>
            <p class="card-para">
              Discover the benefits of full society connectivity.
            </p>
            <a href="" class="card-foot">
              Know More{" "}
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card1">
            {" "}
            <a href="">
              <img src={image1} alt="Avatar" class="card-img" />
            </a>
          </div>
          <div class="container1">
            <a href="" class="card-head">
              <h2>For Developers</h2>
            </a>
            <p class="card-para">All your properties, now on one dashboard.</p>
            <a href="" class="card-foot">
              Know More{" "}
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card1">
            <a href="">
              <img src={forbrands} alt="Avatar" class="card-img" />
            </a>
          </div>
          <div class="container1">
            <a href="" class="card-head">
              <h2>For Brands</h2>
            </a>
            <p class="card-para">
              Leverage the community effect for your brand.
            </p>
            <a href="" class="card-foot">
              Know More{" "}
            </a>
          </div>
        </div>
      </div>
      <div class="iframe">
        <div class="iframe-conatiner">
          <div>
            <iframe
              src="https://www.youtube.com/embed/Icva4M6xiAI"
              class="you-tube"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middlecard;
