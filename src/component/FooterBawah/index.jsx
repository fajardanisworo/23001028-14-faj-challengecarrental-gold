import "../FooterBawah/style.css";
import React from "react";

import icon_instagram from "../../assets/img/icon_instagram.png";
import icon_twitter from "../../assets/img/icon_twitter.png";
import icon_mail from "../../assets/img/icon_mail.png";
import icon_twitch from "../../assets/img/icon_twitch.png";
import icon_facebook from "../../assets/img/icon_facebook.png";

import logo from "../../assets/img/logo.jpg";

function FooterBawah() {
  return (
    <div class="footer">
      <div class="container pb-5">
        <div class="row ">
          <div id="foooterbawah"class="col-md-6 col-lg-3 col-sm-12 fw-bold">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div class="col-md-6 col-lg-2 col-sm-12  d-flex flex-column  bgcolor">
            <a href="#our-services" class="text-decoration-none mb-3 ">
              Our services
            </a>
            <a href="#" class="text-decoration-none mb-3">
              Why Us
            </a>
            <a href="#" class="text-decoration-none mb-3">
              Testimonial
            </a>
            <a href="#" class="text-decoration-none mb-3">
              FAQ
            </a>
          </div>
          <div class="col-md-6 col-lg-4 col-sm-12 fw-bold">
            <p>Connect with us</p>
            <div class="col fw-boldd-flex mb-3">
              <img className="p-2 icon-sosmed " src={icon_facebook} alt="" />

              <img className="p-2 icon-sosmed" src={icon_instagram} alt="" />
              <img className="p-2 icon-sosmed" src={icon_twitter} alt="" />
              <img className="p-2 icon-sosmed" src={icon_mail} alt="" />

              <img className="p-2 icon-sosmed" src={icon_twitch} alt="" />
            </div>
          </div>
          <div class="col-md-6 col-lg-3 col-sm-12 fw-bold p-2 fw-bold">
            <p>Copyright Binar &copy; 2022</p>
            <img className="Facebook" src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBawah;
