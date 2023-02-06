import React from "react";
import { useState } from 'react';


export function TrafficLightContainer () {
    const [colorOn, setColorOn] = useState("");
    const colors = ["red", "yellow", "green"];
    function randomColor () {
        return colors[Math.floor(Math.random()*colors.length)]
    }
    return (
        <React.Fragment>
            <div className="lightContainer bg-dark">
                <div 
                    className={"red light" + (colorOn == "red" ? " selected" : "")} 
                    onClick={() => {return setColorOn("red")}}>
                </div>
                <div 
                    className={"yellow light" + (colorOn == "yellow" ? " selected" : "")} 
                    onClick={() => {return setColorOn("yellow")}}>
                </div>
                <div 
                    className={"green light" + (colorOn == "green" ? " selected" : "")} 
                    onClick={() => {return setColorOn("green")}}>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button 
                    type="button" 
                    className="btn btn-info text-center" 
                    onClick={() => {return setColorOn(randomColor)}}>
                        Random Color
                </button>
            </div>
        </React.Fragment>
    )
}