import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserAuthState {
  uid: string ;
}

const userAuth: UserAuthState = {
  uid : ""
};

const userAuthSlice = createSlice({
  name: "user-cred",
  initialState: {
    value: userAuth
  },
  reducers: {
    login: (state, action:PayloadAction<string>) => {
     state.value.uid= action.payload
    },
  },
});

export const { login } = userAuthSlice.actions

export default userAuthSlice.reducer

