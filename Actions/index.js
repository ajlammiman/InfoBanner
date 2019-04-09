import {CHANGE} from '../Constants/action-types';
import Rota from '../Data/buildmaster.rota.js'

export const ChangeContent = (payload) => {return {type: CHANGE, payload}};

export const GetData = () => { 
    return function(dispatch) { 
        dispatch({type: DATALOADED, payload: Rota.content});
    }
} 