
exports.seed = function(knex) {
  return knex("projects").insert([
    {
      id: 1,
      name: "Go To Work",
      description: "Make the Mula",
      completed: true
    },
    {
      id: 2,
      name: "Go to School",
      description: "Expand your Mind",
      completed: false
    },
    {
      id: 3,
      name: "Sleep",
      description: "Nite Nite",
      completed: false
    }
  ]);
};
