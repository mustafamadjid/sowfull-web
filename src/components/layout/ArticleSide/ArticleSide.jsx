// React slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Lucide Icon
import { BookOpen } from "lucide-react";

// Import Router
import { Link } from "react-router";

// Contents
const content = [
  {
    text: "Kesehatan mental adalah bagian penting dari kesejahteraan kita yang sering kali diabaikan. Menjaga kesehatan mental sama pentingnya dengan menjaga kesehatan fisik. Dengan meningkatnya tekanan hidup, stres, dan kecemasan, penting bagi kita untuk mengenali tanda-tanda gangguan mental dan mencari dukungan yang kita butuhkan. Menciptakan rutinitas yang seimbang, berkomunikasi secara terbuka, dan tidak takut untuk meminta bantuan adalah langkah-langkah penting dalam menjaga kesehatan mental.",
    image: "assets/articles/article_1.png",
  },
  {
    text: "Salah satu cara untuk merawat kesehatan mental adalah dengan melibatkan diri dalam aktivitas yang menenangkan. Berjalan-jalan di alam, berkebun, atau bahkan meditasi bisa membantu meredakan stres dan kecemasan. Aktivitas seperti ini dapat meningkatkan mood dan memberi kesempatan untuk refleksi diri. Tanaman, misalnya, diketahui dapat memiliki efek positif pada kesehatan mental, karena memberikan rasa tenang dan meredakan tekanan yang kita alami.",
    image: "assets/articles/article_2.jpg",
  },
  {
    text: "Selain aktivitas fisik, menjaga hubungan sosial juga berperan penting dalam kesehatan mental. Berbicara dengan teman atau keluarga, atau bahkan bergabung dengan komunitas dapat memberikan rasa dukungan yang sangat dibutuhkan. Jangan ragu untuk berbagi perasaan dan pengalaman dengan orang yang dapat dipercaya. Terkadang, berbicara tentang apa yang kita alami sudah dapat meringankan beban mental yang kita rasakan.",
    image: "assets/articles/article_3.png",
  },
];

const ArticleSide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <Link to={"/articles"}>
        <div className="px-[3%] flex items-center flex-row justify-start gap-3 ">
          <BookOpen className="text-[#205044] " />
          <h1 className="text-4xl font-semibold text-[#205044] font-inter  mt-10 mb-10 cursor-pointer hover:text-green-700">
            Artikel Untukmu
          </h1>
        </div>
      </Link>

      {/* Slider */}
      <div className="lg:container max-lg:w-full ">
        <div className="slider-container">
          <Slider {...settings}>
            {content.map((item, index) => (
              <div key={index} className="banner-slide-item ">
                {/* Image */}
                <div>
                  <img
                    src={item.image}
                    alt=""
                    className="max-h-100 max-w-100 rounded-2xl"
                  />
                </div>

                {/* Text */}
                <div className="max-w-[600px]">
                  <p className="text-justify text-xl text-[#205044] font-inter mt-5">
                    {item.text}
                  </p>

                  <button className="bg-[#3c7c4c] py-2.5 px-3 mt-10 rounded-md text-white font-semibold cursor-pointer hover:bg-[#67aa62] flex items-center justify-center gap-2 hover:gap-5 transition-all duration-300">
                    Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ArticleSide;
