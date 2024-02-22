import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useState } from "react";

const SinglePesanan = ({ pesan, onDelete, onToggle, select }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // const totalHarga = pesan.totalBaju + newPrice

  console.log(select);

  return (
    <div className=" h-auto w-full flex flex-col bg-gray-300 rounded-xl gap-2 p-4 shadow-xl   duration-300 ">
      <div
        className="flex flex-row cursor-pointer w-full gap-8 items-center  "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onDoubleClick={() => onToggle(pesan.id)}
      >
        {/* {select ? (
          <div className=" h-[20px] w-[20px] rounded-full border-[2px] bg-green-700 border-black "></div>
        ) : (
          <div className=" h-[20px] w-[20px] rounded-full border-[2px]  border-black "></div>
        )} */}
        <div className="flex  w-full ">
          <div className="w-[80%]">
            <h1 className="font-semibold xl:text-md md:text-md">{`Jenis Sepatu : ${pesan.jenis}`}</h1>

            <p className="italic"> {`Keluhan : ${pesan.catatan} `}</p>
            <h3 className="font-semibold">{`Total Baju : ${pesan.totalBaju}`}</h3>
          </div>
          <div className="w-[20%] flex items-center justify-center">
            {isHovering && (
              <RiDeleteBin2Line
                className="text-black text-3xl duration-300 cursor-pointer"
                onClick={() => onDelete(pesan.id)}
              />
            )}
          </div>
        </div>
      </div>

      <div className=" bg-gray-400 w-full flex justify-between  py-1 px-2 rounded-b-md ">
        <h3 className="text-right text-black  ">Harga :</h3>
        <h3 className="text-right text-black  ">Rp.25000</h3>
      </div>
    </div>
  );
};

export default SinglePesanan;
