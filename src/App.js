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

function App() {
  const [mode, setMode] = useState("dark");
  const [open, setOpen] = useState(false);

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

  return (
    // h-[95vh] overflow-y-auto overflow-x-hidden
    <div className="App ">
      <BrowserRouter>
        <ThemeProvider>
          <PopupFormProvider>
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
                <Menu />
                <Backdrop open={open} onClose={() => setOpen(false)} />
                <Sidebar setOpen={setOpen} open={open} />
                <Routes />
                <Footer />
              </div>
              {/* <Alert  /> */}
              <PopupForm />
            </ListsGuidsProvider>
          </PopupFormProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
