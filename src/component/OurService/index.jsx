import "./style.css";
import React from "react";
import Group53 from "../../assets/img/Group53.png";
import img_service from "../../assets/img/img_service.png";

let items = [
  {
    ourService: "Sewa Mobil Dengan Supir di Bali 12 Jam",
  },
  {
    ourService: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  },
  {
    ourService: "Sewa Mobil Jangka Panjang Bulanan",
  },
  {
    ourService: "Gratis Antar - Jemput Mobil di Bandara",
  },
  {
    ourService: "Layanan Airport Transfer / Drop In Out",
  },
];
function OurService() {
  return (
    <div class="container bgbg">
      <div class="container">
        <div class="row">
          <div className="col-sm-12 col-lg-6 ">
            <img class="img-fluid" src={img_service} alt="girl-image" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <div class="content-car-2">
              <h1 className="headbest">Best Car Rental for any kind of trip in (Lokasimu)!</h1>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              {items.map((data, id) => (
                <p key={id}>
                  <span>
                    <img src={Group53} alt="" />
                  </span>
                  {data.ourService}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;
