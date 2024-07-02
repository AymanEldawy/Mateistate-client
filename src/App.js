import Routes from "Routes/index";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Header from "Components/Layout/Header";
import Menu from "Components/Layout/Menu";
import Backdrop from "Components/Global/Backdrop";
import Sidebar from "Components/Layout/Sidebar";
import Footer from "Components/Layout/Footer";
import getMenu from "Helpers/menu";
import Login from "Pages/Auth/Login";
import Cookies from "js-cookie";
import useGlobalOptions from "Hooks/useGlobalOptions";

function App() {
  const [mode, setMode] = useState("dark");
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState([]);
  const { user } = useGlobalOptions();

  const auth = Cookies.get("tenant_id");

  let resize = () => {
    if (window.innerWidth > 1024 && open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const getMen = async () => {
      const menu = await getMenu();
      setMenu(menu);
    };
    getMen();
  }, []);

  return (
    <div id="layout-wrapper" className={"flex flex-col h-screen"}>
      {auth || auth ? (
        <>
          <Header setOpen={setOpen} mode={mode} setMode={setMode} />
          <Menu menu={menu} />
          <Backdrop open={open} onClose={() => setOpen(false)} />
          <Sidebar menu={menu} setOpen={setOpen} open={open} />
          <Routes />
          <Footer />
        </>
      ) : (
        <Login />
      )}{" "}
    </div>
  );
}

export default App;
