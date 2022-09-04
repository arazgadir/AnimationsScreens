import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


type postData = {
  id: string,
  date: string;
  description: string;
  image: string
  status: string;
  title: string;
}

export type PostState = {
  postData: postData[]
}
const initialState: PostState = {
  postData:  []
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    PostData(state, action: PayloadAction<any>) {
      state.postData.push(action.payload)
    },
    ClearData(state, action: PayloadAction<string>) {
       state.postData = state.postData.filter(data => data.id !== action.payload)
    },
  }
})

export const { PostData, ClearData } = postSlice.actions

export default postSlice.reducer