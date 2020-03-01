export class Product {
  public sku: string;
  public name: string;
  public imageUrl: string;
  public department: string;
  public price: number;

  constructor(param: any) {
    let paramJSON;
    paramJSON = JSON.parse(param);
    this.sku = paramJSON.sku;
    this.name = paramJSON.name;
    this.imageUrl = paramJSON.imageUrl;
    this.department = paramJSON.department;
    this.price = paramJSON.price;
  }
}
