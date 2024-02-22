import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import SidebarAdmin from './components/SidebarAdmin'
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Routes,
  ScrollRestoration,
} from "react-router-dom";
import { dataService } from "./Api/Api";
import SingleService from "./components/SingleService";
import Pembayaran from "./pages/Pembayaran";
import { useState } from "react";
import Pesanan from "./pages/Pesanan";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
import Client from "./pages/Client";
import Admin from "./pages/Admin";
import Dashboard from "./components/Dashboard";
import Transaksi from "./components/Transaksi";
// import ProfileAdmin from "./components/ProfileAdmin";


const ClientLayout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const AdminLayout = () => {
 return (
  <div className="flex" >
    <SidebarAdmin/>
    <Outlet/>
  </div>
 )
}

function App() {

  const columns = [
    {
      name : 'No',
      selector : row => row.id,
     
    },
    {
      name : 'Nama',
      selector : row => row.nama
    },
    {
      name : 'Jenis',
      selector : row => row.jenis
    },
    {
      name : 'Catatan',
      selector : row => row.catatan
    },
    {
      name : 'Total Baju',
      selector : row => row.totalBaju,
     
    },
    
  ]

  const [pesanan, setPesanan] = useState([
    // {
    //   id: 1,
    //   nama: "Rivaldy Gunawan",
    //   jenis: "Pantopel",
    //   catatan: "",
    //   totalBaju: 1,
    //   select: true,
    // },
    // {
    //   id: 2,
    //   nama: "Muchlis basro",
    //   catatan: "",
    //   jenis: "Sneakers",
    //   totalBaju: 3,
    //   select: false,
    // },
    // {
    //   id: 3,
    //   nama: "Alfin Gunawan",
    //   jenis: "Running Shoues",
    //   catatan: "",
    //   totalBaju: 4,
    //   select: true,
    // },
  ]);

  const hapusPesanan = (id) => {
    setPesanan(pesanan.filter((pesan) => pesan.id !== id));
  };

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        {
          path: "/beranda",
          element: <Homepage />,
          
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
        {
          path: "/login",
          element: <Login />,
        },
        
        {
          path: "/client",
          element: <Client />,
        },
      ],
    },
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path:'/admin',
          element:<Admin />
        },
        {
          path:'/admin/dashboard',
          element:<Dashboard columns={columns} pesanan={pesanan} />
        },
        {
          path:'/admin/transaksi',
          element:<Transaksi />
        },{
          path:'/admin/login',
          element:<Login />
        }
        
        // {
        //   path:'/admin/profile',
        //   element:<ProfileAdmin />
        // }
  
  
      ],
    },
  ]);

  
  return (
    <div>
      <AuthContextProvider>
       <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}

export default App;
