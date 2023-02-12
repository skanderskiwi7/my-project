const { body, validationResult } = require("express-validator");

exports.registerValidator = [
  body("email").isEmail().withMessage("plz put a valid email"),
  body("password")
    .isLength({ min: 6, max: 20 })
    .withMessage("le pwd doit être entre 6 et 20 caracteres"),
  body("password")
    .matches(/^(.*[a-z].*)$/)
    .withMessage(
      "le mot de passe doit contenir au moins une lettre minuscule et un caractere special"
    ),
];

exports.loginValidator = [body("email", "plz put a valid email").isEmail()];

exports.validation = async (req, res, next) => {
  // fonction jibnha hadhra
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
