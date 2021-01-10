import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    searchMovies: searchReducer
});

export default rootReducer;