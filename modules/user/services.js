const User = require("./model");
const { DuplicateError, DatabaseError } = require("../utils/errors");
const bcrypt = require("bcryptjs");

exports.createUser = async ({firstName, lastName, email, password}) => {
    await User.findOne({email})
        .then(user => {
            if (user){
                throw new DuplicateError("Email already in use");
            }
        })

    password = await bcrypt.hash(password, 10)

    // return (
        await User.create({
                firstName,
                lastName,
                email,
                password,
            })
            .then(user => {
                console.log("User created successfully", user);
                return user;
            })
            .catch(err => {
                throw new DatabaseError("An error occurred while saving user. Please try again", err);
            })
    // )
        
};

