
import  server  from './basic';

const UrlNews = Object.freeze({ all: './news' });

export const fetchNews = async ({ offset = 0, limit = 6}) => {
 
  try {
    let query = `/news?offset=${offset}&limit=${limit}`;

    const r = await server.get(query);
    return r.data;
  } catch (error) {
    throw error;
  }
};

export const getNews = async () => {
  try {
    const { data } = await server.get(UrlNews.all);
    return data;
  } catch (error) {
    throw error;
  }
};
