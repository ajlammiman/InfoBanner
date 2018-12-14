import Rota from '../Data/buildmaster.rota.js';

var initialState = Rota.buildmaster[0];

const RootReducer = (state = initialState, action) => state;
export default RootReducer;