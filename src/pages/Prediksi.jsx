import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const Prediksi = () => {
  const [data, setData] = useState({
    Umur: "",
    "Jenis Kelamin": "",
    "Tinggi Badan": "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8080/api/data", data)
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error submitting the data!", error);
      });
  };

  return (
    <div className="h-screen px-4 flex" id="prediksi">
      <form className="mx-auto w-full my-auto bg-white" onSubmit={handleSubmit}>
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl sm:text-4xl font-bold whitespace-nowrap text-[#FF4F5B]">
            GiziKuy
          </span>
        </a>
        <div className="mb-5">
          <label
            htmlFor="Umur"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Umur(Bulan)
          </label>
          <input
            type="text"
            id="Umur"
            value={data.Umur}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF4F5B] focus:border-[#FF4F5B] block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Jenis Kelamin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Jenis kelamin
          </label>
          <select
            id="Jenis Kelamin"
            value={data["Jenis Kelamin"]}
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
            htmlFor="Tinggi Badan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tinggi Badan(cm)
          </label>
          <input
            type="text"
            id="Tinggi Badan"
            value={data["Tinggi Badan"]}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF4F5B] focus:border-[#FF4F5B] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
              Stunting
            </p>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Prediksi;
