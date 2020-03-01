const express = require("express");
const db = require("../models");
const { isLoggedIn } = require("./middleware");

const router = express.Router();

router.get("/:kindname", async (req, res, next) => {
  try {
    const stores = await db.Store.findAll({
      where: { kindname: req.params.kindname }
    });
  } catch (e) {}
});
