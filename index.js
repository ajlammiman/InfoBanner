import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import BuildMaster from './Components/BuildMaster.jsx'

console.log('foo');

const app = document.getElementById("app");

ReactDOM.render(     
    <BuildMaster />,
    app        
  );

