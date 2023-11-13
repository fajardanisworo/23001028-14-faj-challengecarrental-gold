import "../CTABanner/style.css";
import React from "react";

function CTABanner() {
  return (
    <div class="container banner py-5">
      <div
        class="container text-center py-5 d-flex justify-content-center align-items-center flex-column bg5"
      >
        <h1 class="fw-bold sewa">Sewa Mobil di (Lokasimu) Sekarang</h1>
        <p class="w-50 mobil">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button class="btn btn-success">Mulai Sewa Mobil</button>
      </div>
    </div>
  );
}

export default CTABanner;




