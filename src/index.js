import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DressMenu } from "./ContextHook/ContextMenu";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HomeMainDataContextProvider } from "./ContextHook/HomeMainData";
import { SliderPhotosColorContextProvider } from "./ContextHook/SliderPhotosColor";
import { ProfileDataContextProvider } from "./ContextHook/ProfileContext";
import { MainPageAudioContextProvider } from "./ContextHook/MainPageAudio";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <DressMenu>
      <BrowserRouter>
        <HomeMainDataContextProvider>
          <SliderPhotosColorContextProvider>
            <ProfileDataContextProvider>
              <MainPageAudioContextProvider>
                <App />
              </MainPageAudioContextProvider>
            </ProfileDataContextProvider>
          </SliderPhotosColorContextProvider>
        </HomeMainDataContextProvider>
      </BrowserRouter>
    </DressMenu>
  </QueryClientProvider>
  // </StrictMode>
);
