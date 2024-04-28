import react from "react";
import "./body.css";
// import bodyimage from "./Images/Artboard-1-2.webp";
import web from "./Images/whatsapp_64.webp";

function Body() {
  return (
   <div class="Body">
     <div class="Body-content">
      <div class="bod1">
        <h1 class="main-para">Experience community living at its best</h1>
        <p>Building secure, connected, thriving societies</p>
      </div>
      <div class="con">
        <div class="web-connect">
          <button class="connect">
            <div>
              <img src={web} alt="Not Found" class="web" />
            </div>
            <h3>Connect With Us</h3>
          </button>
        </div>
      </div>
    </div>
   
      {/*<div class="middle">
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
              <img
                src="../Images/For-Society-1.webp"
                alt="Avatar"
                style="width:100% "
              />
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
              <img
                src="../Images/For-Residents-1.jpg"
                alt="Avatar"
                style="width:100%"
              />
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
              <img
                src="../Images/images1.webp"
                alt="Avatar"
                style="width:100%"
              />
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
              <img
                src="../Images/For-Brands.webp"
                alt="Avatar"
                style="width:100%"
              />
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
          <img src="../Images/mobile.gif" alt="" />
        </div>
      </div>
      <div class="next">
        <div class="ph">
          <img src="../Images/WhatsApp-Image-2023-09-05-at-2.webp" alt="" />
        </div>
      </div>

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
              <img src="../Images/brand-clubmahindra.webp" alt="Avatar" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src="../Images/brand-swiggy.webp" alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src="../Images/Amazon.webp" alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src="../Images/Honda.webp" alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src="../Images/goodrej-logo.webp" alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src="../Images/TATA_1mg.webp" alt="Avatar" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src="../Images/hul.webp" alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src="../Images/lufthansa-.webp" alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src="../Images/samsung.webp" alt="" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src="../Images/Malabar.webp" alt="" />
            </div>
          </a>
        </div>
      </div>

      <div class="logos-last">
        <div class="logo-card-container-last">
          <a href="">
            <div class="logo-card-container">
              <img src="../Images/Loreal.webp" alt="Avatar" />
            </div>
          </a>
          <a href="">
            <div class="logo-card-container">
              <img src="../Images/byjus-logo.webp" alt="" />
            </div>
          </a>

          <a href="" class="last-tag">
            <div class="logo-card-container">
              <p class="learn-more">Learn More</p> →
            </div>
          </a>
        </div>
      </div> */}
   </div>
  );
}

export default Body;
