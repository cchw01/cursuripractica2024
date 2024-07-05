export interface InventoryItem {
  id: number;
  name: string;
  description: string;
  user: string;
  location: string;
  inventoryNumber: number;
  createdAt: Date;
  modifiedAt: Date;
  deleted: boolean;
}
