import { DashboardGridLayout } from "./DashboardGridLayout";
import Layout from "Components/Layout";

const Home = () => {
  return (
    <div className={`main-content my-8 flex-1 !min-h-screen pb-4`}>
      <DashboardGridLayout />
    </div>
  );
};

export default Home;
