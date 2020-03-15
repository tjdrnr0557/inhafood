const express = require("express");
const db = require("../models");
const { isLoggedIn } = require("./middleware");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  try {
    const store = await db.Store.findAll({
      where: { id: req.params.id }
    });
    console.log("@@@@@@@@@@@ in server stores", store);
    res.json(store);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
