const { check } = require(`express-validator`);

module.exports = [
  check(`username`).matches(/^[A-Za-z]+([\A-Za-z-]+)*$/),
  check(`email`).isEmail(),
  check(`password`).matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*_]).{8,}$/
  )
];
