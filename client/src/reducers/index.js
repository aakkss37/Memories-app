import { configureStore } from "@reduxjs/toolkit";
import postReducer from './posts.js'

const store = configureStore({
	reducer: {
		postReducer: postReducer,
	}
})

export default store;