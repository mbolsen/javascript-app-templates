//This is a direct copy from a former project.  It needs to be cleaned up for the template.
//these files shouldn't send anything back to the frontend, that should be done in the controllers

const { Questions, Answers, Photos, ResultData, db } = require('../../database/');

module.exports = {
  postQuestion: function(req, res) {
  console.log('incomming post request', req.body)
  let info = {};
  //This is a read query
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

    //send response to the controller
    return item._id;
  })
  },
  
  postAnswer: function(req, res) {
  console.log('incomming post answer request', req.body, parseInt(req.params.question_id))
    let info = {};
    //Read Query
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
          console.log('success on saving to the DB:', doc);
        }
      })

      //send response to controller
      return 'done';
    })
  }
}