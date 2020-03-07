const router = require("express").Router();

const db = require("../data/dbConfig");


router.get("/", (req, res) => {
  db("resources")
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: "Can't retrieve resources" });
    });
});


router.post("/", (req, res) => {
  const newResource = req.body;
  db("resources")
    .insert(newResource, "id")
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(400).json({ Error: `Unable to add ${newResource}` });
    });
});

module.exports = router;