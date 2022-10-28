import React from "react"
import "./css/Slider.css"
import ThreeSixty from "react-360-view"

function Slider({ style }) {
  return (
    <div className="slider-container" style={style}>
      <ThreeSixty
        amount={33}
        imagePath="/threesixty/01"
        fileName="img{index}.jpg?v1"
      />
    </div>
  )
}

export default Slider
