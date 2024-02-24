import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ListsGuidsProvider } from "Hooks/useGuidList";
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
import { VoucherView } from "Components/StructurePage/Forms/Vouchers/VoucherView";
// import { INSERT_DEFAULT_DATA } from "Helpers/GENERATE_STARTING_DATA";
import getMenu from "Helpers/menu";
let called = true
function App() {
  const [mode, setMode] = useState("dark");
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState([])

  let resize = () => {
    if (window.innerWidth > 1024 && open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if(called) {
      called = false
      // INSERT_DEFAULT_DATA();
    }

  }, [])

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
    getMen()
  }, []);


  return (
    // h-[95vh] overflow-y-auto overflow-x-hidden
    <div className="App ">
      <BrowserRouter>
        <ThemeProvider>
          <PopupFormProvider>
            <VoucherEntriesViewProvider>
              <ListsGuidsProvider>
                <ToastContainer
                  position="top-center"
                  autoClose={2000}
                  // hideProgressBar={false}
                  // newestOnTop={false}
                  // draggable
                  theme="light"
                />
                <div id="layout-wrapper" className={"flex flex-col h-screen "}>
                  <Header setOpen={setOpen} mode={mode} setMode={setMode} />
                  <Menu menu={menu} />
                  <Backdrop open={open} onClose={() => setOpen(false)} />
                  <Sidebar menu={menu} setOpen={setOpen} open={open} />
                  <Routes />
                  <Footer />
                </div>
                {/* <Alert  /> */}
                <PopupForm />
                <VoucherView />
              </ListsGuidsProvider>
            </VoucherEntriesViewProvider>
          </PopupFormProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
