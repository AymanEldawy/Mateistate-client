import "./i18n.js";
import Loading from "Components/Loading/Loading";
import { AlertProvider } from "Context/AlertContext";
import { ListsGuidsProvider } from "Context/ListsGuidsContext";
import { PopupFormProvider } from "Context/PopupFormContext";
import { ThemeProvider } from "Context/ThemeContext";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ThemeProvider>
          <PopupFormProvider>
            <AlertProvider>
              <ListsGuidsProvider>
                {/* <QueryClientProvider client={queryClient}> */}
                  <App />
                {/* </QueryClientProvider> */}
              </ListsGuidsProvider>
            </AlertProvider>
          </PopupFormProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
