const router = require("express").Router();

const db = require("../data/dbConfig");

const PScheme = require("./project-schemes");


router.get("/", (req, res) => {
  db("projects")
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "Can't retrieve projects" });
    });
});


router.get("/:id", (req, res) => {
  const id = req.params;
  db("projects")
    .where(id)
    .first()
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ Error: "Specified project does not exist" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "Can't retrieve that project" });
    });
});


router.post("/", (req, res) => {
  const newProject = req.body;
  db("projects")
    .insert(newProject, "id")
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(400).json({ Error: `Unable to add ${newProject}` });
    });
});


router.post("/:id/tasks", (req, res) => {
  const newTask = req.body;
  const id = req.params.id;
  console.log(newTask, id);
  PScheme.addTask(newTask)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err);
      res
        .status(400)
        .json({ Error: `Unable to add ${newTask} with to project #${id}` });
    });
});


router.get("/:id/tasks", (req, res) => {
  const id = req.params.id;
  PScheme.getTasksByProject(id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        Error: `Unable to get the tasks belonging to project #${req.params.id}`
      });
    });
});
module.exports = router;