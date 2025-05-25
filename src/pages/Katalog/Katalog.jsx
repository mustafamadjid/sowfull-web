import Navbar from "../../components/layout/Navbar/Navbar";
import { FaSeedling } from "react-icons/fa";

// Data produk contoh
const produkList = [
  {
    nama: "Sowfull Seed Paper Greeting Card",
    img: "https://i.etsystatic.com/21873794/r/il/988f53/3708022425/il_fullxfull.3708022425_lih9.jpg",
    deskripsi:
      "Kartu ucapan ramah lingkungan yang bisa kamu tanam menjadi tanaman hias setelah digunakan.",
    stok: 15,
  },

  {
    nama: "Sowfull Seed Paper Notebook",
    img: "https://m.media-amazon.com/images/I/51Q22djsawL._AC_UF894,1000_QL80_.jpg",
    deskripsi:
      "Notebook dengan kertas benih—habis menulis, tanam dan lihat benih tumbuh!",
    stok: 3,
  },
  {
    nama: "Sowfull Plantable Business Card",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7RCjlybathYrckRm_ej_lnmrk_Sd9KwuBA&s",
    deskripsi:
      "Kartu nama unik yang bisa ditanam. Pilihan pas untuk tampil beda dan peduli lingkungan.",
    stok: 20,
  },
  {
    nama: "Sowfull Mental Health Kit",
    img: "https://i.etsystatic.com/5203597/r/il/a2bb72/2368693801/il_570xN.2368693801_6fok.jpg",
    deskripsi:
      "Kit lengkap berisi Seed paper, tanah, pot tanaman, gantungan kunci menarik, dan kartu ucapan untuk merawat kesehatan mental.",
    stok: 5,
  },
];

const Katalog = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#fcf4ec] min-h-screen font-inter py-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Judul halaman */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#205044] mb-3 flex items-center gap-2">
            Katalog Kertas Benih{" "}
            <span className="ml-2 text-[#6c8c56] text-2xl">🌱</span>
          </h1>
          <p className="mb-8 text-[#6c8c56] text-lg">
            Pilihan produk kertas benih ramah lingkungan & bisa ditanam!
          </p>
          {/* Grid produk */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {produkList.map((produk, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-[#e9eadf] relative group"
              >
                {/* Decorative accent */}
                <span className="absolute top-4 right-4 opacity-10 text-5xl rotate-12 pointer-events-none select-none">
                  <FaSeedling className="text-[#6c8c56]" />
                </span>
                {/* Image */}
                <img
                  src={produk.img}
                  alt={produk.nama}
                  className="w-full h-52 object-cover object-center rounded-t-3xl border-b-4 border-[#f7f0e6] group-hover:scale-105 transition-transform duration-500"
                />
                {/* Konten */}
                <div className="flex-1 flex flex-col px-5 pt-5 pb-4 relative">
                  <h2 className="text-xl font-semibold text-[#205044] mb-2">
                    {produk.nama}
                  </h2>
                  <p className="text-[#5b7553] mb-5 flex-1">
                    {produk.deskripsi}
                  </p>
                  {/* Stok & tombol */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <FaSeedling className="text-[#6c8c56] text-lg" />
                      <span className="font-semibold text-[#205044]">
                        {produk.stok}
                      </span>
                      <span className="text-[#6c8c56]">stok</span>
                    </div>
                    <button
                      className="bg-[#6c8c56] hover:bg-[#205044] text-white font-medium px-4 py-2 rounded-xl transition-colors duration-150 shadow-sm cursor-pointer"
                      disabled={produk.stok <= 0}
                    >
                      {produk.stok > 0 ? "Beli Sekarang" : "Stok Habis"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Katalog;
