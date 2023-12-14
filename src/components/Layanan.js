import React from "react";
import CardLayanan from "./CardLayanan";

const Layanan = ({ layanan }) => {
  // const actionKlik = () => {
  //   alert("tai");
  // };
  return (
    <div className="flex flex-col gap-[5vh] ">
      <div className="flex  flex-col items-center align-middle justify-center pt-[25vh] gap-2">
        <h2 className="text-2xl font-bold ">Layanan</h2>
        <span className="text-gray-600">
          Ingin memperbaikki sepatu sekaligus membersihkannya? Kami bisa!
        </span>
      </div>
      <div className=" mx-auto  flex gap-10 justify-center pb-10">
        {layanan.map((item) => (
          <CardLayanan key={item.id} layanan={item} />
        ))}
      </div>
    </div>
  );
};

export default Layanan;
