import {createStore, applyMiddleware } from 'redux';
import rootred from './Redux/Reducers/main';
import thunk from 'redux-thunk';

const middlewares = [thunk];


const store  = createStore(
    rootred,
    applyMiddleware(...middlewares)

);

export default store;