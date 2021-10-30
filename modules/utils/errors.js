class APIError extends Error {
    constructor(message, statusCode=500, err=null) {
        super();
        this.type = this.constructor.name;
        this.message = message;
        this.statusCode = statusCode;
        this.timestamp = Date.now();
        if (err){
            const {errors} = err;
            this.errors = errors;
        }
    }
}

class DuplicateError extends APIError {
    constructor (message) { super(message, 400); }
}

class DatabaseError extends APIError {
    constructor (message, err=null) { super(message, 500, err); }
}

class ValidationError extends APIError {
    constructor (err) {
        const message = "Invalid input data";
        super(message, 400, err)
    }
}

module.exports = {
    DuplicateError,
    DatabaseError,
    ValidationError,
}