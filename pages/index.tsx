import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Main from "../components/main";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  const [overlay, setOverlay] = useState<boolean>(false);
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
        <Navbar Overlay={setOverlay} />
        <Main />
      </div>
    </div>
  );
};

export default Home;
