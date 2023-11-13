import Navbar from "../../component/Navbar";
import Head from "..//../component/Head";
import FooterBawah from "../../component/FooterBawah";
import "./style.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import fi_users from "./../../assets/img/fi_users.png";
import { useParams } from "react-router-dom";

const SearchDetail = () => {
  const [car, setCar] = useState({});
  const param = useParams();

  useEffect(() => {
    handleGetuser();
  }, []);

  const handleGetuser = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
      .then((res) => {
        console.log(res);
        setCar(res.data);
      })
      .catch((Error) => console.log(Error));
  };

  return (
    <div >
      <Navbar />
      <Head />
      <div className="container aboutpkt">
        <div className="row headerrowbg">
          <div className="col-8 detailleft ">
            <p className="titlep">Tentang Paket</p>
            <p>Include</p>
            <ul>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>

            <p>Include</p>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
            </ul>

            <p>Refund, Reschedule, Overtime</p>
            <ul>
              <li>
                Tidak termasuk biaya makan sopir Rp 75.000/hari Jika overtime
                lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam Tidak
                termasuk akomodasi penginapan Tidak termasuk biaya makan sopir
                Rp 75.000/hari Jika overtime lebih dari 12 jam akan ada tambahan
                biaya Rp 20.000/jam Tidak termasuk akomodasi penginapan Tidak
                termasuk biaya makan sopir Rp 75.000/hari
              </li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>
                Tidak termasuk biaya makan sopir Rp 75.000/hari Jika overtime
                lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam Tidak
                termasuk akomodasi penginapan Tidak termasuk biaya makan sopir
                Rp 75.000/hari Jika overtime lebih dari 12 jam akan ada tambahan
                biaya Rp 20.000/jam Tidak termasuk akomodasi penginapan Tidak
                termasuk biaya makan sopir Rp 75.000/hari
              </li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>

          <div className="col detailright">
            <div className="imgdetail">
            <img className="img-fluid detailrightcar" src={car.image} alt="" />
            </div>
            
            <p >Innova</p>
            <p className="detailinov">
              <span>
                <img src={fi_users} alt="" />
              </span>
               6 - 8 orang
            </p>
            <div className="detailtotal">
            <p>Total</p>
            <p>Rp 500.000</p>
            </div>
            
          </div>
        </div>
      </div>

      <FooterBawah />
    </div>
  );
};

export default SearchDetail;
