import React, { useState } from 'react'
import content1 from '../assets/content1.png'
import content2 from '../assets/content2.png'
import content3 from '../assets/content3.png'
import { Carousel } from 'flowbite-react'

const Edukasi = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const items = [
    {
      title: 'Pentingnya Gizi Seimbang untuk Tumbuh Kembang Anak✨',
      content: 'Gizi seimbang penting untuk tumbuh kembang anak. Anak membutuhkan karbohidrat sebagai energi, protein untuk membangun tubuh, lemak sehat untuk otak, serta vitamin dan mineral dari buah dan sayur. Jangan lupa, pastikan anak cukup minum air. Biasakan makan sehat sejak dini untuk tumbuh aktif dan sehat!',
    },
    {
      title: 'Tips Meningkatkan Nafsu Makan Anak✨',
      content: 'Meningkatkan nafsu makan anak bisa dilakukan dengan menyajikan makanan menarik, melibatkan anak dalam menyiapkan makanan, memvariasikan menu, serta memberikan porsi kecil tetapi sering. Jadikan waktu makan momen menyenangkan bersama keluarga agar anak lebih lahap.',
    },
    {
      title: '5 Buah Terbaik untuk Anak✨',
      content: "Pisang adalah sumber energi yang tinggi dan kaya potasium, sementara apel mengandung serat dan vitamin C yang baik untuk pencernaan dan daya tahan tubuh. Mangga kaya akan vitamin A yang penting untuk kesehatan mata, dan jeruk menyediakan vitamin C untuk menjaga kekebalan tubuh. Semangka, dengan kandungan airnya yang tinggi, membantu menghidrasi tubuh secara alami.",
    },
    {
      title: "Bahaya Kekurangan Zat Besi pada Anak✨",
      content: "Kekurangan zat besi pada anak dapat menyebabkan berbagai masalah kesehatan, seperti mudah lelah, lesu, dan sulit berkonsentrasi saat belajar. Dalam jangka panjang, hal ini juga meningkatkan risiko anemia. Untuk mencegahnya, pastikan anak mengonsumsi makanan kaya zat besi seperti daging merah, hati ayam, bayam, dan kacang-kacangan. Asupan zat besi yang cukup sangat penting untuk mendukung energi dan daya tahan tubuh anak, sehingga mereka dapat tumbuh dengan optimal.",
    },
    {
      title: "Kebiasaan Minum Air Putih pada Anak✨",
      content: "Minum air putih sangat penting untuk kesehatan anak karena membantu metabolisme tubuh, mencegah dehidrasi, dan mendukung fungsi otak serta konsentrasi. Ajarkan anak untuk selalu membawa botol minum sendiri agar kebutuhan cairannya terpenuhi sepanjang hari. Untuk variasi, tambahkan irisan lemon atau daun mint ke dalam air agar lebih menarik. Biasakan anak minum setidaknya 6-8 gelas air setiap hari untuk menjaga tubuh tetap sehat dan aktif."
    }
  ]

  return (
    <div id='edukasi' className='h-screen pb-8 sm:px-5 bg-[#FF4F5B] text-white content-center'>
        <div className="img w-1/2 mx-auto sm:hidden">
          <img src={content3} alt="" />
        </div>
        <h2 className='mx-auto font-bold text-2xl text-center'>Edukasi GiziKuy</h2>
        <div className="flex flex-col sm:flex-row flex-wrap">
          {items.map((item, index) => (
            <div key={index} className="flex flex-1 basis-1/3 flex-col px-4 mt-3 sm:mt-10">
              <div className="flex flex-col">
                <h3 className='font-bold border-b-2 sm:text-center sm:w-fit sm:mx-auto border-white' onClick={() => toggleOpen(index)}>{item.title}</h3>
                {openIndex === index && (
                  <p className={`text-gray-100 transition-[height] duration-500 ${openIndex === index ? "max-h-screen" : "max-h-overflow-hidden"} sm:hidden`}>{item.content}</p>
                )}
                <p className='text-gray-100 text-center hidden sm:inline-block'>
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Edukasi