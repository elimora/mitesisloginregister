const db = require("../models");
const User = db.user;

checkDuplicateEmail = (req, res, next) => {

    User.findOne({
        where: {
            email: req.body.email
        }
        }).then(user => {
            console.log(user);
        if (user) {
            res.status(400).send({
            message: "El correo ya existe"
            });
            return;
        }
        next();
    });   
};

const verifySignUp = {
    checkDuplicateEmail: checkDuplicateEmail
};

module.exports = verifySignUp;