import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DressMenu } from "./ContextHook/ContextMenu";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomeMainDataContextProvider } from "./ContextHook/HomeMainData";
import { SliderPhotosColorContextProvider } from "./ContextHook/SliderPhotosColor";
import { SectionsMainDataContextProvider } from "./ContextHook/SectionsData";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <DressMenu>
      <BrowserRouter>
        <HomeMainDataContextProvider>
          <SliderPhotosColorContextProvider>
            <SectionsMainDataContextProvider>
              <App />
            </SectionsMainDataContextProvider>
          </SliderPhotosColorContextProvider>
        </HomeMainDataContextProvider>
      </BrowserRouter>
    </DressMenu>
  </QueryClientProvider>
  // </StrictMode>
);
