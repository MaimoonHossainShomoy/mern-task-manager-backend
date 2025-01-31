const mongoose = require('mongoose');

const taksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model('Task', taksSchema);

module.exports = Task;
