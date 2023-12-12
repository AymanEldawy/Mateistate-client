import { BrowserRouter } from "react-router-dom";

import { AlertProvider } from "Hooks/useAlert";
import { ListsGuidsProvider } from "Hooks/useGuidList";
import { PopupFormProvider } from "Hooks/usePopupForm";
import { ThemeProvider } from "Hooks/useTheme";
import Routes from "Routes/index";

function App() {
  return (
    // h-[95vh] overflow-y-auto overflow-x-hidden
    <div className="App ">
      <BrowserRouter>
        <ThemeProvider>
          <PopupFormProvider>
            <AlertProvider>
              <ListsGuidsProvider>
                <Routes />
              </ListsGuidsProvider>
            </AlertProvider>
          </PopupFormProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
