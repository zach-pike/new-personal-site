import { Inject, Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class BlogService {
    constructor(@Inject('POST_MODEL') private readonly postModel: Model<Post>) {}

    async addPost(poster_uuid: string, title: string, content: string): Promise<string> {
        let uuid = uuidv4();
        await this.postModel.create({
            poster: poster_uuid,
            title,

            post_content: content,
            date_of_creation: Date.now(),
            uuid
        });

        return uuid;
    }

    async fetchPosts(): Promise<Post[]> {
        let posts: Post[] = await this.postModel.find({}).exec()
        posts = posts.map(v => {
            return {
                poster: v.poster,
                title: v.title,
                post_content: v.post_content,
                date_of_creation: v.date_of_creation,
                uuid: v.uuid
            }
        });

        return posts;
    }
}
