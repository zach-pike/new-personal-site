import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { UserService } from 'src/user/user.service';
import { userProviders } from '../user/user.providers';
import { databaseProviders } from 'src/database/database.providers';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: "test",
      signOptions: {
        expiresIn: "30m"
      }
    })
  ],
  providers: [AuthService, UserService, ...userProviders, ...databaseProviders],
  controllers: [AuthController]
})
export class AuthModule {}
