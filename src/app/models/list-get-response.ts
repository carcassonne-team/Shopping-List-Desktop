import {Product} from './product';

export class ListGetResponse {
  id: number;
  name: string;
  code: string;
  content: Array<Product>;

  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;

  }
}
