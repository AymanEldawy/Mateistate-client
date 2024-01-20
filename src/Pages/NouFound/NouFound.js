import BlockPaper from "Components/Global/BlockPaper";
import { NotAllowIcon } from "Helpers/Icons";
import Layout from "Components/Layout";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NouFound = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="container">
        <main className="shadow p-4 flex flex-col gap-4 items-center justify-center h-96 bg-red-100">
          <NotAllowIcon className="w-20 h-20 scale-150 text-red-500" />
          <p className="lg:text-2xl text-lg capitalize text-red-500 font-medium">
            {t("not_found")}
          </p>
          <Link to="/" className="bg-primary text-white p-2 rounded-md text-xs capitalize">{t('back_to_home')}</Link>
        </main>
      </div>
    </Layout>
  );
};

export default NouFound;
