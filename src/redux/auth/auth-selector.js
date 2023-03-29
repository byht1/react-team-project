export const getIsLogin = state => state.auth.isLogin;
export const getUserId = state => state.auth.id;

export const getName = state => state.auth.user.name;
export const getEmail = state => state.auth.user.email;
export const getBirthday = state => state.auth.user.birthday;
export const getPhone = state => state.auth.user.phone;
export const getCity = state => state.auth.user.city;
export const getUserPhoto = state => state.auth.user.photo;
export const getUserPosts = state => state.auth.user.posts;
