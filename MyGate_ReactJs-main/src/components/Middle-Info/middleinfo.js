import React from "react";
import "./middleinfo.css";
import mobile from "./Images/mobile.gif";
import whatsappimage from"./Images/WhatsApp-Image-2023-09-05-at-2.webp";

function Middleinfo() {
  return (
    <div>
      <div>
        <div class="middle">
          <h2 class="mid1">A comprehensive society solution!</h2>
          <p class="mid2">
            We're always innovating so you always have the best
          </p>
        </div>
      </div>
      <div class="type">
        <div class="list-container">
          <details class="detais-tag">
            <summary>
              <div class="but">
                <div>
                  <button href="" class="acc">
                    Better Security
                  </button>
                </div>
                <div class="part-2">
                  <i id="arrow" class="fa-solid fa-angle-down"></i>
                </div>
              </div>
            </summary>
            <p class="details-para">
              The original visitor management solution, tested over 1 billion
              times every year.
            </p>
            <p class="details-a">
              <a href="">know more</a>
            </p>
          </details>
          <hr />
          <details class="details-tag">
            <summary>
              <div class="but">
                <div>
                  <button href="">Community Connect</button>
                </div>
                <div class="part-3">
                  <i id="arrow" class="fa-solid fa-angle-down"></i>
                </div>
              </div>
            </summary>
            <p class="details-para">
              Get to know your neighbours, discover society events, find a maid
              or gym instructor & so much more.
            </p>
            <p class="details-a">
              <a href="">know more</a>
            </p>
          </details>
          <hr />
          <details class="deatils-tag">
            <summary>
              <div class="but">
                <div>
                  <button href="">Expert Home Services</button>
                </div>
                <div class="part-4">
                  <i id="arrow" class="fa-solid fa-angle-down"></i>
                </div>
              </div>
            </summary>
            <p class="details-para">
              The most reliable professionals from Urban Company are only a
              click away on the MyGate app.
            </p>
            <p class="details-a">
              <a href="">know more</a>
            </p>
          </details>
          <hr />
          <details class="deatils-tag">
            <summary>
              <div class="but">
                <div>
                  <button href="">Smart Payments</button>
                </div>
                <div class="part-21">
                  <i id="arrow" class="fa-solid fa-angle-down"></i>
                </div>
              </div>
            </summary>
            <p class="details-para">
              Save by paying society dues, month's rent and even utility bills
              on the app with our amazing offers.
            </p>
            <p class="details-a">
              <a href="">know more</a>
            </p>
          </details>
          <hr />
          <details class="details-tag">
            <summary>
              <div class="but">
                <div>
                  <button href="">Neighbourhood Discovery</button>
                </div>
                <div class="part-5">
                  <i id="arrow" class="fa-solid fa-angle-down"></i>
                </div>
              </div>
            </summary>
            <p class="details-para">
              Find out everything that's going on around you, from the best home
              chef to the local football tournament.
            </p>
            <p class="details-a">
              <a href="">know more</a>
            </p>
          </details>
          <hr />
        </div>
        <div class="video">
          <img src={mobile} alt="" />
        </div>
      </div>
      <div class="next">
        <div class="ph">
          <img src={whatsappimage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Middleinfo;
