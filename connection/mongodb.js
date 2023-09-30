
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/Calendar")

    .then(() => console.log("Info=======> MongoDb Database Connected <======"))
    .catch(() => console.log("Info=======> MongoDb Database Connection failed <======"));

export default mongoose