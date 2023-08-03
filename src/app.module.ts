import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [DatabaseModule, AuthModule, AdminModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
