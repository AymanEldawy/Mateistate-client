import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ListsGuidsProvider } from "Hooks/useGuidList";
import { PopupFormProvider } from "Hooks/usePopupForm";
import { ThemeProvider } from "Hooks/useTheme";
import Routes from "Routes/index";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    // h-[95vh] overflow-y-auto overflow-x-hidden
    <div className="App ">
      <BrowserRouter>
        <ThemeProvider>
          <PopupFormProvider>
            <ListsGuidsProvider>
              <ToastContainer
                position="center"
                autoClose={2000}
                // hideProgressBar={false}
                // newestOnTop={false}
                // draggable
                theme="light"
              />
              <Routes />
            </ListsGuidsProvider>
          </PopupFormProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
