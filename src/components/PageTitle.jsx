import React from 'react'
import './PageTitle.css'

export const PageTitle = (props) => {
    return (
        <div className="title-container">
                <h1 className="ttitle">
                    {props.ttl1}
                    <span> {props.ttl2}</span>
                </h1>
                <h1 className="title-bg">{props.ttl3}</h1>
        </div>
    )
}
