const mongoose = require('mongoose');

exports.staffType = new mongoose.Schema({
    name: String,
    accessLevel: {
        type: String,
        required: true,
        enum: [
            "staff",
            "manager",
            "headCapitalUnit",
            "auditor",
            "treasurer",
            "admin",
        ]
    },
    isAdmin: Boolean,
    isSuperUser: Boolean,
})

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
        staffTypes: [{
            type: Map,
            required: true,
            of: staffType,
        }],
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

exports.Organization = mongoose.model("organization", organizationSchema);