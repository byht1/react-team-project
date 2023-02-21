import server from './basic';

const UrlRegister = Object.freeze({
  signUp: '/auth/sign-up',
  logIn: '/auth/log-in',
});

export const signUp = async body => {
  try {
    const { data } = await server.post(UrlRegister.signUp, body);
    return data;
  } catch (error) {
    throw error;
  }
};

export const logIn = async body => {
  try {
    const { data } = await server.post(UrlRegister.logIn, body);
    return data;
  } catch (error) {
    throw error;
  }
};
