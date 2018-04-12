import { Shop } from "./shop.model";

export class List {

  constructor(public title: string, public shops: Array<Shop> = []) {}

  addShop(shop: Shop): Array<Shop> {
    this.shops.push(shop);
    this.sortShops();

    return this.shops;
  }

  private sortShops() {
    return this.shops;
  }
}
