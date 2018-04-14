export class Product {
    id: string;
    price: string;
    name: string;
    image?: string;


        public asFormData(): FormData {
            const data = new FormData();
            data.append('price', this.price);
            data.append('name', this.name);
            data.append('image', this.image);

            return data;
        }

}
