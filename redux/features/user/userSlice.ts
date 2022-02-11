import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  password: string;
}

const userstate: UserState = {
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    value : userstate
  },
  reducers: {
    login: (state, action:PayloadAction<UserState>) => {
     state.value = action.payload
    },
  },
});

export const { login } = userSlice.actions

export default userSlice.reducer

