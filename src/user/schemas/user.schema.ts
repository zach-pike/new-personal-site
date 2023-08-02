import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: String,
  pass_hash: String,

  uuid: String,

  date_of_creation: Number,
  admin: Boolean
});