import React, { useEffect } from "react";
import Layout from "../../Layout";
import { SERVER_URL } from "../../Helpers/functions";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { DashboardGridLayout } from "./DashboardGridLayout";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <DashboardGridLayout />
    </Layout>
  );
};

export default Home;
