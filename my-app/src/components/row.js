import "../styles/row.scss";
import Pixel from "./pixel";
import React, { useState } from "react";


export default function Row(props) {
  const { width, rowNum } = props;
  let pixels = [];

  for (let i = 0; i < width; i++) {
    console.log(width);
    pixels.push(<Pixel key={i} columnNum={i} rowNum={rowNum} />);

  }

  return <div className="row">{pixels}</div>;
}