'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const RoleSchema = new Schema({
    role_name: {
      type: String,
      unique: true,
      required: true,
    },
    priviledges: {
      type: Array,
      default: [],
    },
    create_time: {
      type: Date,
      default: Date.now,
    },
    authorizedby: {
      type: String,
      default: '',
    },
    authorizedwhen: {
      type: Date,
    },
  });
  return mongoose.model('roleModel', RoleSchema, 'role');
};
