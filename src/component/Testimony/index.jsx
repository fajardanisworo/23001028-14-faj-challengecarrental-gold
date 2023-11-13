import "../Testimony/style.css";
import React from "react";
import img_photo from "../../assets/img/img_photo.png";
import img_photo2 from "../../assets/img/img_photo2.png";
import Leftbutton from "../../assets/img/Leftbutton.png";
import Rightbutton from "../../assets/img/Rightbutton.png";
import Rate from "../../assets/img/Rate.png";

function Testimony() {
  return (
    <div class="testimonial " id="testimonial">
      <div class="text-center pt-3 fw-bold testt">
        <h3>Testimonial</h3>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="container">
          <div class="carousel-inner">
            <div class="carousel-item active py-3 p-md-4">
              <div class="card p-5">
                <div class="card-body p-0 py-md-5">
                  <div class="row">
                    <div class="col-md-4 text-center text-md-end">
                      <img src={img_photo2} alt="" class="cardraf" />
                    </div>
                    <div class="col-md-8 text-center text-md-start">
                      <div class="d-flex flex-row justify-content-center justify-content-md-start">
                        <img className="startimg" src={Rate} alt="" />
                        <img className="startimg" src={Rate} alt="" />
                        <img className="startimg" src={Rate} alt="" />
                        <img className="startimg" src={Rate} alt="" />
                      </div>
                      <p class="pe-md-5 cardpe">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p class="fw-bold">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item py-3 p-md-4">
              <div class="card p-5">
                <div class="card-body p-0 py-md-5">
                  <div class="row">
                    <div class="col-md-4 text-center text-md-end">
                      <img src={img_photo} alt="" class="caraf" />
                    </div>
                    <div class="col-md-8 text-center text-md-start">
                      <div class="d-flex flex-row justify-content-center justify-content-md-start my-3 start">
                        <img src={Rate} alt="" />
                        <img src={Rate} alt="" />
                        <img src={Rate} alt="" />
                        <img src={Rate} alt="" />
                      </div>
                      <p class="pe-md-5 cardpe">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p class="fw-bold">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item py-3 p-md-4">
              <div class="card p-5">
                <div class="card-body p-0 py-md-5">
                  <div class="row">
                    <div class="col-md-4 text-center text-md-end">
                      <img src={img_photo} alt="" class="caraf" />
                    </div>
                    <div class="col-md-8 text-center text-md-start">
                      <div class="d-flex flex-row justify-content-center justify-content-md-start my-3">
                        <img src={Rate} alt="" />
                        <img src={Rate} alt="" />
                        <img src={Rate} alt="" />
                        <img src={Rate} alt="" />
                      </div>
                      <p class="pe-md-5 cardpe">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod”
                      </p>
                      <p class="fw-bold">John Dee 32, Bromo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mb-4">
          <button
            class="carousel-control-prev position-relative d-flex justify-content-end mx-4"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <img src={Leftbutton} alt="" />

            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next position-relative d-flex justify-content-start mx-4"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <img src={Rightbutton} alt="" />
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
