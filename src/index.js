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
import { HomeFilterContextProvider } from "./ContextHook/HomeFilterContext";
import { MobileSelectedDataContextProvider } from "./ContextHook/mobileSelectedData";
import { UserRefreshTokenContextProvider } from "./ContextHook/UserRefreshToken";
import { DressmeLanguage } from "./language/LanguageItems";
import './language/i18n'
import { DressmeSeason } from "./ContextHook/SeasonContext";
import { LocationId } from "./ContextHook/LocationId";
import { MapsShopsList } from "./ContextHook/MapsShopsList";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  <QueryClientProvider client={queryClient}>
    <MainPageAudioContextProvider>
      <DressmeLanguage>
        <DressmeSeason>
          <LocationId>
            <DressMenu>
              <BrowserRouter>
                <UserRefreshTokenContextProvider>
                  <HomeMainDataContextProvider>
                    <MapsShopsList>
                      <SliderPhotosColorContextProvider>
                        <ProfileDataContextProvider>
                          <HomeFilterContextProvider>
                            <MobileSelectedDataContextProvider>
                              <App />
                            </MobileSelectedDataContextProvider>
                          </HomeFilterContextProvider>
                        </ProfileDataContextProvider>
                      </SliderPhotosColorContextProvider>
                    </MapsShopsList>
                  </HomeMainDataContextProvider>
                </UserRefreshTokenContextProvider>
              </BrowserRouter>
            </DressMenu>
          </LocationId>
        </DressmeSeason>
      </DressmeLanguage>
    </MainPageAudioContextProvider>
  </QueryClientProvider>
  // </StrictMode>
);
