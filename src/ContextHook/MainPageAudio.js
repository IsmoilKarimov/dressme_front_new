import { createContext, useEffect, useRef, useState } from "react";
import MainAudio from "../audios/dressMeAudio.mp3";

export const MainPageAudioContext = createContext();

export const MainPageAudioContextProvider = ({ children }) => {
  const [playAudio, setPlayAudio] = useState(false);

  const AudioRef = useRef();

  useEffect(() => {
    if (playAudio) {
      if (AudioRef.current) {
        AudioRef.current.play();
      }
    } else {
      if (AudioRef.current) {
        AudioRef.current.pause();
      }
    }
  }, [playAudio]);

  // Audio ----------------------------

  return (
    <MainPageAudioContext.Provider value={[playAudio, setPlayAudio]}>
      {children}
      <audio loop ref={AudioRef} src={MainAudio}></audio>
    </MainPageAudioContext.Provider>
  );
};
