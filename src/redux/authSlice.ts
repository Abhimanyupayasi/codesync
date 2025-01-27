import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: {
    id: string;
    username: string;
  } | null;
  roomId: string | null;
}

const initialState: UserState = {
  user: null,
  roomId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: string; username: string }>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.roomId = null;
    },
    setRoom: (state, action: PayloadAction<string>) => {
      state.roomId = action.payload;
    },
  },
});

export const { setUser, logout, setRoom } = authSlice.actions;

// Selector to get the username
export const selectUsername = (state: { auth: UserState }) => state.auth.user?.username;

export default authSlice.reducer;
