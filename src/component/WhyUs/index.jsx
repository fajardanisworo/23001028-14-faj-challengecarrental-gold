import "./style.css";
import React from "react";
import icon_a from "../../assets/img/icon_a.png";
import icon_c from "../../assets/img/icon_c.png";
import icon_b from "../../assets/img/icon_b.png";
import icon_d from "../../assets/img/icon_d.png";
import WhyUscard from "../WhyUscard";

let cards = [
  {
    img: icon_a,
    title: "Mobil Lengkap",
    deskripsi:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    img: icon_c,
    title: "Harga Murah",
    deskripsi:
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    img: icon_b,
    title: "Layanan 24 Jam",
    deskripsi:
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    img: icon_d,
    title: "Sopir Profesional",
    deskripsi:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];
console.log(cards);
function WhyUs() {
  return (
    <div class="why-us pb-5" id="why-us-us">
      <div class="container pb-5 whyy">
        <h3>Why Us?</h3>
        <h6>Mengapa harus pilih Binar Car Rental?</h6>
        <div class="row">
          <div id="cardwp"class="col my-2 ">
            <div class="container cardwrapper">
              <div className="row gap-3 d-flex">
                {cards.map((card, id) => (
                  <WhyUscard
                    key={id}
                    img={card.img}
                    title={card.title}
                    deskripsi={card.deskripsi}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
