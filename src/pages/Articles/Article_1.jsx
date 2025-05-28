import { FaLeaf, FaChevronLeft } from "react-icons/fa";

// Import Component
import Navbar from "../../components/layout/Navbar/Navbar";
import { Link } from "react-router";


const Article1 = () => {
  // Contoh data artikel 
  const article = {
    title: "Kesehatan Mental & Tanaman: Menenangkan Jiwa dengan Alam",
    img: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "Kesehatan mental menjadi salah satu aspek penting dalam kehidupan modern yang seringkali terlupakan. Banyak penelitian membuktikan bahwa interaksi dengan alam, seperti merawat tanaman, dapat memberikan efek menenangkan, mengurangi stres, dan membantu proses pemulihan emosi.",
      "Tanaman hias di rumah atau di ruang kerja bukan sekadar mempercantik visual, namun juga memiliki kemampuan untuk meningkatkan kualitas udara, menyeimbangkan kelembaban, hingga menjadi teman refleksi harian. Aktivitas sederhana seperti menyiram, memangkas, atau sekadar memperhatikan pertumbuhan tanaman dapat menjadi momen mindfulness yang efektif.",
      "Beberapa tanaman yang dikenal bermanfaat untuk kesehatan mental antara lain lavender, lidah mertua, monstera, dan peace lily. Aroma alami, warna hijau daun, serta proses perawatan yang konsisten terbukti dapat menurunkan hormon stres dan memperbaiki suasana hati.",
      "Tak perlu lahan luas, cukup satu atau dua pot tanaman di meja belajar atau pojok ruangan sudah bisa memberikan energi positif. Mulai hari ini, yuk tanam kebaikan untuk diri sendiri dengan menghadirkan tanaman di sekitar kita!",
    ],
    date: "Mei 2025",
    author: "Tim SowFull",
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#fcf4ec] min-h-screen font-inter relative">
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

export default Article1;
