import { combineReducers, legacy_createStore as createStore } from 'redux';
import messagesReducer from './reducers/messagesReducer';
import profileReducer from './reducers/profileReducer';

let reducers = combineReducers({
	profile: profileReducer,
	messages: messagesReducer,
});

let store = createStore(reducers);

export default store;
