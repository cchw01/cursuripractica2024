export class InventoryItem {
  id!: number;
  name!: string;
  description!: string;
  user!: string;
  location!: string;
  inventoryNumber!: number;
  createdAt!: Date;
  modifiedAt!: Date;
  deleted!: boolean;

  constructor(item?: Partial<InventoryItem>) {
    console.log(item)
    Object.assign(this, item);
  }
}
