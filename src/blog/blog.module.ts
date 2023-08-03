import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { DatabaseModule } from 'src/database/database.module';
import { blogProviders } from './blog.providers';

@Module({
  imports: [DatabaseModule],
  providers: [BlogService, ...blogProviders],
  controllers: [BlogController]
})
export class BlogModule {}
