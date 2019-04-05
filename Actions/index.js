import {PREVIOUS} from '../Constants/action-types';
import {NEXT} from '../Constants/action-types';

export const PreviousContent = (payload) =>  {type: PREVIOUS, payload};
export const NextContent = (payload) =>  {type: NEXT, payload};


