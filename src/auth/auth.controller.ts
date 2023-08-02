import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authSerice: AuthService) {}

    @Post('/login')
    async login(@Body() loginDto: LoginDTO) {
        let a = await this.authSerice.signIn(loginDto.username, loginDto.password);

        if (a[1]) throw new HttpException(a[1].message, HttpStatus.UNAUTHORIZED);

        return {
            accessToken: a[0][0]
        };
    }

    @Post('/createAcct')
    async createAcct(@Body() loginDto: LoginDTO) {
        this.authSerice.createAcct(loginDto.username, loginDto.password);

        return "OK";
    }
}
