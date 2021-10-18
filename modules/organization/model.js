const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        type: {
            type: String,
            required: true
        },
        branches: [{
            type: mongoose.ObjectId,
            ref: "branch",   
        }],
        staff: [{
            type: mongoose.ObjectId,
            ref: "user",
            select: false,
        }],
        staffTypes: {
            type: Map,
            required: true,
            of: new mongoose.Schema({
                name: String,
                permissions: [String],
                isAdmin: Boolean,
                isSuperUser: Boolean,
            })
        },
        vouchers: [{
            type: mongoose.ObjectId,
            ref: "Voucher",
            select: false,
        }],
        walletBalance: {
            type: Number,
            default: 0
        },
    },
    {
        timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"},
    }
)

module.exports = mongoose.model("organization", organizationSchema);