import server from './basic';

const UrlPostNotice = Object.freeze({ add: '/notices' });

export const postNotice = async () => {
  try {
    const { data } = await server.post(UrlPostNotice.add);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
