import React, { useState } from "react";
import "../styles/pixel.scss";

export default function Pixel(props) {

  const { columnNum, rowNum } = props;
  
  const [pixelColor, setPixelColor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  function applyColor() {
    if (pixelColor === "#fff") {
      setPixelColor("#51b3a4");
    } else {
      setPixelColor("#fff");
    }
    console.log(`column: ${columnNum}\nrow: ${rowNum}`);
   // setCanChangeColor(false);
  }

  function changeColorOnHover() {
    // setOldColor(pixelColor);
    // setPixelColor("#51b3a4");
    if (pixelColor === "#fff") {
      setOldColor("#fff");
      setPixelColor("#51b3a4");
    } else {
      setOldColor("#51b3a4");
      setPixelColor("#fff");
    }
  
  }

  function resetColor() {
    // if (canChangeColor) {
    //   setPixelColor(oldColor);
    // }

    // setCanChangeColor(true);
  }

  return (

    <div
      className="pixel"
      onClick={applyColor}
      onDrag={resetColor}
      onDragEnter={applyColor}

      style={{ backgroundColor: pixelColor, border: "1px solid lightgrey"}}
    ></div>
  );
}