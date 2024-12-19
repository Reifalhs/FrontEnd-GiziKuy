import { useState } from "react";
import React from "react";
import axios from "axios";

const Prediksi = () => {
  const [data, setData] = useState({
    umur: "",
    jenis_kelamin: "",
    tinggi_badan: "",
  });

  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang dikirim ke Flask:", data); // Tambahkan log untuk debugging
    axios
      .post("/api/predict", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Respons dari Flask:", response.data); // Debug respons dari server
        setPrediction(response.data.prediction);
      })
      .catch((error) => {
        console.error(
          "Error saat mengirim data ke Flask:",
          error.response?.data || error.message
        );
      });
  };

  return (
    <div className="h-screen px-4 flex sm:w-3/5 m-auto" id="prediksi">
      <form className="mx-auto w-full my-auto bg-white" onSubmit={handleSubmit}>
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl sm:text-4xl font-bold whitespace-nowrap text-[#FF4F5B]">
            GiziKuy
          </span>
        </a>
        <div className="mb-5">
          <label
            htmlFor="umur"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Umur(Bulan)
          </label>
          <input
            type="text"
            id="umur"
            value={data.umur}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF4F5B] focus:border-[#FF4F5B] block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="jenis_kelamin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Jenis kelamin
          </label>
          <select
            id="jenis_kelamin"
            value={data.jenis_kelamin}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF4F5B] focus:border-[#FF4F5B] block w-full p-2.5"
          >
            <option value="">Pilih jenis kelamin</option>
            <option value="0">Laki-laki</option>
            <option value="1">Perempuan</option>
          </select>
        </div>
        <div className="mb-3">
          <label
            htmlFor="tinggi_badan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tinggi Badan(cm)
          </label>
          <input
            type="text"
            id="tinggi_badan"
            value={data.tinggi_badan}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF4F5B] focus:border-[#FF4F5B] block w-full p-2.5 "
            required
          />
        </div>
        <button
          type="submit"
          className="mb-5 text-white bg-[#FF4F5B] hover:bg-[#d91c29] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Prediksi
        </button>
        <div className="flex items-start">
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Prediksi Status Gizi :{" "}
            <p className=" text-[#FF4F5B] hover:underline inline-block">
              {prediction}
            </p>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Prediksi;
