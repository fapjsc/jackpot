import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { jackpotReducer } from './reducers/jackpotReducer';

const reducer = combineReducers({
  jackpot: jackpotReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
