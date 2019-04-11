import Rota from '../Data/buildmaster.rota.js';
import {CHANGE} from '../Constants/action-types';
import {DATA_LOAD} from '../Constants/action-types';

var initialState = Rota.content[0];

const RootReducer = (state = initialState, action={}) => {
    switch(action.type) {
        case CHANGE:
        case DATA_LOAD:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
export default RootReducer;