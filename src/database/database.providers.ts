import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'USERS_DATABASE',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost/users'),
  },
];