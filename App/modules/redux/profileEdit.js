import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ProfileData :{ }

}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    ProfileEdit(state, action) {
      state.ProfileData = {}
      state.ProfileData = action.payload
     
    },
  }
})

export const { ProfileEdit } = profileSlice.actions

export default profileSlice.reducer