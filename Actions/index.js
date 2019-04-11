import {CHANGE} from '../Constants/action-types';
import {DATA_LOAD} from '../Constants/action-types';
import Rota from '../Data/buildmaster.rota'

export const ChangeContent = (payload) => {return {type: CHANGE, payload}};

export const DataLoad = () => {
    return function(dispatch) {
        return dispatch({type: DATA_LOAD, payload: Rota.content});
    }
}

