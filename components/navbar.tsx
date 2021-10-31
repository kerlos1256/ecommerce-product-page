import Image from "next/image";
import img from "../images/image-avatar.png";
import ham from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import close from "../images/icon-close.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { Product } from "../pages";
import Del from "../images/icon-delete.svg";

interface props {
  Overlay: Dispatch<SetStateAction<boolean>>;
  products: Product[];
  deleteProduct: (Product: Product) => Promise<void>;
  orders: number;
}

const Navbar: React.FC<props> = ({
  Overlay,
  products,
  deleteProduct,
  orders,
}) => {
  const navlinks = ["Collections", "Men", "Women", "About", "Contact"];
  const [current, setCurrent] = useState<number>(0);
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(false);
  const Sidebar = (condition: boolean) => {
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
          <Image alt="" src={ham} />
        </div>
        <div className="mr-6 font-bold text-2xl">
          <Image alt="" src={logo} />
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
            <Image alt="" src={close} />
          </div>
          <ul
            className={`${
              sidebar ? "flex" : "hidden"
            } justify-evenly flex-col md:flex-row pt-2 gap-8 md:gap-0 md:pt-0 md:justify-start md:flex`}
          >
            {navlinks.map((link, index) => (
              <li
                key={index}
                className="navLink"
                onClick={() => setCurrent(index)}
              >
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
        <div className="mx-4 xs:relative">
          <div
            onClick={() => setCart(!cart)}
            className="select-none cursor-pointer absolute left-2 bottom-3 px-2 rounded-xl bg-primary text-xs text-white"
          >
            {orders}
          </div>
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
            } absolute z-40 bg-white drop-shadow-2xl rounded-lg max-h-96 overflow-y-scroll w-23/24 left-1/2 xs:w-80 py-4 mt-10 -translate-x-1/2 xs:-translate-x-3/4`}
          >
            <div className="font-bold px-6 py-4 border-opacity-60 border-b-2">
              Cart
            </div>
            {products.length < 1 ? (
              <div className="py-12 text-center">Your cart is empty.</div>
            ) : (
              <div className="flex flex-col justify-center items-center p-4">
                <div className="w-full">
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className="w-full  flex justify-between items-center mb-4"
                    >
                      <div className="flex">
                        <div className="h-12 w-12 rounded overflow-hidden mr-4">
                          <Image
                            alt=""
                            layout="responsive"
                            src={product.image}
                          />
                        </div>
                        <div className="">
                          <div className="text-darkGrayishBlue">
                            {product.name}
                          </div>
                          <div className="flex text-darkGrayishBlue">
                            ${product.price}.00 x {product.quanity}
                            <p className="ml-2 font-bold text-black">
                              ${product.totalPrice}.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => deleteProduct(product)}
                        className="cursor-pointer h-3 w-3"
                      >
                        <Image alt="" src={Del} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cursor-pointer bg-primary text-white font-semibold w-full text-center rounded-xl py-3 drop-shadow-lg">
                  Checkout
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="ml-4">
          <Image alt="" width="40px" height="40px" src={img} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
