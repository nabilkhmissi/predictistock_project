import { User } from "./user.model";

export interface Company {
    id: string,
    name: string,
    creationDate: Date,
    enabled: boolean,
    client: User
}