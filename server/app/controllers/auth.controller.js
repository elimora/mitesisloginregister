const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
  .then(user =>{
    res.status(200).send({
      message: "200", 
      datos:{
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password
      } 
    })
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(200).send({ message: "404" });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(200).send({
          accessToken: null,
          message: "401"
        });
      }

      var token = jwt.sign({ email: user.email }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      return res.status(200).send({
        accessToken: token,
        message: "200" 
      })
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};