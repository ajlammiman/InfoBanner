import Rota from '../Data/buildmaster.rota.js';
import {CHANGE_BUILDMASTER} from '../Constants/action-types';

var initialState = Rota.buildmaster[0];

const RootReducer = (state = initialState, action={}) => {
    switch(action.type)
    {
        case CHANGE_BUILDMASTER:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
export default RootReducer;