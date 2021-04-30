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
            res.status(200).send({
            message: "400"
            });
            return;
        }else{
            res.status(200).send({
            message: "200"
            });
        }
        next();
    });   
};

const verifySignUp = {
    checkDuplicateEmail: checkDuplicateEmail
};

module.exports = verifySignUp;