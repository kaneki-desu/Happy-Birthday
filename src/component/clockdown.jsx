import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
 import '../index.css'
import dayjs from 'dayjs'
 import '@leenguyen/react-flip-clock-countdown/dist/index.css'
import { useContext } from "react";
import { ConfettiContext, DisplayContext, SwitchProvider } from "../hooks/ContextApi/states";
import { useNavigate } from "react-router-dom";

 const Timer = () => {
    const navigate=useNavigate();
    const birthdate="2024-08-20";
    var TimeDiff=dayjs(birthdate).unix()-dayjs().unix();
    // console.log(dayjs().unix()," fag",dayjs.unix(TimeDiff))
    const {showCountdown, setShowCountdown}=useContext(DisplayContext)

    // const DisplayConfetti=()=>{
    //     //make confetti component visible using setStates in parent
    //     setConfetti(true);
    //     setTimeout(()=>{
    //         setConfetti(false)
    //     },7*1000);
    //     console.log(confettiOn);
    // }
    const AfterCountdown=()=>{
        setShowCountdown(false);
        // DisplayConfetti();

    }
    // console.log(confettiOn);  
     return (
         <section className="flex flex-col justify-center items-center h-screen md:w-screen md:h-screen">
             <div className="bg-black/70 absolute w-full h-full"></div>
             {/* <img className="w-full h-full object-cover" src={Back} alt="" /> */}
             <div className="absolute flex flex-col items-center text-center">
                 <h1 className="text-[2rem] mb-[1rem]">Launching Soon</h1>
                 <h3 className="font-light max-w-[300px] md:max-w-[450px] mb-[3rem]">Leave your email and we'll get across to you once we launch!!!</h3>

                 <FlipClockCountdown 
                    //  to={new Date().getTime()+ 2*24*3600*1000} //two days
                     to={new Date().getTime()+ 5*1000} 
                     labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                     duration={0.5} 
                     onComplete={AfterCountdown}
                 />
             </div>
         </section>
     )
 }

 export default Timer