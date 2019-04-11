import {CHANGE} from '../Constants/action-types';
import Rota from '../Data/buildmaster.rota'

export const ChangeContent = (payload) => {return {type: CHANGE, payload}};

export const DataLoad = () => {
    return function(dispatch) {
        return dispatch({type: DATA_LOADED, payload: Rota.content});
    }
}

