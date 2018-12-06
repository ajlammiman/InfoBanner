import React from "react";
import ReactDOM from "react-dom";

const Button = (props) =>
    <div>
        <a href="#" className={props.class}>{props.text}</a>
    </div>

export default Button;
    