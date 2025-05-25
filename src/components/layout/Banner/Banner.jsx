// Lucide Icon
import { MoveRight } from "lucide-react";
// Framer Motion
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // Jeda antar anak
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Banner = () => {
  return (
    <motion.div
      className="max-lg: w-full flex flex-col items-center justify-center min-h-screen px-[6%] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Wrapper */}
      <div className="max-w-[800px]">
        {/* Text */}
        <motion.div
          className="flex flex-col items-center gap-2"
          variants={containerVariants}
        >
          <motion.h1
            className="capitalize text-center text-6xl font-semibold text-[#205044] font-inter"
            variants={itemVariants}
          >
            temukan kebahagiaan dan kedamaian dalam setiap tanaman
          </motion.h1>

          <motion.p
            className="text-justify text-[#205044] font-inter mt-5"
            variants={itemVariants}
          >
            Tanaman bukan hanya sekedar hiasan atau makanan, tetapi juga
            memiliki kekuatan untuk menenangkan jiwa, mengurangi stres, dan
            meningkatkan kesehatan mental. Mari bergabung bersama kami untuk
            menemukan keseimbangan dan kebahagiaan dalam hidup anda.
          </motion.p>

          <motion.div
            className="bg-[#3c7c4c] py-3 px-5 mt-5 rounded-md text-white font-semibold cursor-pointer hover:bg-[#67aa62] flex items-center justify-center gap-2 hover:gap-5 transition-all duration-100"
            variants={itemVariants}
            whileTap={{ scale: 0.9 }}
          >
            <button className="cursor-pointer">Mulai Sekarang</button>
            <div className="mt-1">
              <MoveRight />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Illustration */}
      <motion.div variants={itemVariants} className="mt-10">
        <img
          src="/assets/ilustration_2.png"
          alt=""
          className="lg:max-w-[1900px] sm:max-w-[1000px] max-w-[600px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
