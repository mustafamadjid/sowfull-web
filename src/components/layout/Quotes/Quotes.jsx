import QuotesCard from "../../fragments/QuotesCard/QuotesCard";
import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

const image = [
  {
    quotes:
      "Dari penderitaan telah muncul jiwa-jiwa terkuat, karakter yang paling besar penuh dengan bekas luka",
    image: "assets/quotes/quotes_1.jpg",
  },
  {
    quotes:
      "Apa yang dibutuhkan kesehatan mental adalah lebih banyak sinar matahari, lebih banyak keterusterangan, dan lebih banyak percakapan tanpa malu-malu",
    image: "assets/quotes/quotes_2.jpg",
  },
  {
    quotes:
      "Tidak ada yang salah dengan meminta waktu untuk diri sendiri. Terkadang, istirahat adalah cara terbaik untuk melangkah lebih jauh",
    image: "assets/quotes/quotes_3.jpg",
  },
  {
    quotes:
      "Pikiran yang tenang adalah fondasi dari tubuh yang sehat. Luangkan waktu untuk merawat jiwa Anda",
    image: "assets/quotes/quotes_4.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Quotes = () => {
  return (
    <div className="mt-30">
      <div className="flex items-center flex-row justify-center gap-3">
        <Leaf className="text-[#205044]" />
        <h1 className="text-5xl font-semibold text-[#205044] font-inter text-center mt-10 mb-10">
          Kita Semua Berhak Bahagia
        </h1>
      </div>

      {/* Quotes Card - muncul ketika discroll ke bagian ini */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // only animate once, 20% masuk viewport
      >
        {image.map((item, index) => (
          <motion.div key={index} variants={cardVariants}>
            <QuotesCard image={item.image} text={item.quotes} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Quotes;
