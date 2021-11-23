import React from 'react'
import './Box.css'
export const Box = (props) => {
    return (
      <div className="box-st">
        <h3>{props.value}</h3>
        <p>{props.title}</p>
      </div>
    );
}
