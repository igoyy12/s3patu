import JumboAbout from "../components/JumboAbout";
import Layanan from "../components/Layanan";
import supabase from "../config/supabaseClient";

import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const Homepage = () => {
  console.log(supabase)
  const [layanan, setLayanan] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setLayanan(data);
  }, [data]);
  return (
    <div>
      <JumboAbout />
      <Layanan layanan={layanan} />
    </div>
  );
};

export default Homepage;
