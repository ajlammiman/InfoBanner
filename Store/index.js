import { createStore, applyMiddleware, compose } from "redux";
import {GetData} from "../Middleware/index";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const storeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const Store = createStore(rootReducer, storeEnhancers(applyMiddleware(GetData, thunk)));

export default Store;