import {PREVIOUS} from '../Constants/action-types';
import {NEXT} from '../Constants/action-types';

export function PreviousContent(payload) {return {type: PREVIOUS, payload}};
export function NextContent(payload) {return {type: NEXT, payload}};
