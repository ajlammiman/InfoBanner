import React from "react";
import ReactDOM from "react-dom";

const Banner = (props) => 
        <div>
            <h1 id="title">{props.title}</h1>
            <div>
                <img src={props.image} />
            </div>
            <div>
                <h2 id="name">{props.name}</h2>
                <div><a href="">previous build master</a> <a href="">next build master</a></div>
            </div>
        </div>    

export default Banner;