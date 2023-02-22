import { createSlice } from '@reduxjs/toolkit';
import { getUserData } from './user-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    _id: '',
    email: '',
    name: '',
    phone: '',
    photo: '',
    city: '',
    birthday: '',
    cards: [
      {
        _id: '63f139e997fc630d8da1ff68',
        name: 'Jack',
        birth: '22.04.2018',
        breed: 'Persian cat',
        image: 'https://api.multiavatar.com/pet.png',
        comments:
          'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem',
        owner: '63f37a8cbf6f72e7f1b27ba3',
      },
      {
        _id: '63f139e997fc630d8da1ff68',
        name: 'Jack',
        birth: '22.04.2018',
        breed: 'Persian cat',
        image: 'https://api.multiavatar.com/pet.png',
        comments:
          'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem',
        owner: '63f37a8cbf6f72e7f1b27ba3',
      },
      {
        _id: '63f139e997fc630d8da1ff68',
        name: 'Jack',
        birth: '22.04.2018',
        breed: 'Persian cat',
        image: 'https://api.multiavatar.com/pet.png',
        comments:
          'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem',
        owner: '63f37a8cbf6f72e7f1b27ba3',
      },
    ],
    isLoading: false,
    error: null,
  },
  reducers: {
    unpadeUserPetList(state, action) {
      return {
        _id: state._id,
        email: state.email,
        name: state.name,
        phone: state.phone,
        photo: state.photo,
        city: state.city,
        birthday: state.birthday,
        cards: action.payload,
        isLoading: state.isLoading,
        error: state.error,
      };
    },
  },
  extraReducers: {
    [getUserData.pending]: handlePending,
    [getUserData.rejected]: handleRejected,
    [getUserData.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.photo = action.payload.photo;
      state.city = action.payload.city;
      state.birthday = action.payload.birthday;
      state.cards = action.payload.cards;
    },
  },
});

export const { unpadeUserPetList } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
