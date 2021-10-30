const { validationResult } = require("express-validator");
const { ValidationError } = require("../utils/errors");

const validate = validations => {
    return async (req, res, next) => {
      await Promise.all(validations.map(validation => validation.run(req)));
  
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }
  
      try { 
        throw new ValidationError(errors);
      }
      catch(err) {
        next(err)
      }
    };
  };

  module.exports = validate;