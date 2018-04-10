export class User {
    id: string;
    email: string;
    password?: string;
    favourite: Array<string> = new Array();
}
