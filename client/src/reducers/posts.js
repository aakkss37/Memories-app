import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const postSclice = createSlice({
	name: "post",
	initialState: initialState,
	reducers: {
		fetchAll(state, action){
			action.payload;
		},
		createPost(state, action){
			state = [...state, action.payload];
		},
	}
})

export const postAction = postSclice.actions;
export default postSclice.reducer;