import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import jissLogo from "@/assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

export default function Navbar({ children }) {
  const [showNav, setShowNav] = useState(false);

  const menus = [
    {
      menu: "Beranda",
      path: "/",
    },
    {
      menu: "Company Profile",
      path: "/company-profile",
    },
    {
      menu: "Layanan Kami",
      path: "/layanan",
    },
    {
      menu: "Mitra Koorporasi",
      path: "/mitra",
    },
    {
      menu: "Ayo Jadi Satpam",
      path: "/#katalog",
    },
    {
      menu: "Ayo Jadi Member",
      path: "/#member",
    },
    {
      menu: "Agen JISS Agency",
      path: "/agen",
    },
    {
      menu: "Sponsorship JISS",
      path: "/sponsorship",
    },
    {
      menu: "Kontak",
      path: "/#contact",
    },
  ];

  const setIcon = {
    size: 20,
    className: "mxl:hidden z-20 relative",
    onClick: handleToggle,
  };

  function handleToggle() {
    setShowNav(!showNav);
  }

  useEffect(() => {
    document.body.classList = showNav
      ? "max-mxl:overflow-hidden"
      : "overflow-unset";
  }, [showNav]);

  return (
    <>
      <header className="flex items-center gap-8 justify-between z-50 md:mt-5  sticky top-0 bg-gradientBlue md:px-10 lg:px-[8.6875rem] px-4 text-white">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={jissLogo}
            width={70}
            height={70}
            alt="jiss Logo"
            priority={true}
            className="my-2 max-md:w-[40px]"
          />
          <p className="text-[2.5rem] uppercase max-md:hidden">Jiss</p>
        </Link>

        <nav
          className={
            (showNav
              ? "translate-x-0 max-mxl:bg-gradient bg-opacity-50 max-mxl:shadow-3xl"
              : "max-mxl:translate-x-full") +
            " smooth flex gap-8 max-mxl:gap-4 items-center max-mxl:fixed max-mxl:flex-col top-0 right-0 max-mxl:z-10 max-mxl:w-[60%] max-xml:h-screen overflow-scroll max-mxl:h-full max-mxl:pt-16 z-10 max-mxl:bg-gradientBlue"
          }
          onClick={handleToggle}
        >
          {menus.map((item, i) => (
            <Link
              href={item.path}
              scroll={false}
              className="hover:text-slate-400 smooth text-[14.5px] max-lg:w-full max-lg:px-6 max-lg:py-2 font-[400]"
              key={i}
            >
              {item.menu}
            </Link>
          ))}
        </nav>

        <div className="mxl:hidden items-center gap-8 block">
          {showNav ? <GrClose {...setIcon} /> : <FaBars {...setIcon} />}
        </div>
      </header>
      {children}
    </>
  );
}
