import { createContext, useState } from "react";

export const ConfettiContext = createContext();

export const SwitchProvider =({children})=>{
    const [confettiOn,setConfetti]=useState(false);
    return <ConfettiContext.Provider value={{confettiOn, setConfetti}} >
        {children}
    </ConfettiContext.Provider>
} 

export const DisplayContext = createContext();
export const DisplayProvider =({children})=>{
    const [showCountdown,setShowCountdown]=useState(true)//isko true krna h
    return <DisplayContext.Provider value={{showCountdown,setShowCountdown}}>
        {children}
    </DisplayContext.Provider>
}