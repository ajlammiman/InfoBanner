import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

const Title = (props) => {
    return (
        <div>
            <h1>This weeks Build Master is</h1>
            <div>
                <img src="http://127.0.0.1:8887/seagull-249638_960_720.jpg" />
            </div>
            <div>
                <h2>Adam Lammiman</h2>
                <div><a href="">previous build master</a> <a href="">next build master</a></div>
            </div>
        </div>    
    );
}


const app = document.getElementById("app");

ReactDOM.render(     
    <Title />,
    app        
  );

