// Components
import QuotesCard from "../../fragments/QuotesCard/QuotesCard";

// Lucide Icon
import { Leaf } from "lucide-react";

// Image list
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

const Quotes = () => {
  return (
    <>
      <div className="mt-30 ">
        <div className="flex items-center flex-row justify-center gap-3">
          <Leaf className="text-[#205044] " />
          <h1 className="text-5xl font-semibold text-[#205044] font-inter text-center mt-10 mb-10">
            Kita Semua Berhak Bahagia
          </h1>
        </div>

        {/* Quotes Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {image.map((item, index) => (
            <div key={index}>
              <QuotesCard image={item.image} text={item.quotes} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Quotes;
