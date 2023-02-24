import axios from 'axios';
const URL = 'https://node-team-project.onrender.com/';
axios.defaults.baseURL = URL;

export const friendsList = async () => {
  try {
    const server = await axios.get(`api/friends`);
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
