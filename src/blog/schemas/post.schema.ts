import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    poster: String,
    title: String,
    uuid: String,

    post_content: String,
    date_of_creation: Number
});