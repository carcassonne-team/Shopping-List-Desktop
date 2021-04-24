import {Product} from './product';

export class ListGetResponse {
  id: number;
  name: string;
  code: string;
  content: Array<Product>;

  constructor(id: number, name: string, code: string, content: Array<Product>) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.content = content;
  }
}
