const express = require("express");
const contactRouter = express.Router();

const contactSchema = require("../models/contact");

//Create new post msg
contactRouter.post("", async (req, res) => {
  try {
    const msg = new contactSchema(req.body);

    const letterBox = await msg.save();
    res
      .status(200)
      .send({ msg: "message is well received!", letterBox: letterBox });
  } catch (err) {
    res.status(500).send("no message received! ");
  }
});

module.exports = contactRouter;
