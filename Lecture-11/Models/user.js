const { Schema, model } = require(`mongoose`);

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        minlength: 2,
    },
    name: {
        type: String,
        trim: true,
        minlength: 2,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
    },
    mobile: {
        type: Number,
        min: 1000000000,
        max: 9999999999,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    }
}, { timestamps: true });

module.exports = new model(`User`, userSchema);