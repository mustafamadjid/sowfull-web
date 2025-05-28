// Router
import { Link } from "react-router";

// Lucide Icon
import { User } from "lucide-react";

// Navbar Menu
const menu = [
  {
    title: "Lalisa Manoban",
    path: "/profil",
    icon: <User />,
  },
  {
    title: "Beranda",
    path: "/",
  },
  {
    title: "Tanaman Saya",
    path: "/tanamansaya",
  },
  {
    title: "Beli Sekarang",
    path: "/katalog",
  },
  {
    title: "Artikel",
    path: "/articles",
  }
];

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-[4%] py-[28px]">
        {/* Menu */}
        <div className="flex gap-10">
          {menu.map((item, index) => (
            <div key={index}>
              <Link to={item.path}>
                {item.icon === undefined ? (
                  <p className="font-inter text-[#205044] hover:text-[#68b34d]">
                    {item.title}
                  </p>
                ) : (
                  <p className="flex justify-center items-center gap-2  font-inter font-semibold text-[#205044] hover:text-[#68b34d] ">
                    {item.icon} {item.title}
                  </p>
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Logo */}
        <div className="flex items-center ">
          <img src="assets/Logo/Sowfull Hijau.png" alt="" className="w-12 object-cover relative bottom-1"/>
          <h1 className="text-4xl font-inter font-bold ">
            {" "}
            <span className="text-[#6c8c56]">Sow</span>
            <span className=" text-[#205044]">Full</span>
          </h1>

         
        </div>
      </nav>
    </>
  );
};

export default Navbar;
