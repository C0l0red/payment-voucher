const express = require('express');
const { body } = require('express-validator');
const {createUser} = require('./services');

const validate =  require('../middleware/validation');

const router = express.Router();

router.post("/", validate([
    body('firstName').isAlpha().withMessage('field required to be alphabetic'),
    body('lastName').isAlpha().withMessage('field required to be alphabetic'),
    body('email').isEmail().withMessage('must be a valid email'),
    body('password').isStrongPassword().withMessage('must be a strong password'),
]),
    async (req, res, next) => {
        // const { firstName, lastName, email, password } = req.body;
        createUser(req.body)
            .then(user => {
                res.status(201).json(user);
            })
            .catch(err => {
                next(err);
            })

        // res.json({message: "Hello World"});
        // res.status(201).json(user);
    }

);

module.exports = router;