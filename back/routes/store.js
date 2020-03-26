const express = require("express");
const db = require("../models");
const { isLoggedIn } = require("./middleware");

const router = express.Router();

router.get("/:id", async (req, res, next) => {
  try {
    const store = await db.Store.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: db.Image,
          attributes: ["src", "PostId"]
        },
        {
          model: db.Post
        }
      ]
    });

    //console.log("@@@@@@@@@@@ in server stores", store);
    // const tUsers = await Promise.all(
    //   store.Posts.map(s => {
    //     return db.User.findOne({
    //       where: { id: s.dataValues.UserId },
    //       attributes: ["id", "nickname"]
    //     });
    //   })
    // );
    // const Users = tUsers.map(s => s.dataValues);
    // store.dataValues.user = Users;
    res.json(store);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
