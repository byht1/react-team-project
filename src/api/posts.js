import server from 'api/basic';

const UrlRegister = Object.freeze({
  posts: '/posts',
  comments: 'comments',
  likes: 'likes',
});

export const fetchPosts = async ({ category, offset = 0, count = 12, search }) => {
  const isCategory = category ? `category=${category}` : '';
  const isSearch = search ? `&searchQuery=${search}` : '';
  const query = `${UrlRegister.posts}?${isCategory}&offset=${offset}&count=${count}${isSearch}`;
  try {
    const response = await server.get(query);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchOnePost = async postId => {
  try {
    const response = await server.get(`${UrlRegister.posts}/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async postData => {
  try {
    const { data } = await server.post(`${UrlRegister.posts}`, postData);

    return data;
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

export const switchLikePost = async postId => {
  try {
    const response = await server.patch(`${UrlRegister.posts}/${postId}/${UrlRegister.likes}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addNewCommentToPost = async (postId, comment) => {
  try {
    const { data } = await server.post(
      `${UrlRegister.posts}/${postId}/${UrlRegister.comments}`,
      comment
    );
    return data;
  } catch (error) {
    throw error;
  }
};
