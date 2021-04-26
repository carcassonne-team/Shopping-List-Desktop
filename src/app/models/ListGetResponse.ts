import {Product} from './Product';

export class ListGetResponse {
  constructor(id: number, name: string, share_code: string, user_id: number, list_Content: Array<Product>) {
    this.id = id;
    this.name = name;
    this.share_code = share_code;
    this.user_id = user_id;
    this.list_Content = list_Content;
  }

  id: number;
  name: string;
  share_code: string;
  user_id: number;
  list_Content: Array<Product>;
}
