import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'USERS_DATABASE',
    useFactory: async () =>
      mongoose.createConnection('mongodb://localhost/users'),
  },
  {
    provide: 'BLOG_DATABASE',
    useFactory: async () =>
      mongoose.createConnection('mongodb://localhost/blog'),
  },
];

