import axios from 'axios';

const  USER_BASE_REST_API_URL='http://localhost:8080/api/project/user';
const SignUp = (name, username, email, password) => axios.post(USER_BASE_REST_API_URL, {name, username, email, password});
const SignIn=(username,password)=>axios.post(USER_BASE_REST_API_URL+'/auth/signin',{username,password})




export {SignIn, SignUp}