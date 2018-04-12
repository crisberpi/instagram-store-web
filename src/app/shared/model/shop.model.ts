export class Shop {
    id: string;
    direction: string;
    name: string;
    list: string;
    image?: string;
    specs: Array<string> = new Array();
    products: Array<string> = new Array();

    public asFormData(): FormData {
        const data = new FormData();
        data.append('name', this.name);
        for (let spec of this.specs) {
            data.append('specs', spec);
        }
        data.append('image', this.image);
        data.append('direction', this.direction);

        return data;
    }
}
