import server from './basic';

const UrlAddMyPet = Object.freeze({ addPet: '/pets' });

export const addPet = async petInfo => {
  try {
    const { data } = await server.post(UrlAddMyPet.addPet, petInfo, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
};
