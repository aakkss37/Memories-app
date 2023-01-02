import bodyParser from "body-parser";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import postRoutes from './routes/posts.js'



/**							APP SETUP								**/
const app = express();
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30", extended:true}));
app.use(cors());
app.use('/post', postRoutes);  //---> all the routes in the postRout method will start from '/post'  eg:- localhost:5000/post/home




/**					DATABASE CONNECTION								**/

// replace "<username>" and "<password>" with the real cradentials.
const CONNECTION_URL = "mongodb+srv://<username>:<password>@cluster0.czx1sbk.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION_URL)
	.then(()=>{app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`))})
	.catch((err)=>{console.log(err.message)});