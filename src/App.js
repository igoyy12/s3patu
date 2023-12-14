import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { dataService } from "./Api/Api";
import SingleService from "./components/SingleService";
import Pembayaran from "./pages/Pembayaran";
import { useState } from "react";
import Pesanan from "./pages/Pesanan";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const [pesanan, setPesanan] = useState([
    {
      id: 1,
      nama: "Rivaldy Gunawan",
      jenis: "Pantopel",
      catatan: "tolong disetrika",
      totalBaju: 3,
      select: true,
    },
    {
      id: 2,
      nama: "Muchlis basro",
      catatan: "tolong disetrika",
      jenis: "Sneakers",
      totalBaju: 4,
      select: false,
    },
    {
      id: 3,
      nama: "Alfin Gunawan",
      jenis: "Running Shoues",
      catatan: "tolong disetrika",
      totalBaju: 1,
      select: true,
    },
  ]);

  const hapusPesanan = (id) => {
    setPesanan(pesanan.filter((pesan) => pesan.id !== id));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
          loader: dataService,
        },
        {
          path: "/layanan/:id",
          element: <SingleService />,
        },
        {
          path: "/pesanan",
          element: <Pesanan pesanan={pesanan} onDelete={hapusPesanan} />,
        },

        {
          path: "/pembayaran",
          element: <Pembayaran />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
