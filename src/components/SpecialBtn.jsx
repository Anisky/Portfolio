import React from 'react'
import './SpecialBtn.css'

export const SpecialBtn = (props) => {
    return (
        <button className="sub-btn button is-rounded">
                            <span className="btn-text ">{props.content}</span>
                            <span className="icon btn-icon ">
                                <i className={props.iconClass}></i>
                            </span>
                            
        </button>
    )
}
