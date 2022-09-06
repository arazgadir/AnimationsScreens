import { combineReducers } from 'redux';
import postReducer from './post';
import profileReducer from './profileEdit'
import newsReducer from './news'

 
const rootReducer = combineReducers({
    post: postReducer,
    profile: profileReducer,
    news: newsReducer
});

export default rootReducer;
