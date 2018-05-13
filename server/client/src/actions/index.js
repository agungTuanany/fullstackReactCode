/**
basic Redux Thunk:
    The redux-thunk purpose is to allow to write Action-Creator that return
     a action from every Action-Creator we made.
    In other way, React-Components calls a Action-Creator to produces
     a Actions and put it in Dispacth-Function back to Redux-Store.
    So redux-thunk is allowing us direct access to Dispacth-function.

@params dispatch({}) / Dispacth-function:
    Dispacth sends the action to all the different reducers in the store,
     causing them to instantly recalculate the app state.

    Dispacth-function is belong to Redux-store. If we call Dispacth-function
     with an Action, the Actions will automatically forward it on to
     different reducer inside the application.

Why using the same dispatch({}) can we DRY it?
    The request that user send is different and that is kind of hard to generailze between of two
    The reason is if fetchUser or handleToken might want to do some other stuff
*/

// this index.js for action creator React-Components
import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser =  () => async dispacth => {
    try {
        const res = await axios.get('/api/current_user');

        dispacth({ type: FETCH_USER, payload: res.data });
    } catch (e){
        console.log(e);
    }
};

export const handleToken = token => async dispacth => {
    try {
        const res = await axios.post('/api/stripe', token);

        dispacth({ type: FETCH_USER, payload: res.data });
    } catch (e) {
        console.log(e);
    }
}

export const submitSurvey = (values, history) => async dispacth => {
    try {
        const res = await axios.post('/api/surveys', values);

        history.push('/surveys');
        dispacth({ type: FETCH_USER, payload: res.data });
    } catch (e) {
        console.log(e)
    }
}