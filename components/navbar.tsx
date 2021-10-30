import Image from "next/image";
import img from "../images/image-avatar.png";
import ham from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import close from "../images/icon-close.svg";
import { useState } from "react";

interface props {
  Overlay: Function;
}

const Navbar: React.FC<props> = ({ Overlay }) => {
  const navlinks = ["Collections", "Men", "Women", "About", "Contact"];
  const [current, setCurrent] = useState<number>(0);
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(false);
  const Sidebar = (condition: boolean) => {
    console.log("side");
    setSidebar(condition);
    Overlay(condition);
  };
  return (
    <nav className="flex justify-between p-4 border-b-2 border-gray-200">
      <div className="flex items-center">
        <div
          onClick={() => Sidebar(true)}
          className="md:hidden px-4 cursor-pointer select-none"
        >
          <Image src={ham} />
        </div>
        <div className="mr-6 font-bold text-2xl">
          <Image src={logo} />
        </div>
        <div
          className={`${
            sidebar ? "absolute top-0 left-0 w-1/2 h-screen z-20 bg-white" : ""
          }`}
        >
          <div
            onClick={() => Sidebar(false)}
            className={`${sidebar ? "" : "hidden"} p-4`}
          >
            <Image src={close} />
          </div>
          <ul
            className={`${
              sidebar ? "flex" : "hidden"
            } justify-evenly flex-col md:flex-row pt-2 gap-8 md:gap-0 md:pt-0 md:justify-start md:flex`}
          >
            {navlinks.map((link, index) => (
              <li className="navLink" onClick={() => setCurrent(index)}>
                <a className="" href={`#${link}`}>
                  {link}
                </a>
                <div
                  className={`${
                    current === index && !sidebar ? "" : "hidden"
                  } absolute w-full mt-7 z-10 bg-primary h-1 rounded`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex h-full items-center justify-end">
        <div className="mx-4 relative">
          <svg
            className="cursor-pointer"
            onClick={() => setCart(!cart)}
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
          {/* popup */}
          <div
            className={`${
              cart ? "" : "hidden"
            } absolute bg-white drop-shadow-2xl rounded-lg w-80 py-4 mt-6 -translate-x-1/2`}
          >
            <div className="font-bold p-4 border-opacity-60 border-b-2">
              Cart
            </div>
            <div className="flex justify-center items-center h-36">
              your cart is empty
            </div>
          </div>
        </div>
        <div className="ml-4">
          <Image width="40px" height="40px" src={img} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
