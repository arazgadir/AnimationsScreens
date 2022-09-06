import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  postData: []
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    PostData(state, action) {
      state.postData?.push(action.payload)
    },
    ClearData(state, action) {
       state.postData = state.postData.filter(data => data.id !== action.payload)
    },
  }
})

export const { PostData, ClearData } = postSlice.actions

export default postSlice.reducer