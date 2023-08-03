import { Mongoose } from 'mongoose';
import { PostSchema } from './schemas/post.schema';

export const blogProviders = [
  {
    provide: 'POST_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Post', PostSchema),
    inject: ['BLOG_DATABASE'],
  },
];