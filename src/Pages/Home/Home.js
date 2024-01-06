import { DashboardGridLayout } from "./DashboardGridLayout";
import Layout from "Layout";

const Home = () => {
  return (
    <Layout containerClassName="!min-h-screen" bodyClassName="pb-4">
      <DashboardGridLayout />
    </Layout>
  );
};

export default Home;
