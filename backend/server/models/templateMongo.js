const { Questions, Answers, Photos, ResultData, db } = require('../../database/');

const postPhotos = (answer_id, photos, questionId, answer) => {
  let info = {};
  let answerObj = answer;
  Photos.findOne().sort('-_id').exec((err, item) => {

    photoId = item._id
    photos.map((item, index) => {
      //create photo object
      info = {
        _id: photoId + index + 1,
        answer_id: answer_id,
        url: item
      }

      //add each photo to the Answer object
      if (!answerObj.photos) {
        answerObj.photos = [];
      }
      answerObj.photos.push(info)

      //insert each photo into the Photos db
      const document = new Photos(info)
      document.save((err, doc) => {
        if (err) {
          console.log('error', err);
        } else {
          console.log('success on saving to the photos DB:', doc)
        }
      })
    })

    // insert the new answer and photos into the resultData collection
    //db.collection('resultData').updateOne({ "_id": questionId }, { $push: { "answers":  answerObj }})
  })
}

module.exports = {
  postQuestion: function(req, res) {
  console.log('incomming post request', req.body)
  let info = {};
  Questions.findOne().sort('-_id').exec((err, item) => {
    info = {
      _id: item._id + 1,
      product_id: req.body.product_id,
      question_body: req.body.body,
      question_date: Date.now(),
      asker_name: req.body.name,
      question_helpfulness: 0,
      reported: false,
      asker_email: req.body.email,
    }

    // insert a new document into the Questions collection
    const document = new Questions(info)
    document.save((err, doc) => {
      if (err) {
        console.log('error', err);
      } else {
        console.log('success on saving to the DB:', doc)
      }
    })

    //insert the new question into the resultData db
    //db.collection('resultData').insertOne(info)

    //send response to the client
    res.send(`${item._id}`)
  })
  },
  
  postAnswer: function(req, res) {
  console.log('incomming post answer request', req.body, parseInt(req.params.question_id))
  let info = {};
    Answers.findOne().sort('-_id').exec((err, item) => {
      // console.log('maxAnswerId', item._id)
      info = {
        _id: item._id + 1,
        question_id: parseInt(req.params.question_id),
        body: req.body.body,  
        date: Date.now(),
        answerer_name: req.body.name,
        asker_email: req.body.email,
        helpfulness: 0,
        reported: false,
      }

      //insert a new document into the answers collection
      const document = new Answers(info)
      document.save((err, doc) => {
        if (err) {
          console.log('error', err);
        } else {
          console.log('success on saving to the DB:', doc)
        }
      })
      
      //send new answer to photos, which will be saved to the resultData collection
      postPhotos(info._id, req.body.photos, info.question_id, info)
      //send response to client
      res.send(`done`)
    })
  }
}