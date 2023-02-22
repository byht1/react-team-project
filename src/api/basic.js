import axios from 'axios';

// https://node-team-project.onrender.com/docs Документаці як в 8 дз по React
// Первий запит може йти довго так як server безкоштовний і він "засинає"

// const URL = 'http://localhost:5000/api';
const URL = 'https://node-team-project.onrender.com/api';

const server = axios.create({
  baseURL: URL,
});

export const token = {
  set(token) {
    server.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    server.defaults.headers.common.Authorization = '';
  },
};

server.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 403 && !error.config._isRetry) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await server.post('/auth/refresh', { refresh_token: refreshToken });

        token.set(data);

        return server(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default server;
