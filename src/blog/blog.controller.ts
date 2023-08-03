import { Controller, UseGuards, Post, Request, Body, Get } from '@nestjs/common';
import { BlogService } from './blog.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtObject } from 'src/auth/interfaces/jwt.interface';
import { Request as ExpressReq } from 'express';
import { PostCreateDTO } from './dto/create.dto';



@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) {}

    @Post('/createPost')
    @UseGuards(AuthGuard)
    async createPost(@Body() body: PostCreateDTO, @Request() req: ExpressReq & {user:JwtObject}) {
        let id = await this.blogService.addPost(req.user.uuid, body.title, body.content);

        return id;
    }

    @Get('/fetchPosts')
    async getPosts() {
        return await this.blogService.fetchPosts();
    }
}

