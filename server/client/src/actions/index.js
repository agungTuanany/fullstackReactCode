/**
basic Redux Thunk:
    The redux-thunk purpose is to allow to write Action-Creator that return
     a action from every Action-Creator we made.
    In other way, React-Components calls a Action-Creator to produces
     a Actions and put it in Dispacth-Function back to Redux-Store.
    So redux-thunk is allowing us direct access to Dispacth-function.

Dispacth-function:
    Dispacth sends the action to all the different reducers in the store,
     causing them to instantly recalculate the app state.

    Dispacth-function is belong to Redux-store. If we call Dispacth-function
     with an Action, the Actions will automatically forward it on to
     different reducer inside the application.
*/

// this index.js for action creator React-Components

import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser =  () => async dispacth => {
    const res =await axios.get('/api/current_user');

    dispacth({ type: FETCH_USER, payload: res.data });
};

// asyc-await V.2
// export const fetchUser =  () => async dispacth =>
//     dispacth({type: FETCH_USER, payload: await axios.get('/api/current_user')});
