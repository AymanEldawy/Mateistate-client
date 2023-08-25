import React, { useEffect } from "react";
import Layout from "../../Layout";
import { SERVER_URL } from "../../Helpers/functions";
import axios from "axios";

const Home = () => {
  const getHello = async () => {
    const res = await axios(`${SERVER_URL}/hello`);
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
