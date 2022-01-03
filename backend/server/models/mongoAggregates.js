const { Model } = require("mongoose")

module.exports.answersWithPhotos = (q_id, page = 1, count = 5) => {
  return ([
    // find everything that is not reported and has the correct question id
    //https://docs.mongodb.com/manual/reference/operator/aggregation/#boolean-expression-operators
    {
      $match: {
        $and: [
          { reported: { $in: [false, 0] } },
          { question_id: q_id }]
      },
    },
    { $sort: { date_written: 1 } },
    //create 'pages' by skipping over a certain amount of results
    { $skip: (count * (page - 1)) },
    //limit the number of result to a user speified number 
    { $limit: count },
    // make a new column 'id'
    { $set: { id: "$_id" } },
    // convert the date from milleseconds to ISO date
    { $set: {date: {$toDate: "$date"}}},
    //lookup the photos and bring them into here
    {
      $lookup: {
        from: "photos",
        localField: "_id",
        foreignField: "answer_id",
        pipeline: [
          { $set: { id: "$_id" } },
          { $unset: ['_id'] }
        ],
        as: "photos"
      }
    },
    //remove the email field and version and _id
    { $unset: ['answerer_email', '__v', '_id'] },
  ])
}