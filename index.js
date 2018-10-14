import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import Banner from './Components/Banner.jsx'

console.log('foo');

const app = document.getElementById("app");

ReactDOM.render(     
    <Banner title="This Weeks Build Master Is" name="Adam Lammiman" image="http://127.0.0.1:8887/beaker.jpg" />,
    app        
  );

