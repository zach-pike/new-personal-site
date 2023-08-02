export interface User extends Document {
    username: string;
    pass_hash: string;
    uuid: string;
    date_of_creation: number;
    admin: boolean
};