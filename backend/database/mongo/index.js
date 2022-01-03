const mongoose = require('mongoose');
const { Schema } = mongoose; //new
const { answersWithPhotos, questionsWithAnswers } = require('../server/controllers/aggregates')

//Connect to Mongo database

//connect to mongo on localhost
// const connectToDB = async function () {
//   await db.openUri('mongodb://localhost:27017/sdc-questions')
// }
mongoose.connect('mongodb://localhost:27017/templateDB')
// mongoose.connect('mongodb://sdc-mongo:27017/sdc-questions', { family: 4 })
// { useNewUrlParser: true, useUnifiedTopology: true }
// connect to mongo on heroku
// mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('MongoDB connection successful');
})

//SCHEMA for Mongo Database
let questionsSchema = new Schema({
  //if not given the id, Mongo will auto do this and this line is not necessary
  _id: Number,
  product_id: Number,
  question_body: String,
  question_date: Date,
  asker_name: String,
  question_helpfulness: Number,
  reported: Boolean,
  asker_email: String,
})

let answersSchema = new Schema({
  _id: Number,
  question_id: Number,
  body: String,
  date: Date,
  answerer_name: String,
  answerer_email: String,
  reported: Boolean,
  helpfulness: Number,
})

let photosSchema = new Schema({
  _id: Number,
  answer_id: Number,
  url: String
})

let resultDataSchema = new Schema({
  //if not given the id, Mongo will auto do this and this line is not necessary
  _id: Number,
  product_id: Number,
  question_body: String,
  question_date: Date,
  asker_name: String,
  question_helpfulness: Number,
  reported: Boolean,
  asker_email: String,
  answers: [{
    _id: Number,
    question_id: Number,
    body: String,
    date: Date,
    answerer_name: String,
    answerer_email: String,
    reported: Boolean,
    helpfulness: Number,
    photos: [{
      _id: Number,
      answer_id: Number,
      url: String
    }]
  }]
})

let questions = mongoose.model('questions', questionsSchema);
let answers = mongoose.model('answers', answersSchema);
let photos = mongoose.model('photos', photosSchema);
let resultData = mongoose.model('resultData', resultDataSchema);

const questionsAgg = function(prod_id) {
  questions
    questions.aggregate(questionsWithAnswers(prod_id))
    .toArray((err, res) => {
    console.log('response', response)
  })
}

module.exports.ResultData = resultData
module.exports.Photos = photos
module.exports.Answers = answers
module.exports.Questions = questions
module.exports.questionsAgg = questionsAgg
module.exports.db = db