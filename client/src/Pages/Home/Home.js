import React, { useEffect } from "react";
import Layout from "../../Layout";
import { SERVER_URL } from "../../Helpers/functions";
import axios from "axios";

const Home = () => {
  const getHello = async () => {
    const res = await axios.post(`${SERVER_URL}/list`, {
      columns: ["SecLvl", "Number", "NO"],
      dat: {
        SecLvl: "0",
        Number: "32",
        NO: "323",
      },
      table: "shop",
    });
    console.log(res);
  };
  useEffect(() => {
    getHello();
  }, []);
  return (
    <Layout>
      <div className="container">Dashboard</div>
    </Layout>
  );
};

export default Home;
