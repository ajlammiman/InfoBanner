import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from '/Store/index.js'
import App from './Components/App.jsx'

const app = document.getElementById("app");

ReactDOM.render(<Provider store={store}><App /></Provider>,app);

