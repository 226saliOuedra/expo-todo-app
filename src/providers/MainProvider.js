import { createContext, useState } from "react";

const DefaultValue = {
    isDark: false,
};

export const MainContext = createContext(DefaultValue);

export const MainProvider = ({children, isDark = false}) =>{
    const [currentMode, setCurrentMode]= useState(isDark);
    const toggleMode = () => {
        setCurrentMode(!currentMode);
    };
    return (
        <MainContext.Provider value= {{ isDark: currentMode, toggleMode: toggleMode}}>
           {children}
        </MainContext.Provider>

    );
}