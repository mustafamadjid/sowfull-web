// Components
import Navbar from "../../components/layout/Navbar/Navbar";
import Banner from "../../components/layout/Banner/Banner";
import Quotes from "../../components/layout/Quotes/Quotes";
import ArticleSide from "../../components/layout/ArticleSide/ArticleSide";
import Community from "../../components/layout/Community/Community";

const Home = () => {
  return (
    <>
      <main className="w-full mx-auto scroll-smooth">
        {/* Navbar */}
        <div>
          <Navbar />
        </div>

        {/* Banner */}
        <div className=" w-full min-h-[700px]">
          <div>
            <Banner />
          </div>
        </div>

        {/* Quotes */}
        <div className="w-full min-h-[600px] px-[3%] mb-[50px] ">
          <Quotes />
        </div>

        {/* Articles */}
        <div className="w-full min-h-[750px]  bg-[#f7f0e6] p-10 rounded-t-[50px] rounded-b-[20px]">
          <ArticleSide />
        </div>

        {/* Community */}
        <div className="w-full min-h-[750px] px-[5%] p-10 bg-[#f1e6d7] rounded-t-[20px] ">
          <Community />
        </div>
      </main>
    </>
  );
};

export default Home;
