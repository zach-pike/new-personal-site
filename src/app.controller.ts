import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { Request as ExpressReq } from 'express';
import { JwtObject } from './auth/interfaces/jwt.interface';

interface req_t extends ExpressReq {
  user: JwtObject
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard)
  getHello(@Request() req: req_t): string {
    return req.user.username;
  }
}
