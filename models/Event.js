const { Schema, model } = require("mongoose");

const EventSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  // foreign key
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// overwrite toJSON method to hide fields
EventSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object
})

module.exports = model("Event", EventSchema);
