const QuotesCard = ({ image,text }) => {
  return (
    <>
      <div className="group h-96 w-96 [perspective:1000px] cursor-pointer">
        <div className="relative h-full w-full rounded xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 ">
            <img
              src={image}
              alt=""
              className="h-full w-full rounded-xl object-cover shadow-xl"
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black opacity-80  px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <p className="text-lg font-inter italic font-semibold">"{text}"</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotesCard;
