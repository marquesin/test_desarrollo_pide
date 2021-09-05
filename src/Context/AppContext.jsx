import { useState, createContext } from "react";

export const AppContext= createContext();

export const AppProvider = (props) => {
    const [catActiva, setCatActiva]= useState(0);
    return(
        <AppContext.Provider value={{catActiva, setCatActiva}}>{props.children}</AppContext.Provider>
    );
};