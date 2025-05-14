// Lucide Icon
import { MoveRight } from "lucide-react";

const Banner = () => {
  return (
    <>
      {/* Container */}
      <div className="lg:container max-lg: w-full flex items-center min-h-[700px] px-[6%] ">
        {/* Wrapper */}
        <div className="max-w-[700px] ">
          {/* Text */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="capitalize text-center text-5xl font-semibold text-[#205044] font-inter">
              temukan kebahagiaan dan kedamaian dalam setiap tanaman
            </h1>

            <p className="text-justify text-[#205044] font-inter mt-5">
              Tanaman bukan hanya sekedar hiasan atau makanan,
              tetapi juga memiliki kekuatan untuk menenangkan jiwa, mengurangi
              stres, dan meningkatkan kesehatan mental. Mari bergabung bersama kami untuk
              menemukan keseimbangan dan kebahagiaan dalam hidup anda.
            </p>

            <div className="bg-[#3c7c4c] py-3 px-5 mt-5 rounded-md text-white font-semibold cursor-pointer hover:bg-[#67aa62] flex items-center justify-center gap-2 hover:gap-5 transition-all duration-300">
              <button className="cursor-pointer">Mulai Sekarang</button>
              <div className="mt-1">
                <MoveRight />
              </div>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div>
          <img
            src="/assets/ilustration.png"
            alt=""
            className="max-w-[1000px] absolute top-20 right-0"
          />
        </div>
      </div>
    </>
  );
};
export default Banner;
