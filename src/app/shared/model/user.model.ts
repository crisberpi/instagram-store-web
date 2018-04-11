export class User {
    id: string;
    name: string;
    email: string;
    password?: string;
    favourite: Array<string> = new Array();
}
