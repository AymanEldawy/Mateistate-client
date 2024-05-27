import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PopupFormProvider } from "Hooks/usePopupForm";
import { ThemeProvider } from "Hooks/useTheme";
import Routes from "Routes/index";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Header from "Components/Layout/Header";
import Menu from "Components/Layout/Menu";
import Backdrop from "Components/Global/Backdrop";
import Sidebar from "Components/Layout/Sidebar";
import Footer from "Components/Layout/Footer";
import PopupForm from "Components/StructurePage/Forms/CustomForm/PopupForm";
import { VoucherEntriesViewProvider } from "Hooks/useVoucherEntriesView";
import { VoucherView } from "Components/StructurePage/Forms/Vouchers/Voucher/VoucherView";
import getMenu from "Helpers/menu";
import ProtectedRoute from "Pages/Auth/ProtectedRoute";
import Login from "Pages/Auth/Login";
import Cookies from "js-cookie";

function App() {
  const [mode, setMode] = useState("dark");
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState([]);

  const auth = Cookies.get('user_admin')

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
      {auth ? (
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
