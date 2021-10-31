import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Main from "../components/main";
import Navbar from "../components/navbar";
import img1Thumb from "../images/image-product-1-thumbnail.jpg";
import img2Thumb from "../images/image-product-2-thumbnail.jpg";
import img3Thumb from "../images/image-product-3-thumbnail.jpg";

export interface Product {
  image: StaticImageData;
  name: string;
  price: number;
  totalPrice: number;
  quanity: number;
}

const exampleProducts: Product[] = [
  {
    name: "Fall Limited Edition Sneakers",
    price: 15,
    quanity: 1,
    totalPrice: 15,
    image: img1Thumb,
  },
  {
    name: "product2",
    price: 30,
    quanity: 3,
    totalPrice: 90,
    image: img2Thumb,
  },
  {
    name: "product3",
    price: 45,
    quanity: 5,
    totalPrice: 225,
    image: img3Thumb,
  },
];

const Home: NextPage = () => {
  const [overlay, setOverlay] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<number>(sum(products));

  function sum(Products: Product[]) {
    let sum = 0;
    Products.map((product) => {
      sum += product.quanity;
    });
    return sum;
  }
  const deleteProduct = async (Product: Product) => {
    const newProducts = products.filter((product) => product !== Product);
    setProducts(newProducts);
    setOrders(sum(newProducts));
  };
  const addProduct = async (Product: Product) => {
    if (Product.quanity < 1) return;
    if (products.length < 1) {
      setOrders(orders + Product.quanity);
      return setProducts([...products, Product]);
    }
    const productExists = products.find(
      (product) => product.image === Product.image
    );

    if (!productExists) {
      setOrders(orders + Product.quanity);
      return setProducts([...products, Product]);
    }
    productExists.quanity += Product.quanity;
    console.log(orders);
    setOrders(orders + Product.quanity);
    console.log(orders);
    productExists.totalPrice = productExists.price * productExists.quanity;
  };
  return (
    <div className="w-screen h-screen">
      <div
        className={`${
          overlay ? "" : "hidden"
        } absolute h-full w-full bg-black bg-opacity-80 z-10`}
      ></div>
      <div className="container mx-auto ">
        <Head>
          <title>product page</title>
        </Head>
        <Navbar
          orders={orders}
          products={products}
          deleteProduct={deleteProduct}
          Overlay={setOverlay}
        />
        <Main addProduct={addProduct} />
      </div>
    </div>
  );
};

export default Home;
