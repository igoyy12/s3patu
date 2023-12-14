import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const Pembayaran = () => {
  const [toogle, setToogle] = useState(false);
  const [toogleSelesaiPembayaran, setToogleSelesaiPembayaran] = useState(false);

  const toogleClick = () => {
    setToogle((toogle) => !toogle);
  };

  const selesaiPembayaran = () => {
    setToogleSelesaiPembayaran(
      (toogleSelesaiPembayaran) => !toogleSelesaiPembayaran
    );
  };
  return (
    <div className="h-auto flex flex-col ">
      <div className=" pb-10  flex items-center flex-col    ">
        <div className=" max-w-screen-xl x ">
          <div className="flex flex-col  p-10  w-full h-auto   rounded-xl gap-5  ">
            <h1 className="font-bold text-xl text-center">PEMBAYARAN </h1>
            <div className="flex flex-col gap-4  ">
              <div className="flex flex-col gap-4 ">
                <div className=" h-[59vh]  ">
                  <div className="flex flex-col gap-8 ">
                    <div className="flex justify-center  rounded-md cursor-point bg-cover  cursor-pointer items-center align-middle  ">
                      <img
                        src="./assets/qris-bayar.jpg"
                        alt="qris"
                        className="h-[50vh]"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      {toogleSelesaiPembayaran === false ? (
                        <button
                          className="bg-gray-400 border-black border-[1px]  rounded-md p-4"
                          onClick={selesaiPembayaran}
                        >
                          Selesaikan Pembayaran
                        </button>
                      ) : (
                        <button
                          type="button"
                          class="flex items-center rounded-lg bg-gray-400 px-4 py-2 text-white"
                          disabled
                        >
                          <svg
                            class="mr-3 h-5 w-5 animate-spin text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              class="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              stroke-width="4"
                            ></circle>
                            <path
                              class="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span class="font-medium"> Processing... </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to="/pesanan">
        <div className="flex justify-start  absolute bottom-5 p-6 items-center cursor-pointer align-middle gap-2 hover:text-gray-500 ">
          <BsArrowLeft />
          <h3>Kembali ke Pesanan</h3>
        </div>
      </Link>
    </div>
  );
};

export default Pembayaran;
