import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

const Title = (props) => {
    return (
        <div>
            <h1>This weeks Build Master</h1>
        </div>    
    );
}


const app = document.getElementById("app");

ReactDOM.render(     
    <Title />,
    app        
  );

