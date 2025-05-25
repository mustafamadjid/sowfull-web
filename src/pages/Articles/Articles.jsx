// Components
import Navbar from "../../components/layout/Navbar/Navbar";

// Data Articles
const articles = [
  {
    title: "Kesehatan Mental",
    img: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Salah satu cara untuk merawat kesehatan mental adalah dengan melibatkan diri dalam aktivitas yang menenangkan. Berjalan-jalan di alam, berkebun, atau bahkan meditasi bisa membantu meredakan stres dan kecemasan. Aktivitas seperti ini dapat meningkatkan mood dan memberi kesempatan untuk refleksi diri. Tanaman, misalnya, diketahui dapat memiliki efek positif pada kesehatan mental, karena memberikan rasa tenang dan meredakan tekanan yang kita alami.",
  },
  {
    title: "Kesehatan Mental",
    img: "",
    text: "",
  },
  {
    title: "Kesehatan Mental",
    img: "",
    text: "",
  },
  {
    title: "Kesehatan Mental",
    img: "",
    text: "",
  },
];

const Articles = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <article className="font-poppins mt-15">
        {/* Highlight articles */}
        <div className="flex items-center justify-center w-full">
          <div className="flex w-2/3 items-center justify-center gap-6 border-2 border-[#68b34d]">
            <img
              src={articles[0].img}
              alt=""
              className="max-w-1/3 rounded-2xl"
            />
            <div className="flex flex-col w-1/3">
              <h1>{articles[0].title}</h1>
              <p className="text-justify">{articles[0].text}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Articles;
