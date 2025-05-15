const Community = () => {
  return (
    <>
      <div className="flex items-center flex-row justify-center gap-3">
        {/* Text */}
        <div className="max-w-[50%]  space-y-5">
          <h1 className="capitalize text-5xl font-semibold text-[#205044] font-inter">
            Bergabung Bersama Komunitas Positif
          </h1>
          <p className="text-justify text-xl text-[#205044] font-inter max-w-[80%] ">
            Anda tidak perlu sendirian lagi. Di sini, Anda bersama orang-orang
            yang peduli, bisa berbagi cerita, belajar dari pengalaman, dan
            menemukan kekuatan baru setiap hari
          </p>
        </div>

        {/* Image */}
        <div className="max-w-[40%]">
          {/* image 1 */}
          <div className="image-wrapper relative">
            <img src="assets/community/1.jpg" alt="" className="max-w-[30em]"/>
          </div>

          {/* image 2 */}
          <div className="image-wrapper relative left-30 bottom-10">
            <img src="assets/community/2.jpg" alt=""className="max-w-[30em] " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
