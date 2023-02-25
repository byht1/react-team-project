import server from './basic';

export const getPetList = async () => {
  try {
    const { data } = await server.get('/user/user-pets');
    console.log('axios data = ', data.cards);
    return data.cards;
  } catch (error) {
    throw error;
  }
};
