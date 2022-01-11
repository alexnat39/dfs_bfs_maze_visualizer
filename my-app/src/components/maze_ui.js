import React, { useRef } from "react";
import "../styles/drawingPanel.scss";
import Row from "./row";

export default function DrawingPanel(props) {
  const { width, height } = props;

  const panelRef = useRef();

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} rowNum = {i}/>);
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      
    </div>
  );
}