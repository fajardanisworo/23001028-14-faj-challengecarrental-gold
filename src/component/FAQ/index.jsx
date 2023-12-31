import "../FAQ/style.css";
import React from "react";

function FAQ() {
  return (
    <div class="faq py-5" id="faqq">
      <div class="container py-5">
        <div class="row fw-bold">
          <div class="col-md-12  col-lg-6 col-sm-12  ">
            <h3>Frequently Asked Question</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div class="col-md-12  col-lg-6 col-sm-12">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div id="ft"class="card mb-3">
                <div
                  class="accordion-header accordion-button collapsed cursor-pointer rounded"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseButuh"
                  aria-expanded="false"
                  aria-controls="collapseButuh"
                >
                  <p>Apa saja syarat yang dibutuhkan?</p>
                </div>
                <div
                  id="collapseButuh"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>
                      Lorem ipsum dolor sit arly consectetur adipisicing elit.
                      Voluptatibus eligendi deleniti in tenetur distinctio
                      repellendus ut quo dolorem dicta veniam!
                    </p>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div
                  class="accordion-header accordion-button collapsed cursor-pointer rounded"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseKunci"
                  aria-expanded="false"
                  aria-controls="collapseKunci"
                >
                  <p>Berapa hari minimal sewa mobil lepas kunci?</p>
                </div>
                <div
                  id="collapseKunci"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus eligendi deleniti in tenetur distinctio
                      repellendus ut quo dolorem dicta veniam!
                    </p>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div
                  class="accordion-header accordion-button collapsed cursor-pointer rounded"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSewa"
                  aria-expanded="false"
                  aria-controls="collapseSewa"
                >
                  <p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p>
                </div>
                <div
                  id="collapseSewa"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus eligendi deleniti in tenetur distinctio
                      repellendus ut quo dolorem dicta veniam!
                    </p>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div
                  class="accordion-header accordion-button collapsed cursor-pointer rounded"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseAntar"
                  aria-expanded="false"
                  aria-controls="collapseAntar"
                >
                  <p>Apakah Ada biaya antar-jemput?</p>
                </div>
                <div
                  id="collapseAntar"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus eligendi deleniti in tenetur distinctio
                      repellendus ut quo dolorem dicta veniam!
                    </p>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div
                  class="accordion-header accordion-button collapsed cursor-pointer rounded"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCelaka"
                  aria-expanded="false"
                  aria-controls="collapseCelaka"
                >
                  <p>Bagaimana jika terjadi kecelakaan?</p>
                </div>
                <div
                  id="collapseCelaka"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus eligendi deleniti in tenetur distinctio
                      repellendus ut quo dolorem dicta veniam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
