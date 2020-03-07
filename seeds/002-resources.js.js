
exports.seed = function(knex) {
  return knex("resources").insert([
    {
      id: 1,
      name: "Car",
      description: "Driver to Work"
    },
    {
      id: 2,
      name: "Pencil",
      description: "Write the Vision"
    },
    {
      id: 3,
      name: "Bed",
      description:
        "I love it"
    }
  ]);
};