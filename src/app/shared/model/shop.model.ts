export class Shop {
    id?: string;
    direction?: string;
    name: string;
    list?: string;
    image?: string;
    specs?: Array<string> = new Array();
    products?: Array<string> = new Array();


    public asFormData(): FormData {
        const data = new FormData();
        data.append('name', this.name);
        data.append('direction', this.direction)
        data.append('list', this.list)
        return data;
    }
}
