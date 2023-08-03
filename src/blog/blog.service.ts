import { Inject, Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
    constructor(@Inject('POST_MODEL') private readonly postModel: Model<Post>) {}

    async addPost(poster_uuid: string, title: string, content: string) {
        await this.postModel.create({
            poster: poster_uuid,
            title,

            post_content: content,
            date_of_creation: Date.now()
        })
    }

    async fetchPosts(): Promise<Post[]> {
        return await this.postModel.find({}).exec();
    }
}
