import { createStore } from "redux";
import reducers from "./reducers/index";
// import thunk from 'redux-thunk';

const store = createStore(reducers);

export default store;