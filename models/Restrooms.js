const mongoose = require("mongoose");

// Define the schema
const RestroomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    street: { type: String, required: true },
    distance: { type: String, required: true },
    accessible: { type: Boolean, required: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    collection: "Restrooms", // Specify the collection name here
  }
);

// Export the model
module.exports = mongoose.model("Restrooms", RestroomSchema);
