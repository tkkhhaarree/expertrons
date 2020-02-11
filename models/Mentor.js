const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   tasks: [
      {
         type: String
      }
   ]
});

module.exports = Mentor = mongoose.model("mentor", MentorSchema);
