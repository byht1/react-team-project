import server, { token } from './basic';

const UrlRegister = Object.freeze({
  signUp: '/auth/sign-up',
  logIn: '/auth/log-in',
});

export const signUp = async body => {
  try {
    const { data } = await server.post(UrlRegister.signUp, body);

    token.set(data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);

    return data;
  } catch (error) {
    throw error;
  }
};

export const logIn = async body => {
  try {
    const { data } = await server.post(UrlRegister.logIn, body);

    token.set(data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);

    return data;
  } catch (error) {
    throw error;
  }
};

export const refresh = async () => {
  try {
    const { data } = await server.get('/auth/current');
    console.log('🚀  data:', data);

    return data;
  } catch (error) {
    console.log('🚀  error:', error);
    throw error;
  }
};
