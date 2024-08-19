import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import cake from "../assets/strawberry_cake-removebg-preview.png";
import man from "../assets/man_without bg.png";
import "./styling/parallax.css"
import style from "./styling/BirthdayCard.module.css"
import WishFont from './WishFont';

import flags from '../assets/pendant_flag-removebg-preview.png'
import Container from './infoImage';
import BirthdayCard from './BirthdayCard';
import redBg from "../assets/redBg.jpg"
import redBg2 from "../assets/redBg2.jpg"
import giftBg from "../assets/present-space-left.jpg"
import { useState } from 'react';
const ManPopUp = () => {
  const styleManHover={
    transform:' translateY(00px)',
    visibility: "visible",
    transition: "200ms",
    scale:"0.5",
  }
  const [isHovered,setHovered]=useState(true);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
     <Parallax pages={3}  id='animation'
     factor={2} 
     style={{top:"0", left:"0",
      backgroundImage:`url(${redBg})`,
      backgroundSize:"cover",
    }}
     >
          
          <ParallaxLayer 
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage:`url(${redBg})`,
              backgroundSize:"cover",
              zIndex:"15"
            }}
          >
              {/* <img src={flags} alt="banner" className="w-4/5 fixed z-20 right-0 -top-16 rotate-12"/> */}
            <div className='w-screen h-screen'> <WishFont /></div> 
            <div className='h-screen flex justify-around px-28'>
                <div className="leftside relative z-50 ">
            <img src={cake} className='relative w-2/7 parallax_layer z-50 cake' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
            <img src={man} width={400}  className='scale-50 top-0 absolute man' style={isHovered?styleManHover:null}/>
                </div>
                <div className="rightside sticky z-50 ">
                  <BirthdayCard className="top-24 z-50" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} />
                </div>
            </div>
            
          </ParallaxLayer>
          {/* <ParallaxLayer
          offset={1} 
          sticky={{start:0.5,end:1.5}}
          className='top-50'
          >
            <img src={cake} className='w-3/7  parallax_layer '/>
          </ParallaxLayer> */}
          {/* <ParallaxLayer 
            offset={1} className=' parallax_layer p scale-75 z-20' 
            sticky={{start:0.9,end:1.7}}
            speed={1}
          >
              <img src={man} width={400}  className='scale-50' />
          </ParallaxLayer> */}
          {/* <ParallaxLayer 
            offset={1} className=' parallax_layer bottom-0 z-30'
            sticky={{start:0.5,end:2.0}}
            onScroll={()=>{setHovered(true)}}
          > 
          </ParallaxLayer> */}
             
          {/* <ParallaxLayer offset={1} className='parallax_layer_right bottom-0 z-30'
            // sticky={{start:1,end:2.0}}
            
          >
              <BirthdayCard isHovered={isHovered}/>
          </ParallaxLayer> */}
          {/* <ParallaxLayer offset={3}>
              <Container />
          </ParallaxLayer> */}
          <ParallaxLayer offset={0.999} 
            speed={2}
            style={{
              backgroundColor:"rgpa(0,0,0,0.1)",
            }}
            className='z-20 w-2'
          >
              <div className={style["balloon-1"]}
                style={{left:"10%",top:"0"}}
              > </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.999}
          style={{backgroundColor:"rgpa(0,0,0,0.1)",}}
          speed={4}
          className='z-20 w-2'>
              <div className={style["balloon-2"]}
                style={{left:"90%" ,top:"20px" ,scale:"1.5"}}
              ></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.999} speed={1.5}
          className='z-20 w-2'>
              <div className={style["balloon-3"]}
                style={{left:"40%" ,top:"20px" ,scale:"1.5"}}
              ></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.05} speed={1.5}
          className='z-20 w-2'
          >
              <div className={style["balloon-4"]}
                style={{left:"60%" ,top:"20px" ,scale:"1.5"}}
              ></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.05} speed={3.5}
          className='z-20 w-2'>
              <div className={style["balloon-1"]}
                style={{left:"10%" ,top:"20px" ,scale:"1.5"}}
              ></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.95} 
          speed={0}
          className='w-full z-50 flex align-middle '
          ><Container />
          </ParallaxLayer>
                  
                  <ParallaxLayer offset={2}></ParallaxLayer>
    </Parallax>
    </>
  )
}

export default ManPopUp;