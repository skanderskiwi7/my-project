const express = require("express");

const userRouter = express.Router();

const { register, login } = require("../controllers/user");
const userSchema = require("../models/user");

const {
  validation,
  registerValidator,
  loginValidator,
} = require("../middelware/RejisterValidator");

const { isAuth } = require("../middelware/IsAuth");

userRouter.post("/signup", registerValidator, validation, register);

userRouter.post("/login", loginValidator, login);

userRouter.get("/me", isAuth, (req, res) => {
  res.send(req.user);
});

userRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await userSchema.findByIdAndDelete(id);

    res.status(200).send("le compte a bien été suprimé");
  } catch (err) {
    res.status(500).send("could not delete the user", err);
  }
});

userRouter.get("/all", async (req, res) => {
  try {
    const users = await userSchema.find();
    res
      .status(200)
      .send({ msg: "this is the user you asked for", data: users });
  } catch (err) {
    res.status(500).send("could not get all users");
  }
});

userRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userSchema.findById(id);
    res
      .status(200)
      .send({ msg: "this is the user you asked for", data: user._doc });
  } catch (err) {
    res.status(500).send("could not get user by id");
  }
});

module.exports = userRouter;
