import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./i18n.js";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PopupForm from "Components/StructurePage/Forms/CustomForm/PopupForm";
import { VoucherView } from "Components/StructurePage/Forms/Vouchers/Voucher/VoucherView";
import { VoucherEntriesViewProvider } from "Hooks/useVoucherEntriesView";
import { ToastContainer } from "react-toastify";
import { PopupFormProvider } from "Hooks/usePopupForm";
import { ThemeProvider } from "Hooks/useTheme";
import { BrowserRouter } from "react-router-dom";
import { GlobalOptionsProvider } from "Hooks/useGlobalOptions";

const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <GlobalOptionsProvider>
            <PopupFormProvider>
              <VoucherEntriesViewProvider>
                <ToastContainer
                  position="top-center"
                  autoClose={2000}
                  style={{
                    maxWidth: 500,
                    width: "80%",
                  }}
                  newestOnTop={true}
                  theme="light"
                />
                <App />
                <PopupForm />
                <VoucherView />
              </VoucherEntriesViewProvider>
            </PopupFormProvider>
          </GlobalOptionsProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
