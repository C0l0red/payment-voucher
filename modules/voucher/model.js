const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema(
    {
        amount: {
            type: Number
        },
        date: {
            type: Date
        },
        paymentMethod: {
            type: String,
            enum: ["cash", "check"],
        },
        approvedBy: {
            type: mongoose.ObjectId,
            required: true,
            ref: "user",
        },
        paidBy: {
            type: mongoose.ObjectId,
            required: true,
            ref: "user",
        },
        payee: {
            type: Map,
            of: new mongoose.Schema({
                name: String,
                accountNumber: Number,
            }),
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
    },
    
    {
        timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"}
    },
);

module.exports = mongoose.model("voucher", voucherSchema);