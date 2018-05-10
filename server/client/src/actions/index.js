import axios from 'axios';
import { FETCH_USER } from './types';

const fethUser = () => {
    axios.get('/api/current_user');
};