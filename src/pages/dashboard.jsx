import React, { useContext } from 'react'
import flags from '../assets/pendant_flag-removebg-preview.png'
// import { ReactFloatingBalloons } from "react-floating-balloons";
import { DisplayContext } from '../hooks/ContextApi/states';
import ManPopUp from '../component/manPopup';
import Container from '../component/infoImage';
const Dashboard = () => {
    console.log("Should display")
    const {showCountdown}=useContext(DisplayContext)
  return (
    <>
    {/* <Container/> */}
    <ManPopUp />
    {/* {!showCountdown&&<ReactFloatingBalloons
        className="duration-100"
        count={3}
        msgText=""
        colors={["yellow", "purple","red","blue","green"]}
        popVolumeLevel={0.5}
        animation={5}
      />} */}
      
    </>
  )
}

export default Dashboard