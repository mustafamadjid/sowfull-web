import Navbar from "../../components/layout/Navbar/Navbar";
import { motion } from "framer-motion";
import {
  FaSeedling,
  FaRegCalendarAlt,
  FaCheckCircle,
  FaQuoteLeft,
} from "react-icons/fa";

// Data dummy tanaman
const tanamanList = [
  {
    nama: "Chamomile",
    img: "https://media.istockphoto.com/id/469151262/id/foto/chamomile-dalam-pot-terisolasi.jpg?s=612x612&w=0&k=20&c=QwhTUzOxn1sCLbSmuFKtCx8d8MmPtejfO6-B12pkc4E=",
    tanggalTanam: "2025-05-21",
    progress: 80,
    status: "Mendekati Panen",
  },
  {
    nama: "Lavender",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gEfMEdbu7qMq9jIaBgqZC0JUxfCryw1lNg&s",
    tanggalTanam: "2025-05-12",
    progress: 50,
    status: "Tumbuh Daun",
  },
  {
    nama: "Bunga Telang",
    img: "https://img.mbizmarket.co.id/products/thumbs/800x800/2023/01/26/913434a832e1baa8d6922bd9e1efe635.jpg",
    tanggalTanam: "2025-05-12",
    progress: 5,
    status: "Baru Tertanam",
  },
  {
    nama: "Mint",
    img: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/8/31/ef50d92b-1819-477f-8005-debe873e3ce4.jpg",
    tanggalTanam: "2025-07-05",
    progress: 15,
    status: "Tumbuh Daun",
  },
  {
    nama: "Kemangi",
    img: "https://media.istockphoto.com/id/172641124/id/foto/tanaman-kemangi-pot-siap-untuk-memetik-dan-memasak-dengan.jpg?s=612x612&w=0&k=20&c=1FPU_1WRJIXlR_r90K6B8kaHFZOLxYQEjgaWPNqB9Xo=",
    tanggalTanam: "2025-08-17",
    progress: 70,
    status: "Mendekati Panen",
  },
];

// Quotes data
const quotes = [
  "Apa yang dibutuhkan kesehatan mental adalah lebih banyak sinar matahari, lebih banyak keterusterangan, dan lebih banyak percakapan tanpa malu-malu.",
  "Tidak ada yang salah dengan meminta waktu untuk diri sendiri. Terkadang, istirahat adalah cara terbaik untuk melangkah lebih jauh.",
  "Pikiran yang tenang adalah fondasi dari tubuh yang sehat. Luangkan waktu untuk merawat jiwa Anda.",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.14,
      duration: 0.55,
      type: "spring",
      stiffness: 90,
    },
  }),
};

const TanamanSaya = () => {
  // Ambil quotes random
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <Navbar />
      <div className="bg-[#fcf4ec] min-h-screen font-inter py-8 px-3">
        <div className="max-w-4xl mx-auto">
          {/* Quotes mental health */}
          <motion.div
            className="mb-10 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="bg-white/90 rounded-2xl shadow px-7 py-5 flex flex-col items-center relative max-w-2xl">
              <FaQuoteLeft className="text-2xl text-[#6c8c56] absolute -top-5 left-4 opacity-70" />
              <p className="text-lg text-[#205044] font-medium italic text-center">
                {randomQuote}
              </p>
            </div>
          </motion.div>

          {/* Judul dashboard */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-[#205044] mb-6 flex items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <FaSeedling className="text-[#6c8c56]" />
            Dashboard Pemantauan Tanaman Saya
          </motion.h1>

          {/* List tanaman */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            initial="hidden"
            animate="visible"
          >
            {tanamanList.map((tanaman, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 flex flex-col overflow-hidden border border-[#e5ecdd] group"
                variants={cardVariants}
                custom={idx}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.025,
                  boxShadow: "0 8px 32px 0 rgba(108,140,86,0.11)",
                }}
              >
                {/* Gambar tanaman */}
                <img
                  src={tanaman.img}
                  alt={tanaman.nama}
                  className="w-full h-48 object-cover object-center"
                />

                <div className="p-5 flex-1 flex flex-col">
                  <h2 className="text-xl font-semibold text-[#205044] mb-1 flex items-center gap-2">
                    <FaSeedling className="text-[#6c8c56]" />
                    {tanaman.nama}
                  </h2>
                  <div className="flex items-center gap-2 text-[#6c8c56] text-sm mb-2">
                    <FaRegCalendarAlt className="text-[#205044]" />
                    <span>Ditaman: {tanaman.tanggalTanam}</span>
                  </div>
                  <div className="mb-3 flex items-center gap-2">
                    <FaCheckCircle className={`text-[#6c8c56]`} />
                    <span className="text-[#205044] font-medium">
                      {tanaman.status}
                    </span>
                  </div>

                  {/* Progress bar animasi */}
                  <div className="w-full bg-[#e9eadf] rounded-xl h-3 mb-3 overflow-hidden">
                    <motion.div
                      className="bg-[#6c8c56] h-3 rounded-xl"
                      initial={{ width: 0 }}
                      animate={{ width: `${tanaman.progress}%` }}
                      transition={{ duration: 1, delay: 0.25 * idx }}
                    />
                  </div>
                  <div className="flex justify-end">
                    <span className="text-xs text-[#6c8c56] font-semibold">
                      {tanaman.progress}% Pertumbuhan
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TanamanSaya;
