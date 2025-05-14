// Components
import Navbar from "../../components/layout/Navbar/Navbar";
import Banner from "../../components/layout/Banner/Banner";
import Quotes from "../../components/layout/Quotes/Quotes";
import ArticleSide from "../../components/layout/ArticleSide/ArticleSide";

const Home = () => {
  return (
    <>
      <main className="max-w-[2000px] mx-auto">
        {/* Navbar */}
        <div>
          <Navbar />
        </div>

        {/* Banner */}
        <div className=" w-full min-h-[700px]  flex items-center px-[3%] ">
          <div>
            <Banner />
          </div>
        </div>

        {/* Quotes */}
        <div className="w-full min-h-[700px] px-[3%] mt-[100px]">
          <Quotes />
        </div>

        {/* Articles */}
        <div className="w-full min-h-[700px]  bg-[#f7f0e6] p-10">
          <ArticleSide />
        </div>
      </main>
    </>
  );
};

export default Home;
