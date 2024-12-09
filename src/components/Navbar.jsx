import React from 'react'

const Navbar = () => {
  return (
    

<nav className="bg-[#FF4F5B] fixed w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl sm:text-4xl font-bold whitespace-nowrap text-white">GiziKuy</span>
    </a>
    <button onClick={() => document.getElementById('navbar-default').classList.toggle('hidden')} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 hover:text-[#FF4F5B] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 rounded-lg text-end sm:flex-row">
        <li>
          <a href="#home" className="block py-2 px-3 text-white rounded" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#prediksi" className="block py-2 px-3 text-white rounded">Prediksi</a>
        </li>
        <li>
          <a href="#edukasi" className="block py-2 px-3 text-white rounded ">Edukasi</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar