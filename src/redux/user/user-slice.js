import { createSlice } from '@reduxjs/toolkit';
import { getUserData, editUserProfilePhoto } from './user-operations';

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
    cards: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    updateUserPetList(state, action) {
      console.log('action.payload = ', action.payload);
      return {
        _id: state._id,
        email: state.email,
        name: state.name,
        phone: state.phone,
        photo: state.photo,
        city: state.city,
        birthday: state.birthday,
        cards: state.cards.filter(e => e._id !== action.payload),
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
      // state.cards = action.payload.cards;
    },
    [editUserProfilePhoto.pending]: handlePending,
    [editUserProfilePhoto.rejected]: handleRejected,
    [editUserProfilePhoto.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.photo = action.payload.photo;
    },
  },
});

export const { updateUserPetList } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
