export class SearchResult {

  id: string;
  title: string;
  description: string;
  imgUrl: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.title = obj && obj.titile || null;
    this.description = obj && obj.desription || null;
    this.imgUrl = obj && obj.imgUrl || null;
  }
}
