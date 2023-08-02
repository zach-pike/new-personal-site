import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
    constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}

    async createUser(username: string, password: string, admin: boolean = false): Promise<[User, Error]> {
        if (username.length > 20) return [null, Error("Username too long!")]; 

        let pass_hash = await bcrypt.hash(password, 10);
        let creation_date = Date.now();
        let uuid = uuidv4();

        let user = await this.userModel.create({
            username,
            pass_hash,
            uuid,
            admin,
            date_of_creation: creation_date
        });

        return [user, null];
    }

    async getUserByUUID(uuid: string): Promise<User> {
        return this.userModel.findOne({ uuid }).exec();
    }

    async findUserByUsername(username: string): Promise<User> {
        return this.userModel.findOne({ username }).exec();
    }
}
