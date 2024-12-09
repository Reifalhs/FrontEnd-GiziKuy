import React from 'react'
import Hero from '../assets/hero1.png'

const Home = () => {
  return (
    <div id='home' className='home h-screen py-5 bg-[#FF4F5B] flex flex-col sm:flex-row sm:px-24'>
        <div className='hero sm:order-2 sm:my-auto'>
            <img src={Hero} alt="" />
        </div>
        <div className='px-4 pt-6 sm:my-auto mt-10'>
            <h1 className='font-bold text-4xl text-white'>Prediksi Status Gizi Balita</h1>
            <p className='text-white text-md mt-4 sm:mt-10 sm:mb-10'>Aplikasi web Cek Status Gizi Balita adalah sebuah platform interaktif yang dirancang untuk membantu orang tua, tenaga kesehatan, dan pihak terkait dalam memantau status gizi balita. Dengan menggunakan data seperti usia, jenis kelamin, dan tinggi badan.</p>
            <a href="#prediksi">
              <button className='py-2 px-4 mt-4 font-bold rounded-md shadow-md hover:shadow-none hover:bg-slate-100 bg-white text-[#FF4F5B]'>Prediksi !</button>
            </a>
        </div>
    </div>
  )
}

export default Home