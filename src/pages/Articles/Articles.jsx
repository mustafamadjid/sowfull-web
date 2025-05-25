import { FaLeaf, FaSun, FaBook, FaHeart, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar/Navbar";

import { Link } from "react-router";
import { path } from "framer-motion/client";

const articles = [
  {
    title: "Kesehatan Mental",
    img: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Salah satu cara untuk merawat kesehatan mental adalah dengan melibatkan diri dalam aktivitas yang menenangkan. Berjalan-jalan di alam, berkebun, atau bahkan meditasi bisa membantu meredakan stres dan kecemasan. Aktivitas seperti ini dapat meningkatkan mood dan memberi kesempatan untuk refleksi diri. Tanaman, misalnya, diketahui dapat memiliki efek positif pada kesehatan mental, karena memberikan rasa tenang dan meredakan tekanan yang kita alami.",
    path: "/article/1",
  },
  {
    title: "Tips Relaksasi di Rumah",
    img: "https://images.unsplash.com/photo-1712746438528-f725ba394f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlbGF4YXRpb258ZW58MHx8MHx8fDA%3D",
    text: "Relaksasi tidak harus mahal, cukup dengan mendengarkan musik, menikmati teh hangat, atau membaca buku favorit. Temukan cara sederhana yang paling cocok untukmu!",
    path: "/article/2",
  },
  {
    title: "Manfaat Berkebun Bagi Mental",
    img: "https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhcmRlbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    text: "Berkebun terbukti menurunkan kadar hormon stres, memperbaiki suasana hati, dan meningkatkan rasa pencapaian. Mulailah dengan tanaman hias kecil di rumah.",
    path: "/article/3",
  },
  {
    title: "Meditasi dan Mindfulness",
    img: "https://plus.unsplash.com/premium_photo-1666264200751-e0df29238185?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZGl0YXRpb258ZW58MHx8MHx8fDA%3D",
    text: "Meditasi selama 10 menit setiap hari dapat membantu menenangkan pikiran dan meningkatkan fokus. Cobalah teknik pernapasan dalam secara teratur.",
    path: "/article/4",
  },
  {
    title: "Aromaterapi untuk Ketenangan",
    img: "https://images.unsplash.com/photo-1671006438448-b827355043f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXJvbWF0aGVycmFweXxlbnwwfHwwfHx8MA%3D%3D",
    text: "Aromaterapi dengan minyak esensial seperti lavender dan peppermint terbukti dapat mengurangi kecemasan dan memperbaiki kualitas tidur.",
    path: "/article/5",
  },
  {
    title: "Pentingnya Tanaman di Dalam Rumah",
    img: "https://images.unsplash.com/photo-1716737954398-b33b3646d128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbnQlMjBob21lfGVufDB8fDB8fHww",
    text: "Tanaman hias seperti lidah mertua dan monstera tidak hanya memperindah ruangan, tetapi juga membantu menjaga kualitas udara dan menambah suasana nyaman.",
    path: "/article/6",
  },
  {
    title: "Jurnal Syukur Harian",
    img: "https://plus.unsplash.com/premium_photo-1684444605542-93725082d214?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am91cm5hbHxlbnwwfHwwfHx8MA%3D%3D",
    text: "Mencatat tiga hal yang kamu syukuri setiap hari dapat membantu mengubah perspektif dan menumbuhkan rasa bahagia.",
    path: "/article/7",
  },
  {
    title: "Berjemur di Pagi Hari",
    img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
    text: "Paparan sinar matahari pagi membantu produksi vitamin D, meningkatkan mood, dan mengurangi risiko depresi.",
    path: "/article/8",
  },
  {
    title: "Tanaman Herbal Pengurang Stres",
    img: "https://images.unsplash.com/photo-1532091710512-26fd3b2dcf16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVyYnN8ZW58MHx8MHx8fDA%3D",
    text: "Beberapa tanaman herbal seperti chamomile, mint, dan basil dapat diolah menjadi minuman untuk membantu merilekskan tubuh.",
    path: "/article/9",
  },
];

// SVG Daun dekoratif pojok
const LeafDecoration = () => (
  <svg
    className="absolute -top-7 -left-7 w-24 h-24 opacity-30"
    viewBox="0 0 100 100"
    fill="none"
  >
    <ellipse cx="50" cy="50" rx="50" ry="25" fill="#6c8c56" opacity="0.5" />
    <path
      d="M50 10 Q60 30 80 20 Q60 40 50 90 Q40 40 20 20 Q40 30 50 10"
      fill="#205044"
      opacity="0.3"
    />
  </svg>
);

// Variants animasi Framer Motion
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const highlightVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
};

const Articles = () => {
  // Icon dinamis berdasarkan urutan artikel
  const iconList = [
    <FaLeaf className="inline-block text-[#6c8c56] mr-2" />,
    <FaSun className="inline-block text-[#f9a826] mr-2" />,
    <FaBook className="inline-block text-[#205044] mr-2" />,
    <FaHeart className="inline-block text-[#e57373] mr-2" />,
  ];

  // Handle klik card artikel

  return (
    <>
      <Navbar />
      <div className="relative">
        <LeafDecoration />
        <div className="font-inter bg-[#fcf4ec] min-h-screen pt-8 pb-12">
          {/* Highlighted Article */}
          <motion.div
            className="max-w-4xl mx-auto mb-10 relative"
            variants={highlightVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="absolute -bottom-8 -right-8 w-28 h-28 bg-[#6c8c56] opacity-10 rounded-full blur-2xl z-0"></span>
            <div className="relative flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden border-l-8 border-[#205044] z-10">
              <img
                src={articles[0].img}
                alt={articles[0].title}
                className="w-full md:w-2/5 h-60 md:h-auto object-cover"
              />
              <div className="p-7 flex flex-col justify-center w-full md:w-3/5">
                <span className="text-xs text-[#6c8c56] uppercase font-bold mb-2 tracking-wider flex items-center">
                  {iconList[0]} Highlight
                </span>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#205044] flex items-center">
                  {iconList[0]} {articles[0].title}
                </h1>
                <p className="text-[#444] leading-relaxed text-justify mb-3">
                  {articles[0].text}
                </p>

                {/* Button Selengkapnya */}
                <div className="px-6 pb-5">
                  <Link to={articles[0].path}>
                    <button className="group/button flex items-center gap-2 bg-[#6c8c56] text-white px-4 py-2 rounded-xl font-medium mt-2 shadow hover:bg-[#205044] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#205044] cursor-pointer">
                      Baca Selengkapnya
                      <FaChevronRight className="group-hover/button:translate-x-1 transition-transform duration-200" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Divider gelombang organik */}
          <div className="flex justify-center my-8">
            <svg height="40" width="260">
              <path
                d="M0 20 Q65 40 130 20 Q195 0 260 20"
                stroke="#6c8c56"
                strokeWidth="3"
                fill="none"
                opacity="0.25"
              />
            </svg>
          </div>

          {/* Article List */}
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-semibold text-[#205044] mb-6 flex items-center">
              <FaBook className="inline-block text-[#6c8c56] mr-2" />
              Artikel Lainnya
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-7"
              initial="hidden"
              animate="visible"
            >
              {articles.slice(1).map((art, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-200 flex flex-col overflow-hidden border border-[#eee] group relative cursor-pointer min-h-[340px]"
                  tabIndex={0}
                  role="button"
                  aria-label={`Baca selengkapnya tentang ${art.title}`}
                  variants={cardVariants}
                  custom={idx + 1}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.035,
                    boxShadow:
                      "0 8px 32px 0 rgba(108,140,86,0.12), 0 1.5px 7px 0 rgba(32,80,68,0.05)",
                  }}
                >
                  {/* Accent bulatan pojok kiri atas */}
                  <span className="absolute -top-3 -left-3 w-9 h-9 bg-[#205044] opacity-10 rounded-full blur-lg z-0"></span>
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6 flex-1 flex flex-col z-10">
                    <h3 className="text-xl font-semibold mb-2 text-[#205044] flex items-center">
                      {iconList[(idx + 1) % iconList.length]} {art.title}
                    </h3>
                    <p className="text-[#666] text-base line-clamp-4">
                      {art.text}
                    </p>
                  </div>
                  <div className="px-6 pb-5">
                    <Link to={art.path}>
                      <button className="group/button flex items-center gap-2 bg-[#6c8c56] text-white px-4 py-2 rounded-xl font-medium mt-2 shadow hover:bg-[#205044] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#205044] cursor-pointer">
                        Baca Selengkapnya
                        <FaChevronRight className="group-hover/button:translate-x-1 transition-transform duration-200" />
                      </button>
                    </Link>
                  </div>
                  {/* Accent blob pojok kanan bawah */}
                  <span className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#6c8c56] opacity-10 rounded-full blur-lg z-0"></span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
