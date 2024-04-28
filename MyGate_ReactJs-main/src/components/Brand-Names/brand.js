import React from "react";
import "./brand.css";
import clubmahindra from "./Images/brand-clubmahindra.webp";
import siwggy from "./Images/brand-swiggy.webp";
import amazon from "./Images/Amazon.webp";
import honda from "./Images/Honda.webp";
import goodrej from "./Images/goodrej-logo.webp";
import tata from "./Images/TATA_1mg.webp";
import hul from "./Images/hul.webp";
import lufthansa from "./Images/lufthansa-.webp";
import samsung from "./Images/samsung.webp";
import malabhar from "./Images/Malabar.webp";
import loreal from "./Images/Loreal.webp";
import byjus from "./Images/byjus-logo.webp";
import jogesh from "./Images/Jogesh-1.webp";
import venkatesh from "./Images/Venkatesh-G-V.webp";
import rabhiya from "./Images/Rabiya-Aftab-1.webp";
import slide1 from "./Images/news_slide.webp";
import slide2 from "./Images/news_slide2.webp";
import slide3 from "./Images/news_slide3.webp";
import award from "./Images/Outlook-Award-Comms_Mygate_website.webp";
import security from "./Images/Security-Software-Company-of-the-Year.webp";

function Brand() {
  return (
    <div>
      <div class="one">
        <div class="middle">
          <h2 class="mid1">Join the Club!</h2>
          <p class="mid2">
            The nation's top brands are bringing rich experiences to our gated
            communities - on the app and in the society, too.
          </p>
        </div>
      </div>
      <div class="logos">
        <div class="logo-card-box">
          <a href="">
            <div class="logo-card-container">
              <img src={clubmahindra} alt="Avatar" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src={siwggy} alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src={amazon} alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src={honda}alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src={goodrej} alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src={tata} alt="Avatar" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src={hul} alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src={lufthansa} alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src={samsung} alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src={malabhar} alt="" />
            </div>
          </a>
        </div>
      </div>

      <div class="logos-last">
        <div class="logo-card-container-last">
          <a href="">
            <div class="logo-card-container">
              <img src={loreal} alt="Avatar" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src={byjus} alt="" />
            </div>
          </a>

          <a href="" class="last-tag">
            <div class="logo-card-container">
              <p class="learn-more">Learn More</p> →
            </div>
          </a>
        </div>
      </div>
      <div class="after">
        <h2 class="after-para">What our customer say</h2>
      </div>
      <div class="info">
        <div class="card-info" align="center">
          <img src={jogesh} alt="Avatar" class="found-img" />
          <div class="shadow">
            <div class="container5">
              <h4 class="found-name">
                <b>Jogesh</b>
              </h4>
              <p>
                <span>Treasurer, Narayan Enclave</span>
              </p>
            </div>
            <div class="data">
              An all-in-one solution for societies. Our residents feel more
              secure with children playing without supervision and the committee
              also finds it easier to manage finances and communication.
            </div>
          </div>
        </div>
        <div class="card-info" align="center">
          <img
            src={venkatesh}
            alt="Avatar"
            class="found-img"
          />
          <div class="shadow">
            <div class="container5">
              <h4 class="found-name">
                <b>Venkatesh G V</b>
              </h4>
              <p>
                <span>President, Novus Florence</span>
              </p>
            </div>
            <div class="data">
              With MyGate, we were able to streamline our invoice generation,
              receipt generation and other accounting processes. Our auditor is
              also pleased as it integrates with softwares like Tally.
            </div>
          </div>
        </div>
        <div class="card-info" align="center">
          <img
            src={rabhiya}
            alt="Avatar"
            class="found-img"
          />
          <div class="shadow">
            <div class="container5">
              <h4 class="found-name">
                <b>Rabiya Aftab</b>
              </h4>
              <p>
                <span>President at Appaswamy Cityside</span>
              </p>
            </div>
            <div class="data">
              The connectivity with the guards was a big issue earlier. Thanks
              to MyGate, we are now in a situation where we get to know about
              each and every visitor. Their staff gave us a lot of handholding,
              particularly for onboarding security personnel.
            </div>
          </div>
        </div>
      </div>
      <div class="per">
        <div class="slide">
          <img src={slide1} alt="" />
        </div>
        <div class="slide">
          <img src={slide2} alt="" />
        </div>
        <div class="slide">
          <img src={slide3} alt="" />
        </div>
        <div class="slide">
          <img src={award} alt="" />
        </div>
        <div class="slide">
          <img
            src={security}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Brand;
