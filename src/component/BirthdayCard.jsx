import React from 'react'
import style from "./styling/BirthdayCard.module.css"
const BirthdayCard = ({isHovered}) => {
  console.log(isHovered)
  const hoveredStyle={
    transform: "perspective(2500px) rotate(5deg)",
    boxShadow: "inset 100px 20px 100px rgba(0, 0, 0, 0.2), 0 10px 100px rgba(0, 0, 0, 0.5)",
    visibility: "hidden",
  }
  return (
    // <div className={style.body}>

    <div className={style.birthdayCard} style={isHovered?hoveredStyle:null} >
      <div className={style.cardFront}>
        <h3 className={style.happy}>HAPPY BIRTHDAY</h3>
        <div className={style.balloons}>
          <div className={style["balloon-1"]}></div>
          <div className={style["balloon-2"]}></div>
          <div className={style["balloon-3"]}></div>
          <div className={style["balloon-4"]}></div>
        </div>
      </div>
      <div className={style.cardInside}>
        <h3 className={style.back}>HAPPY BIRTHDAY</h3>
        <p>Dear Friend,</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          expedita debitis esse quaerat adipisci iste illum placeat incidunt
          reprehenderit laudantium!
        </p>
        <p className={style.name}>xxx</p>
      </div>
    </div>
    // </div>
  )
}

export default BirthdayCard