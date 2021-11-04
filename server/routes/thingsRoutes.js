const express = require("express");
const Thing = require("../../database/models/thing");

const router = express.Router();

router.get("/", async (req, res) => {
  const things = await Thing.find();
  console.log(things);
  res.json(things);
});
router.post("/", async (req, res, next) => {
  try {
    const thing = req.body;
    const newThing = await Thing.create(thing);

    res.json(newThing);
  } catch (error) {
    error.code = 400;
    error.message = "Error creating a thing!";
    next(error);
  }
});

router.get("/:idThing", async (req, res, next) => {
  const { idThing } = req.params;

  try {
    const searchedThing = await Thing.findById(idThing);
    console.log(searchedThing);
    if (searchedThing) {
      res.json(searchedThing);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

router.delete("/:idThing", async (req, res, next) => {
  const { idThing } = req.params;
  try {
    await Thing.findByIdAndDelete(idThing);
    res.json({ "succesfully deleted": `${idThing}` });
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const { idThing } = req.body;
    await Thing.findByIdAndUpdate(idThing, req.body);
    res.json(req.body);
  } catch (error) {
    error.code = 403;
    next(error);
  }
});

// router.put("/things/:idThing", (req, res) => {});

module.exports = router;
