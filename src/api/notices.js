import server from 'api/basic';

export const fetchAllNotices = async ({ category, offset = 0, count = 12, search }) => {
  try {
    let query = `/notices/?category=${category}&offset=${offset}&count=${count}`;
    if (search) {
      query += `&search=${search}`;
    }
    const r = await server.get(query);
    return r.data;
  } catch (e) {
    return e.message;
  }
};

export const fetchOneNotice = async noticeId => {
  try {
    const r = await server.get(`/notices/${noticeId}`);
    return r.data;
  } catch (e) {
    return e.message;
  }
};

export const fetchPrivateCards = async () => {
  try {
    const r = await server.get('/auth/current?fields=advertisement,cards');
    return r.data;
  } catch (e) {
    return e.message;
  }
};

export const fetchFavoriteNotices = async () => {
  try {
    const r = await server.get(`/notices/favorite`);
    return r.data;
  } catch (e) {
    return e.message;
  }
};

export const fetchOwnNotices = async () => {
  try {
    const r = await server.get(`/notices/user`);
    console.log('fetched own');
    return r.data;
  } catch (e) {
    return e.message;
  }
};

export const removeNotice = async noticeId => {
  try {
    const r = await server.delete(`/notices/${noticeId}`);
    return r.data;
  } catch (e) {
    return e.message;
  }
};

export const addNoticeToFav = async noticeId => {
  try {
    const r = await server.patch(`/notices/${noticeId}/favorite`);
    return r.data;
  } catch (e) {
    return e.message;
  }
};

export const removeNoticeFromFav = async noticeId => {
  try {
    const r = await server.delete(`/notices/${noticeId}/favorite`);
    return r.data;
  } catch (e) {
    return e.message;
  }
};

export const addNewNotice = async notice => {
  try {
    const { data } = await server.post('/notices', notice);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error.message;
  }
};
