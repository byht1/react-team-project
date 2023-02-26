import server from './basic';

export const getPetList = async () => {
  try {
    const { data } = await server.get('/user/user-pets');
    return data.cards;
  } catch (error) {
    throw error;
  }
};

export const deletePetFromUserPetList = async id => {
  try {
    await server.delete(`/pets/${id}`);
  } catch (error) {
    throw error;
  }
};

export const editUserInfo = async obj => {
  try {
    const res = await server.patch(`/user/editing`, obj);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const editUserProfilePhoto = async obj => {
  try {
    const res = await server.patch(`/user/editing/photo`, obj);
    return res.data;
  } catch (err) {
    throw err;
  }
};
