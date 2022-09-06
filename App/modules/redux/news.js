import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchNews = createAsyncThunk(
    'news/getData',
    async () => {
        const response = await fetch('https://dummyjson.com/products/');
        const news = await response.json();
        return news
    }
)

const initialState = {
    newsData: []
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    myAsyncResponse: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.newsData = []
            state.newsData = action.payload;
        })
    }
})

export const { NewsData } = newsSlice.actions

export default newsSlice.reducer
