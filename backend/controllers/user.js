const userSchema = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const found = await userSchema.findOne({ email });
    if (found) {
      res.status(400).send({ msg: "ce comprte est déjâ esisté" });
    } else {
      //passer a la partie de la creation
      const newUser = await new userSchema(req.body);
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);
      newUser.password = hash;

      //partie token:
      const payload = { id: newUser._id };

      var token = jwt.sign(payload, process.env.privateKey);

      newUser.save();
      res.status(200).send({ msg: "welcome to groupe", newUser, token });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "tu ne peut pas le faire" });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailExiste = await userSchema.findOne({ email });

    if (!emailExiste) {
      res
        .status(400)
        .send({ success: false, msg: "el compte hedha mouch mawjoud" });
    } else {
      const match = await bcrypt.compare(password, emailExiste.password);
      if (!match) {
        res.status(400).send({ success: false, msg: "mot de passe incorecte" });
      } else {
        const payload = { id: emailExiste._id };
        var token = jwt.sign(payload, process.env.privateKey);

        res.cookie("jwt", token, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          sameSite: "strict",
        });
        res
          .status(200)
          .send({ success: true, msg: "welcome", token, emailExiste });
      }
    }
  } catch (err) {
    res.status(500).send({ success: false, msg: "tu ne peut pas le faire 2" });
  }
};
