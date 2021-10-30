const express = require('express');
const { body } = require('express-validator');
const validate = require('../middleware/validation');

const router = express.Router();

router.post("/", validate([
    body('name', 'required to be an alphanumeric string').isAlphanumeric(),
    body('type', 'required to be an alphabetic string').isAlpha(),
    body('staffTypes').isArray({min: 3}).withMessage('required to be an array with at least 3 items')
        .custom(value => {
            for (element in value){
                if (! element instanceof Array){
                    Promise.reject()
                }
            }
        }).withMessage("All elements should be strings"),
]),
    async (req, res, next) => {
        res.json(req.body);
    }

)

module.exports = router;