import server from 'api/basic';

export const fetchPosts = async ({ category, offset = 0, count = 12, search }) => {
  const isCategory = category ? `category=${category}` : '';
  const isSearch = search ? `&searchQuery=${search}` : '';
  const query = `/posts?${isCategory}&offset=${offset}&count=${count}${isSearch}`;
  console.log('query send', query);
  try {
    const response = await server.get(query);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchOnePost = async postId => {
  try {
    const response = await server.get(`/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const fetchFavoriteNotices = async () => {
//   try {
//     const r = await server.get(`/notices/favorite`);
//     return r.data;
//   } catch (e) {
//     return e.message;
//   }
// };

// export const fetchOwnNotices = async () => {
//   try {
//     const r = await server.get(`/notices/user`);
//     console.log('fetched own');
//     return r.data;
//   } catch (e) {
//     return e.message;
//   }
// };

// export const removeNotice = async noticeId => {
//   try {
//     const r = await server.delete(`/notices/${noticeId}`);
//     return r.data;
//   } catch (e) {
//     return e.message;
//   }
// };

// export const addNoticeToFav = async noticeId => {
//   try {
//     const r = await server.patch(`/notices/${noticeId}/favorite`);
//     return r.data;
//   } catch (e) {
//     return e.message;
//   }
// };

// export const removeNoticeFromFav = async noticeId => {
//   try {
//     const r = await server.delete(`/notices/${noticeId}/favorite`);
//     return r.data;
//   } catch (e) {
//     return e.message;
//   }
// };

// export const addNewNotice = async notice => {
//   try {
//     const { data } = await server.post('/notices/');
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
