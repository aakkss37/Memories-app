import mongoose from "mongoose";

const postSchema = mongoose.Schema(
	{
		// Your database schema.
	}
)

const postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;