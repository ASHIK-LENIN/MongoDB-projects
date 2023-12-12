const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        required: [true, "Must Provide name"],
        trim: true,
        maxlength: [20, 'Name more than 20 characters not allowed']

    },
    completed: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Task',TaskSchema);