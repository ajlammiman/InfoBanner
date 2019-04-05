import Rota from '../Data/buildmaster.rota.js';
import {PREVIOUS} from '../Constants/action-types';
import {NEXT} from '../Constants/action-types';

var initialState = Rota.content[0];

const RootReducer = (state = initialState, action={}) => {
    switch(action.type)
    {
        case PREVIOUS:
        case NEXT:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
export default RootReducer;