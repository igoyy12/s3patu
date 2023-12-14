import React from "react";
import { LiaShoePrintsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full h-[12vh] bg-gradient-to-b from-white to-gray-600   font-titleFont overflow-y-hidden ">
      <div className="max-w-screen-xl h-[9vh] w-full sm:p-3  m-auto my-5 flex align-middle  items-center      ">
        <ul className="flex w-full align-middle justify-between content-center   text-justify p-6 xl:mx-[120px] cursor-pointer font-bold ">
          <Link to="/" className="hover:text-white  duration-500">
            Berada
          </Link>
          <ol className="hover:text-white  duration-500">Layanan</ol>
          <Link to="/">
            <h1 className="relative bottom-[11px] flex  text-4xl   font-medium ">
              Sepatuku
              <span>
                <LiaShoePrintsSolid />
              </span>
            </h1>
          </Link>

          <Link to="/pesanan" className="hover:text-white  duration-500">
            Pesanan
          </Link>
          <ol className="hover:text-white  duration-500">Masuk</ol>
        </ul>
      </div>
    </div>
  );
};

export default Header;
