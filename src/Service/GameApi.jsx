import axios from "axios";

//get all games api
const API_URL = 'http://192.168.1.60:4000/gameType/getAllGameType';

export const getGames = async () => {
    try {
        return await axios.get(API_URL);
    }
    catch (error) {
        console.log('Error while calling getGames api', error.message)
    }
}




