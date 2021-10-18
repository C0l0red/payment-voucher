const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        organization: {
            type: mongoose.ObjectId,
            required: true,
            ref: "organization",
        },
        staff: [{
            type: mongoose.ObjectId,
            ref: "user",
        }],
    },
    {
        timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"},
    }
);

module.exports = mongoose.model("branch", branchSchema);