import Image from "next/image";
import { useState } from "react";
import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";
import img1Thumb from "../images/image-product-1-thumbnail.jpg";
import img2Thumb from "../images/image-product-2-thumbnail.jpg";
import img3Thumb from "../images/image-product-3-thumbnail.jpg";
import img4Thumb from "../images/image-product-4-thumbnail.jpg";
import next from "../images/icon-next.svg";
import prev from "../images/icon-previous.svg";
import { Product } from "../pages";

interface props {
  addProduct: (Product: Product) => void;
}

const Main: React.FC<props> = ({ addProduct }) => {
  const productImages = [img1, img2, img3, img4];
  const productThumbnails = [img1Thumb, img2Thumb, img3Thumb, img4Thumb];

  const [current, setCurrent] = useState<number>(0);
  const [quanity, setQuanity] = useState<number>(0);

  return (
    <main className="h-full items-center flex justify-center">
      <div className="xs:pt-16 flex flex-col md:flex-row md:justify-between md:gap-8 w-full 2xl:w-8/12 lg:w-10/12  xl:w-3/4 items-center">
        {/* product preview */}
        <div className="relative">
          <div className="flex absolute z-10 top-1/2 -translate-y-1/2 sm:hidden justify-between w-full">
            <div
              onClick={() => {
                console.log(current);
                const lastIndex = productImages.length - 1;
                if (current <= 0) return setCurrent(lastIndex);
                setCurrent(current - 1);
              }}
              className="h-10 w-10 m-4 flex justify-center items-center bg-white rounded-full"
            >
              <Image src={prev} />
            </div>
            <div
              onClick={() => {
                console.log(current);
                const lastIndex = productImages.length - 1;
                if (current >= lastIndex) return setCurrent(0);
                setCurrent(current + 1);
              }}
              className="h-10 w-10 m-4 flex justify-center items-center bg-white rounded-full"
            >
              <Image src={next} />
            </div>
          </div>
          <div className="w-screen xs:w-96 md:w-80 xs:rounded-xl overflow-hidden ">
            <Image layout="responsive" src={productImages[current]} />
          </div>
          {/* thumbnails */}
          <div className="hidden pt-5 sm:flex justify-between">
            {productThumbnails.map((img, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-20 w-20 ${
                  current === index ? "border-primary border-2 " : ""
                } rounded-xl overflow-hidden`}
              >
                <Image
                  className={`${current === index ? "opacity-50" : ""}`}
                  layout="responsive"
                  src={img}
                />
              </div>
            ))}
          </div>
        </div>
        {/* product details */}
        <div className="max-w-md p-4">
          <h4 className="text-primary font-semibold">SNEAKER COMPANY</h4>
          <h1 className=" py-4 font-bold xs:text-5xl text-3xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="py-4">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole. they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex xs:flex-col  justify-between items-center xs:items-start">
            <div className="flex items-center">
              <h1 className="font-bold text-2xl pr-4">$125.00</h1>
              <div className="text-primary bg-pale rounded-lg px-2">50%</div>
            </div>
            <div>
              <div className="line-through text-grayishBlue">$250.00</div>
            </div>
          </div>
          <div className="flex flex-col xs:flex-row justify-between">
            <div className="select-none xs:w-4/12 grid grid-cols-3 items-center ">
              <div
                onClick={() => {
                  if (quanity > 0) {
                    setQuanity(quanity - 1);
                  }
                }}
                className="cursor-pointer h-full flex items-center justify-center bg-lightGrayishBlue text-primary font-bold text-xl "
              >
                -
              </div>
              <div className="h-full flex justify-center items-center bg-lightGrayishBlue text-sm">
                {quanity}
              </div>
              <div
                onClick={() => setQuanity(quanity + 1)}
                className="cursor-pointer flex items-center justify-center h-full bg-lightGrayishBlue text-primary font-bold text-lg"
              >
                +
              </div>
            </div>
            <div
              onClick={() =>
                addProduct({
                  image: productThumbnails[current],
                  name: "Fall Limited Edition Sneakers",
                  price: 125,
                  quanity: quanity,
                  totalPrice: 125 * quanity,
                })
              }
              className="select-none py-4 cursor-pointer shadow-purchesBtn bg-primary rounded-lg xs:w-60 lg:w-60 md:w-48 flex justify-center items-center text-white"
            >
              <div className="pr-4">
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#ffffff"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
