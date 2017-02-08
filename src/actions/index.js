import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
// export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
// export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_URL = 'http://localhost:3090';
const API_KEY = "?key=testestestest";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: request
  }
}

// export function fetchPostsSuccess(posts) {
//   return {
//     type: FETCH_POSTS_SUCCESS,
//     payload: posts
//   }
// }

// export function fetchPostsFailure(error) {
//   return {
//     type: FETCH_POSTS_FAILURE,
//     payload: posts
//   }
// }

export function signInUser({ email, password }) {
  // With redux-thunk, we can return many actions, not just one per action creator
  // Returns the function gives us direct access to the Dispatch method
  return function(dispatch) {
    //Submit email/password to server
    axios.post(`${API_URL}/signin`, { email, password })

    // If request is good...
    // - Update state to indicate user is authenticated
    // - Save the JWT token
    // - Redirect to the route './feature'

    // If request is bad...
    // - Show an error to the user
    
  }
}