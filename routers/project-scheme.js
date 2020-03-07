const db = require("../data/dbConfig");

module.exports = {
    findProject,
    findTasks,
    addTask,
  getTasksByProject
};

 function findProject(id) {
   return db("projects")
     .where({ id })
  .select();
 }

function findTasks(id) {
  return db("task")
    .where({ id })
    .select();
}

function addTask(task) {
  return db("task").insert(task);
}

function getTasksByProject(id) {
  return db("task")
    .join("projects", "task.project_id", "projects.id")
    .where("task.project_id", id)
    .select(
      "projects.name",
      "projects.description",
      "task.description",
      "task.notes",
      "task.completed"
    );
}