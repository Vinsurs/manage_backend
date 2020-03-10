'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const userSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    create_time: {
      type: Date,
      default: Date.now,
    },
    role_id: {
      type: String,
      required: true,
    },
  });
  return mongoose.model('UserModel', userSchema, 'manageUser');
};
