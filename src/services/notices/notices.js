import server from 'api/basic';

//Get all notices @ /notices
export const fetchAllNotices = async () => {
  try {
    const r = await server.get('/notices');
    return r.data;
  } catch (e) {
    return e.message;
  }
};

// Get one notice @ /notices
export const fetchOneNotice = async noticeId => {
  try {
    const r = await server.get(`/notices/${noticeId}`);
    return r.data;
  } catch (e) {
    return e.message;
  }
};

// Remove notice

export const removeNotice = async noticeId => {
  try {
    const r = await server.delete(`/notices/${noticeId}`);
    return r.data;
  } catch (e) {
    return e.message;
  }
};

// Add to favorites

export const addNoticeToFav = async noticeId => {
  try {
    const r = await server.patch(`/notices/${noticeId}/favorite`);
    return r.data;
  } catch (e) {
    return e.message;
  }
};

// Remove from favorites

export const removeNoticeFromFav = async noticeId => {
  try {
    const r = await server.delete(`/notices/${noticeId}/favorite`);
    return r.data;
  } catch (e) {
    return e.message;
  }
};
