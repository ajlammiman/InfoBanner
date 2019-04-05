import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { nextBuildMaster } from "../actions/index";

const Store = createStore(rootReducer);

window.store = Store;
window.nextBuildMaster = nextBuildMaster;

export default Store;