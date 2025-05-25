import { FaLeaf, FaChevronLeft } from "react-icons/fa";
import Navbar from "../../components/layout/Navbar/Navbar";
import { Link } from "react-router";

// SVG Daun dekoratif (opsional)
const LeafDecoration = () => (
  <svg
    className="absolute -top-7 -right-7 w-28 h-28 opacity-20"
    viewBox="0 0 100 100"
    fill="none"
  >
    <ellipse cx="50" cy="50" rx="50" ry="25" fill="#6c8c56" opacity="0.7" />
    <path
      d="M50 10 Q60 30 80 20 Q60 40 50 90 Q40 40 20 20 Q40 30 50 10"
      fill="#205044"
      opacity="0.5"
    />
  </svg>
);

const Article2 = () => {
  // Data artikel kedua
  const article = {
    title: "Tips Relaksasi di Rumah untuk Kesehatan Mental",
    img: "https://images.unsplash.com/photo-1712746438528-f725ba394f10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlbGF4YXRpb258ZW58MHx8MHx8fDA%3D",
    content: [
      "Relaksasi di rumah kini menjadi hal penting untuk menjaga kesehatan mental di tengah aktivitas sehari-hari yang padat. Kamu tidak perlu mengeluarkan biaya mahal atau pergi ke tempat khusus, cukup ciptakan suasana nyaman di rumah sendiri.",
      "Mulailah dengan menyediakan waktu khusus untuk diri sendiri setiap hari. Dengarkan musik yang menenangkan, seduh teh hangat, atau nikmati aromaterapi dengan lilin wangi favoritmu. Aktivitas ini terbukti dapat membantu meredakan stres, menurunkan ketegangan otot, dan memperbaiki suasana hati.",
      "Selain itu, coba atur sudut relaksasi sederhana di rumah seperti di dekat jendela, di mana kamu bisa duduk santai sambil membaca buku atau sekadar menikmati cahaya matahari. Jika memungkinkan, tambahkan tanaman hias untuk menambah rasa damai dan segar.",
      "Ingat, relaksasi bukanlah kemewahan tapi kebutuhan. Jadikan kebiasaan sederhana ini sebagai bentuk self-care agar tubuh dan pikiran tetap seimbang.",
    ],
    date: "Mei 2025",
    author: "Tim SowFull",
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#fcf4ec] min-h-screen font-inter relative">
        <LeafDecoration />
        <div className="max-w-2xl mx-auto px-5 pt-6 pb-14 relative z-10">
          {/* Tombol Kembali */}
          <div className="mb-6">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-[#205044] hover:text-[#6c8c56] font-medium transition-colors"
            >
              <FaChevronLeft /> Kembali ke Artikel
            </Link>
          </div>

          {/* Cover image */}
          <div className="overflow-hidden rounded-2xl shadow-md mb-7 relative">
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-64 object-cover object-center scale-100 hover:scale-105 transition-transform duration-700"
            />
            {/* Daun dekorasi pada gambar */}
            <span className="absolute bottom-4 right-4 opacity-70">
              <FaLeaf className="text-[#6c8c56] text-3xl rotate-[20deg]" />
            </span>
          </div>

          {/* Judul dan Meta */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#205044] mb-2 flex items-center gap-2">
            <FaLeaf className="text-[#6c8c56]" />
            {article.title}
          </h1>
          <div className="mb-4 flex items-center gap-4 text-sm text-[#6c8c56]">
            <span>Ditulis oleh {article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          {/* Konten Artikel */}
          <div className="bg-white/90 rounded-xl shadow px-7 py-7 text-[#2c3933] leading-relaxed text-justify space-y-6">
            {article.content.map((par, idx) => (
              <p key={idx}>{par}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Article2;
