import React, { useContext, useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import Timer from '../component/clockdown'
import { ConfettiContext, DisplayContext } from '../hooks/ContextApi/states';
import {AnimatePresence, motion } from "framer-motion";
import Dashboard from './dashboard';
import WishFont from '../component/WishFont';

const Homepage = () => {
    const {showCountdown, setShowCountdown}=useContext(DisplayContext)
    const [confettiOn,setConfetti]=useState(false);
    const duration=1000;//milisec
    useEffect(()=>{
        if(showCountdown==false){
            setTimeout(()=>{
                setConfetti(true)
            },duration)
            }
        setTimeout(()=>{
            setConfetti(false)
        },3000)
    },[showCountdown])
  return (
    <>
    <Confetti opacity={confettiOn?1:0} className={(confettiOn? null:`opacity-0` )+`transition duration-200`} />     
    <motion.div
    initial={{
        translateY:0
    }}
    animate={{
        translateY:showCountdown?0:-1080
    }}
    transition={{
        duration:duration/1000
    }}
    
    on
    className={`z-50 w-full h-full bg-black absolute flex justify-center align-middle transition-all duration-200` }
    >
        <Timer  />
    </motion.div>
    <Dashboard/>
</>
  )
}

export default Homepage