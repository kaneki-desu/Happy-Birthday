
import React from 'react';
import './styling/Container.css';
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "https://hips.hearstapps.com/hmg-prod/images/birthday-boy-royalty-free-image-1653421737.jpg?crop=0.66635xw:1xh;center,top&resize=980:*" },
  { url: "../assets/bdaypics/image1.jpg" },
  { url: "../assets/bdaypics/image2.jpeg" },
  { url: "../assets/bdaypics/image3.jpg" },
];

const Container = () => {
  return (
    <div className="container">
      <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{objectFit:"contain"}}
      /><p className='text-7xl font-sans bolder topo'>BIRTHDAY PICS
        </p>
    </div>
      <div className="text-container">
      <div className="quote-mark">“</div>
      <p className="quote">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque id veniam reprehenderit exercitationem accusamus omnis soluta laudantium dignissimos rerum! Nulla voluptas eos consequatur?</p>
      <p className="speaker ">—Mahatma Gandhi</p>
    </div>
    </div>
  );
};

export default Container;

