export class Product {
  /**
   *
   public sku: string,
   public name: string,
   public imageUrl: string,
   public department: string[],
   public price: number
   */
  public sku: string;
  public name: string;
  public imageUrl: string;
  public department: string[];
  public price: number;

  constructor(param: any) {
    this.sku = param.sku;
    this.name = param.name;
    this.imageUrl = param.imageUrl;
    this.department = param.department;
    this.price = param.price;
  }
}
