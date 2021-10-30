const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        position: {
            type: String,
            required: true,
        },
        branch: {
            type: mongoose.ObjectId,
            required: true,
            ref: "branch",
        },
        organization: {
            type: mongoose.ObjectId,
            required: true,
            ref: "organization",
        },
        permissions: [{
            type: String,
            default: null,
        }],
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        isSuperUser: {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    {
        timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"},
    }
)

module.exports = mongoose.model("user", userSchema);