import Navbar from "../../component/Navbar";
import Head from "..//../component/Head";
import FooterBawah from "../../component/FooterBawah";
import "./style.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchCar = () => {
  const [car, setCar] = useState([]);
  const [namaCatagory, setNamaCatagory] = useState("");
  const [catagory, setCatagory] = useState("");

  const [status, setStatus] = useState(false);
  const [searchCar, setSearchCar] = useState(false);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  useEffect(() => {
    handleGetuser(namaCatagory, catagory, status, priceMin, priceMax);
  }, []);

  const handleGetuser = (
    inputNamaCatagory,
    inputCatagory,
    inputStatus,
    inputPriceMin,
    inputPriceMax
  ) => {
    axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?page=1&pageSize=10&name=${inputNamaCatagory}&category=${inputCatagory}&isRented=${inputStatus}&minPrice=${inputPriceMin}&maxPrice=${inputPriceMax}`
      )
      .then((res) => {
        console.log(res);
        setCar(res.data.cars);
      })
      .catch((Error) => console.log(Error));
  };

  const handleNamaCatagory = (e) => {
    setNamaCatagory(e.target.value);
  };
  const handleCatagory = (e) => {
    setCatagory(e.target.value);
  };

  const handleHarga = (e) => {
    const value = e.target.value;
    if (value === "0-399999") {
      setPriceMin(0);
      setPriceMax(399999);
    } else if (value === "400000-600000") {
      setPriceMin(400000);
      setPriceMax(600000);
    } else {
      setPriceMin(0);
      setPriceMax(600000);
    }
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleSearchCar = () => {
    setSearchCar(true);
    handleGetuser(namaCatagory, catagory, status, priceMin, priceMax);
  };

  const handleRiset = () => {
    setSearchCar(false);
    handleGetuser("", "", false, "", "");
    setCatagory("");
    setNamaCatagory("");
    setPriceMax(600000);
    setPriceMin("");
    setStatus(false);
  };

  return (
    <div>
      <Navbar />
      <Head />

      <div className="container searchresult">
        <div className="row searcingrow">
          <div className="col resulthead">
            <label className="resultfname">Nama Mobil</label>
            <input
              onChange={handleNamaCatagory}
              value={namaCatagory}
              type="text"
              id="fname"
              name="firstname"
              placeholder="Ketik nama/tipe mobil"
            />
          </div>

          <div className="col">
            <label className="resultfname">Katagori</label>
            <select onChange={handleCatagory} value={catagory} name="" id="">
              <option value="">Masukan Kapasitas Mobil</option>
              <option value="small">2 - 4 orang</option>
              <option value="medium">4 - 6 orang</option>
              <option value="large">6 - 8 orang</option>
            </select>
          </div>

          <div className="col">
            <label className="resultfname">Harga</label>
            <select
              onChange={handleHarga}
              value={`${priceMin}-${priceMax}`}
              name=""
              id=""
            >
              <option value="">Masukan Harga Sewa per Hari</option>
              <option value="0-399999">&lt; Rp. 400.000</option>
              <option value="400000-600000">Rp. 400.000 -Rp. 600.000</option>
            </select>
          </div>
          <div className="col d-flex flex-column">
            <label className="resultfname">Status</label>
            <select onChange={handleStatus} value={status} name="" id="">
              <option value="false">Sewa</option>
              <option value="true">tidak disewa</option>
            </select>
          </div>

          <div className="col ">
            <button
              onClick={searchCar ? handleRiset : handleSearchCar}
              className="buttomedit2"
            >
              {searchCar ? "reset" : "cari mobl"}
            </button>
          </div>
        </div>
      </div>

      <div className="container carcar">
        <div className="row d-flex mt-5 mobill">
          <div className="container bgcardbg">
            {car.map((carss) => (
              <div className="col">
                <div class="card-carr">
                  <img src={carss.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title-cd">{carss.name}</h5>
                    <p class="card-text"> {carss.price}/ hari</p>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to={`/SearchDetail/${carss.id}`}>
                      <button className="searcar">Pilih Mobill</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterBawah />
    </div>
  );
};

export default SearchCar;
