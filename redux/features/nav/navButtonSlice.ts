import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavbarButton {
  isLoginButtonClicked: boolean;
}

const initialState: NavbarButton = {
  isLoginButtonClicked: false,
};

const navButtonSlice = createSlice({
  name: "nav-button",
  initialState,
  reducers: {
    loginClicked: (state, action:PayloadAction<boolean>) => {
      state.isLoginButtonClicked = action.payload;
    },
  },
});

export const { loginClicked } = navButtonSlice.actions;

export default navButtonSlice.reducer;
