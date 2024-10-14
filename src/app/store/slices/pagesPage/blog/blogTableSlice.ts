import { createSlice } from '@reduxjs/toolkit';
import { getBlogTableReducer } from './blogTableExtraReducers';
import { blogSliceModel } from 'src/app/models/blogSliceModel';

const initialState: blogSliceModel = {
	blog: [],
	isLoading: false,
	error: null,
};

const blogSlice = createSlice({
	name: 'blog',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		getBlogTableReducer(builder);
	},
});

// export const selectBlog = (state: { blog: blogStatus }) => state.blog;

export default blogSlice.reducer;
