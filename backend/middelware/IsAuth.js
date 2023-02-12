const jwt = require("jsonwebtoken");
const userSchema = require("../models/user");

exports.isAuth = async (req, res, next) => {
  try {
    const token = req.header("autorisation");
    var decoudeur = jwt.verify(token, process.env.privateKey);
    if (!decoudeur) {
      return res.status(400).send({ msg: "you are not welcome" });
    } else {
      const user = await userSchema.findById(decoudeur.id);
      req.user = user;
      next();
    }
  } catch (err) {
    res
      .status(500)
      .send({ msg: "vous ne faite pas partie de l aunthification " });
  }

  next();
};
