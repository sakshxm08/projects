const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  logo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  language: {
    type: Array,
  },
  library: {
    type: Array,
  },
  other_lang: {
    type: Array,
  },
  features: {
    type: Array,
  },
  github: {
    type: String,
  },
  link: {
    type: String,
  },
  poster: {
    type: String,
  },
});

module.exports = mongoose.connection.model("project", projectSchema);
