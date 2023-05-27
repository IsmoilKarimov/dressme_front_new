import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DressMenu } from "./ContextHook/ContextMenu";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <DressMenu>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DressMenu>
  </QueryClientProvider>
  // </StrictMode>
);
