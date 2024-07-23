import mongoose, { Model } from "mongoose";
import connectDB from "@/database/dbConfig";
var data = require('../../package.json');

connectDB();

const problemSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      problemStatement: {
        type: String,
        required: true,
      },
      examples: [
        {
          id: {
            type: Number,
            required: true,
          },
          inputText: {
            type: String,
            required: true,
          },
          outputText: {
            type: String,
            required: true,
          },
          explanation: String,
        },
      ],
      constraints: {
        type: String,
        required: true,
      },
      difficulty: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      order: {
        type: Number,
        required: true,
      },
      videoId: {
        type: String,
        required: true,
      },
      starterCode: {
        type: String,
        required: true,
      },
});


let problemModel : Model<any>;

try {
    problemModel = mongoose.model('problems');
} catch {
    problemModel = mongoose.model('problems', problemSchema);  
}


//actions
const uploader=async()=>{
  //console.log(data);
  console.log("done");
}
const getProblems = () => problemModel.find()
export {uploader,getProblems};


  