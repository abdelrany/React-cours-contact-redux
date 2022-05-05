import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import routeReducers from './reducers';


const initialState = {};

const store = createStore(
    routeReducers,
    initialState,
    //applying the middle for conncting with an api
    compose(applyMiddleware(thunk),
        //dev tools for debuging 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;