/** Source: https://docs.mongodb.com/manual/reference/operator/aggregation/toInt/ */

db.trips.aggregate(
  [
    {
      $match: {
        birthYear: { $ne: "", $exists: true },
      },
    },
    {
      $project: {
        birthYear: { $toInt: "$birthYear" },
      },
    },
    {
      $group: {
        _id: null,
        maiorAnoNascimento: { $max: "$birthYear" },
        menorAnoNascimento: { $min: "$birthYear" },
      },
    },
    {
      $project: {
        _id: 0,
        maiorAnoNascimento: 1,
        menorAnoNascimento: 1,
      },
    },
  ],
);
