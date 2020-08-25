import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import FeedReducers from './FeedReducers';

export default combineReducers({
    authResponse: AuthReducers,
    feedResponse: FeedReducers
});