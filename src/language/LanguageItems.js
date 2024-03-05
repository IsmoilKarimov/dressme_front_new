import { createContext, useState } from "react";

export const LanguageDetectorDress = createContext();
export const DressmeLanguage = ({ children }) => {
  const [languageDetector, setLanguageDetector] = useState({ typeLang: (localStorage.getItem("i18nextLng")) });
  return (
    <LanguageDetectorDress.Provider value={[languageDetector, setLanguageDetector]}>
      {children}
    </LanguageDetectorDress.Provider>
  );
}; 
 