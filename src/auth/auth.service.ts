import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

import * as bcrypt from 'bcrypt';
import { JwtObject } from './interfaces/jwt.interface';
import { JwtService } from '@nestjs/jwt';

type Result<T, K = Error> = [T, K];

type JWTPair = [string, string];

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
                private readonly jwtService: JwtService) {}
                
    async signIn(username: string, password: string): Promise<Result<JWTPair>> {
        let user = await this.userService.findUserByUsername(username);
        if (!user) return [[null, null], Error("No such user.")];

        let correct = await bcrypt.compare(password, user.pass_hash);
        if (!correct) return [[null, null], Error("Incorrect password.")];

        let obj: JwtObject = {
            username: user.username,
            uuid: user.uuid,
            date_of_creation: user.date_of_creation,
            admin: user.admin
        };

        // Sign object and refresh token
        let accessToken = await this.jwtService.signAsync(obj);

        return [[accessToken, null], null];
    }

    async createAcct(username: string, password: string) {
        await this.userService.createUser(username, password);
    }
}
