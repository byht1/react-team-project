import server, { token } from './basic';

const UrlRegister = Object.freeze({
  signUp: '/auth/sign-up',
  logIn: '/auth/log-in',
  current: '/auth/current',
  refresh: '/auth/refresh',
  google: '/auth/current?type=google',
  logOut: '/auth/logout',
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

export const current = async () => {
  try {
    const { data } = await server.get(UrlRegister.current);
    return data;
  } catch (error) {
    throw error;
  }
};

export const googleIn = async accessToken => {
  try {
    token.set(accessToken);
    const { data } = await server.get(UrlRegister.google);
    localStorage.setItem('refreshToken', data.refresh_token);
    return data;
  } catch (error) {
    throw error;
  }
};

export const logOutUser = async () => {
  try {
    await server.post(UrlRegister.logOut, {
      refresh_token: localStorage.getItem('refreshToken'),
    });
    token.unset();
    localStorage.removeItem('refreshToken');
  } catch (error) {
    throw error;
  }
};

export const refresh = async () => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (!refreshToken) return false;

  try {
    const { data } = await server.post(UrlRegister.refresh, {
      refresh_token: localStorage.getItem('refreshToken'),
    });

    token.set(data);

    return true;
  } catch (error) {
    throw error;
  }
};
