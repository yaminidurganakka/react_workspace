import React from "react";
import "./footer.css";
import twitter from "./Images/twitter.webp";
import facebook from "./Images/facebook.webp";
import instagram from "./Images/instagram.webp";
import linkedin from "./Images/linkedin-1.webp";
import googleplay from "./Images/googleplay.webp";
import appstore from "./Images/appstore.webp";
import privacy from "./Images/Privacy-08-1.webp";
import mask from "./Images/Mask-Group.webp";

function Footer() {
  return (
    <div>
      <div class="book-a-demo-name" align="center">
        <h1>Book a demo</h1>
      </div>
      <div class="book-demo-info">
        <div class="book-a-demo-info">
            <div class="book-a-demo-info1"><input type="text" placeholder="Name"/></div>
            <div class="book-a-demo-info1"><input type="text" placeholder="Moblie"/></div>
        </div>

        <div class="book-a-demo-info">
            <div class="book-a-demo-info1"><input type="text" placeholder="Email ID"/></div>
            <div class="book-a-demo-info1"><input type="text" placeholder="Society Name"/></div>
        </div>

        <div class="book-a-demo-info">
            <div class="book-a-demo-info1">
                <select name="" id="" class="select">
                    <option value=""></option>
                    <option value="" class="opt">Committe Member</option>
                    <option value="">Resident</option>
                    <option value="">Facility Manager</option>
                    <option value="">Security Agency</option>
                    <option value="">Other</option>
                </select>
            </div>
            <div class="book-a-demo-info1"><input type="text" placeholder="City"/></div>
        </div>
        <div class="book-a-demo-info">
            <div class="submit-info">
                <input type="submit"/>
            </div>
        </div>
    </div>
    <div class="content-section">
        <h2>MyGate: India’s best housing society management app</h2>
        <p>MyGate, the No. 1 community management app, ensures the safety and convenience of gated societies. The
            software for gated society offers numerous innovative features to help simplify daily chores and improve
            security standards around gated communities through its Security, ERP & Accounting Management modules.</p>
        <p>The app was built as a comprehensive apartment management system, keeping in mind every single stakeholder of
            a gated community: security guards, residents, management committee, facility managers and vendors.</p>
    </div>
    <div class="content-section">
        <h2>MyGate Services</h2>
        <p><strong>Apartment security management:</strong><br/>
            MyGate’s security management system simplifies communication between residents and the main gate. It enables
            residents to notify guards that they are expecting a visitor or delivery and guards to seek the permission
            of a resident when someone comes unannounced. This seemingly simple connection can bring powerful change to
            any community. Benefits as a security management app: Convenient verification of all visitors, End-to-end
            management of all daily staff and Smart workflows to manage deliveries. <br/><br/><strong>Community
                ERP:</strong><br/>
            All management committee members get access to a configurable dashboard from where accounts, complaints,
            communications, staff attendance and amenities can be managed. Think of it as a control center for your
            society that’s accessible from anywhere. Benefits as a community management app: Manage accounts & payments
            on a single dashboard, get real-time updates on support tickets and keep the community on the same page via
            MyGate ERP. <br/><br/><strong>Home Services:</strong><br/>
            Bringing convenience to your homes. MyGate home services provide you to avail day-to-day services like pest
            control, bathroom cleaning, airport taxi, deep cleaning, appliance repair, laundry services and many more.
        </p>
    </div>
    <div class="content-section">
        <h2>Data privacy & protection</h2>
        <p>MyGate is a safe to use app and has its data security policies in place. This housing society management
            system gives users complete control over their personal information. MyGate has implemented GDPR guidelines,
            is compliant with ISO 27001, and ensures completely transparent and legally compliant information collection
            at all levels. The society maintenance app ensures that information collection is purpose oriented, clearly
            defined and maintained only for as long as it is necessary to fulfil the purpose.</p>
    </div>
    <div class="last-info">
        <div class="last-info1">
            <div class="last-info-1">
                <h2 class="head-info">Soultions</h2>
                <ul class="list-style">
                    <li><a href="">For Societies</a></li>
                    <li><a href="">For Residents</a></li>
                    <li><a href="">For Brands</a></li>
                </ul>
            </div>
            <div class="last-info-1">
                <h2 class="head-info">Company</h2>
                <ul class="list-style">
                    <li><a href="">Our Story</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Contact us</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">Data Privacy</a></li>
                    <li><a href="">Responsible Disclosure</a></li>
                    <li><a href="">Terms And Conditions</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="last-info-1">
                <h2 class="head-info">Contact</h2>
                <ul class="list-style">
                    <li>

                    </li>
                    <li>
                        <p>MyGate (Vivish Technologies Pvt Ltd),</p>
                    </li>
                    <li>
                        <p>Site no. 12&13, 17th Cross, Sector-7,</p>
                    </li>
                    <li>
                        <p>HSR Layout, Bengaluru-560102</p>
                    </li>
                    <li>
                        <p>Bengaluru KA 560102 IN</p>
                    </li>
                </ul>
                <ul class="list-style">
                    <li>
                        <p>Call: 1800 123 2084</p>
                        <p>Mail: contact@mygate.com</p>
                    </li>
                </ul>
                <ul class="list-style">

                    <div class="social-media">
                        <div class="social"><a href=""><img src={twitter} alt=""/></a></div>
                        <div class="social"><a href=""><img src={facebook} alt=""/></a></div>
                        <div class="social"><a href=""><img src={instagram} alt=""/></a></div>
                        <div class="social"><a href=""><img src={linkedin} alt=""/></a></div>
                    </div>
                </ul>
            </div>
            <div class="last-info-1">
                <h2 class="head-info">Download our app</h2>
                <ul class="list-style">
                    <div class="down-app">
                        <div class="down-img"><a href=""><img src={googleplay} alt=""/></a></div>
                        <div class="down-img"><a href=""><img src={appstore} alt=""/></a></div>
                    </div>
                </ul>
                <h2 class="head-info">Privacy Certifications</h2>
                <ul class="list-style">
                    <div class="down-app">
                        <div class="down-img"><a href=""><img src={privacy} alt=""/></a></div>
                        <div class="down-img"><a href=""><img src={mask} alt=""/></a></div>
                    </div>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright 2024 MyGate. All rights reserved. Click to view <a href="">Privacy Policy</a> </p>
        </div>
    </div>

    </div>
  );
}

export default Footer;
