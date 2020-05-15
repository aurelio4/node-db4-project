exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_prep').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_prep').insert([{
          recipeId: 1,
          step_number: 1,
          step: 'Make Burger'
        },
        {
          recipeId: 1,
          step_number: 2,
          step: 'Add Cheese'
        },
        {
          recipeId: 1,
          step_number: 3,
          step: 'Serve'
        },
        {
          recipeId: 2,
          step_number: 1,
          step: 'Boil Pasta'
        },
        {
          recipeId: 2,
          step_number: 2,
          step: 'Heat up Sauce'
        },
        {
          recipeId: 2,
          step_number: 3,
          step: 'Serve Pasta and Sauce in same bowl'
        },
      ]);
    });
};