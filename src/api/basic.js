import axios from 'axios';

// https://node-team-project.onrender.com/docs Документаці як в 8 дз по React
// Первий запит може йти довго так як server безкоштовний і він "засинає"

const URL = 'https://node-team-project.onrender.com/api';

const server = axios.create({
  // withCredentials: true,
  baseURL: URL,
});

export default server;
