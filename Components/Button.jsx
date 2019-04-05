import React from "react";

const Button = (props) =>
    <div>
        <a href="#" className={props.class} onClick={props.click}>{props.text}</a>
    </div>

export default Button;
    