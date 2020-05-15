exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([{
          name: 'Cheeseburger'
        },
        {
          name: 'Penne Pasta with Tomato Sauce'
        }
      ]);
    });
};