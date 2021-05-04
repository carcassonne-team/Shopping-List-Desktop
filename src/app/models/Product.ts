export class Product {
  constructor(id: string, category_id: string, product_name: string, category_name: string) {
    this.id = id;
    this.category_id = category_id;
    this.product_name = product_name;
    this.category_name = category_name;
  }

  id: string;
  category_id: string;
  product_name: string;
  category_name: string;
}
