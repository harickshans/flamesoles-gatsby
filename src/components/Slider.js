import React from "react"
import "./css/Slider.css"
import ThreeSixty from "react-360-view"

function Slider({ style }) {
  return (
    <div className="slider-container" style={style}>
      <ThreeSixty
        className="slider"
        amount={33}
        imagePath="https://majestic-malabi-eba784.netlify.app/01/"
        fileName="img{index}.jpg"
      />
    </div>
  )
}

export default Slider
