import { createContext, useState } from "react";

export const MainPageAudioContext = createContext();

export const MainPageAudioContextProvider = ({ children }) => {
  const [playAudio, setPlayAudio] = useState(false);

  return (
    <MainPageAudioContext.Provider value={[playAudio, setPlayAudio]}>
      {children}
    </MainPageAudioContext.Provider>
  );
};
