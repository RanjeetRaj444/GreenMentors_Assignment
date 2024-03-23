import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./store/reducers/authReducer.js";
import taskReducer from "./store/reducers/taskReducer.js";

const rootReducer = combineReducers({
	auth: authReducer,
	tasks: taskReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
