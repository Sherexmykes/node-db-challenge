
exports.seed = function(knex) {
  return knex("task").insert([
    {
      id: 1,
      project_id: 1,
      description: "Get up",
      notes: "Make sure you get dressed too "
    },
    {
      id: 2,
      project_id: 1,
      description: "Take a shower",
      notes: "But make sure you don't get dressed in the dark"
    },
    {
      id: 3,
      project_id: 2,
      description: "Take notes",
      notes: "Otherwise you will make mistakes"
    },
    {
      id: 4,
      project_id: 2,
      description: "Watch zoom lecture",
      notes: "Make sure computer works first"
    },
    {
      id: 5,
      project_id: 3,
      description: "Go to sleep",
      notes: "Try to go to sleep at 11pm"
    },
    {
      id: 6,
      project_id: 3,
      description: "Watch Videos till you dose off",
      notes: "Can't hurt"
    }
  ]);
};