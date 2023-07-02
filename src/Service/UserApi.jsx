import axios from "axios";

//get all user api
const API_URL = 'https://reqres.in/api/users?page=2';

export const getUsers = async () => {
    try {
        return await axios.get(API_URL);
    }
    catch (error) {
        console.log('Error while calling getUsers api', error.message)
    }
}