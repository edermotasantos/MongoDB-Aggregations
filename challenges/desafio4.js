/** Source: https://docs.mongodb.com/manual/reference/operator/aggregation/split/ */
/** Source: https://docs.mongodb.com/manual/reference/operator/query/size/ */
db.movies.aggregate(
  [
    {
      $addFields: {
        title_split: {
          $split: ["$title", " "],
        },
      },
    },
    {
      $match: { title_split: { $size: 1 } },
    },
    {
      $sort: {
        title: 1,
      },
    },
    {
      $project: {
        _id: 0,
        title_split: 1,
      },
    },
  ],
);
