import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './reducer_posts';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  auth: AuthReducer,
  // debug signin state error later
  signin: formReducer
});

export default rootReducer;
