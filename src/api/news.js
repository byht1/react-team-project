
import  server  from './basic';

const UrlNews = Object.freeze({ all: './news' });


export const getNews = async () => {
  try {
    const { data } = await server.get(UrlNews.all);
    return data;
  } catch (error) {
    throw error;
  }
};
