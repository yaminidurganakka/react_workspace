import React from "react";
import "./header.css";
import "../styles/fontawesome-free-6.5.1-web/css/all.css";
import "../styles/fontawesome.min.css";
import navilogoimg1 from "./Images/MyGate-Logo-Horizontal-2-e1700723514639.webp";
import residents from "./Images/For-Residents-1.webp";
import realstate from "./Images/real-estate.webp";
import solutions from "./Images/Solution_ICONS1.webp";
import apartments from "./Images/Apartments-Accounting.webp";
import adplatform from "./Images/Ad-Platform.webp";
import industries from "./Images/industries.webp";
import adtypes from "./Images/Ad-Types.webp";
import aboutus from "./Images/About-Us.png";
import career from "./Images/Careers-.webp";
import dataprivacy from "./Images/Data-Privacy.png";
import blog from "./Images/Blog.png";

// import Apartmentsimg from ;

function Header() {
  return (
    <div class="new">
        <div class="container">
            <div class="head">
                <div class="fir">
                    <img src={navilogoimg1} alt="Notfound" class="img2"/>
                </div>
                <div class="sec">
                    <div class="dropdown">
                        <a class="dropbtn" href="">Society Soultions <i class="fa-solid fa-angle-down"></i></a>
                        <div class="dropdown-content">
                            <a href="" class="a"><img src={residents} alt="NotFound"
                                    class="imgd"/>Community
                                Management</a>
                            <a href="" class="a"><img src={realstate} alt="NotFound"
                                    class="imgd"/>Apartment
                                Accounting</a>
                            <a href="" class="a"><img src={solutions} alt="NotFound"
                                    class="imgd"/>Benefits
                                for Residents</a>
                            <a href="" class="a"><img src={apartments} alt="NotFound"
                                    class="imgd"/>All
                                MyGate Features</a>
                        </div>

                    </div>
                    <div class="dropdown1">
                        <a class="dropbtn1" href="">Brand Soultions <i class="fa-solid fa-angle-down"></i></a>
                        <div class="dropdown-content1">
                            <a href="#" class="a"><img src={adplatform} alt="" class="imgd"/>Ad
                                Platform</a>
                            <a href="#" class="a"><img src={industries} alt=""
                                    class="imgd"/>Industries</a>
                            <a href="#" class="a"><img src={adtypes} alt="" class="imgd"/>Ad Types</a>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <a class="dropbtn2" href="">About Us <i class="fa-solid fa-angle-down"></i></a>
                        <div class="dropdown-content2">
                            <a href="#" class="a"><img src={aboutus} alt="" class="imgd"/>Our Story</a>
                            <a href="#" class="a"><img src={career} alt="" class="imgd"/>Careers</a>
                            <a href="#" class="a"><img src={dataprivacy} alt="" class="imgd"/>Data
                                Privacy</a>
                            <a href="" class="a"><img src={blog} alt="" class="imgd"/>Blog</a>
                        </div>
                    </div>
                    <a>login</a>
                    <div class="demo">
                        <button class="book">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
