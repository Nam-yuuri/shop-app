const mongoose = require("mongoose");

const showroomSchema = mongoose.Schema({
  address: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  open_door: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  iframe: {
    type: String,
    require: true,
  },
  ID:{
    type: String,
    require: true,
  }
});

module.exports = mongoose.model("showroom", showroomSchema);
