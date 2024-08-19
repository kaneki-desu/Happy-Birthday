import React from 'react'
import styling from "./styling/WishFont.module.css"
import {useTypewriter, Cursor} from 'react-simple-typewriter'
const WishFont = () => {
    
    const [text]=useTypewriter({
        words:['Happy\nBirthday'],
        loop:{},
        typeSpeed:220,
        deleteSpeed:10,
        onLoopDone:()=>{console.log("loop done")}
    });
  return (
    <div className={styling.topography}><span>{text}</span>
    {/* <span style={{fontFamily: "Georgia",textAlign:"top"}}  ><Cursor cursorStyle={"_"}/></span> */}
    </div>
  )
}

export default WishFont