import { configureStore } from "@reduxjs/toolkit"
import navButtonSlice from "../features/nav/navButtonSlice"
import userSlice from "../features/user/userSlice"

const store = configureStore({
  reducer: {
    user: userSlice,
    navButton: navButtonSlice
  }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store