using Inventory.Context;
using Inventory.Models;

namespace Inventory.Services
{
    public class InventoryItemManager
    {
        private readonly InventoryContext inventoryContext;
        public InventoryItemManager()
        {
            inventoryContext = new InventoryContext();
        }

        public List<InventoryItem> GetItems() { 

            return inventoryContext.InventoryItems.ToList();   
        
        }

        public InventoryItem GetItem(int id) {

            return inventoryContext.InventoryItems.FirstOrDefault(x => x.Id == id);
        }

        public void AddItem(InventoryItem item)
        {
            inventoryContext.InventoryItems.Add(item);
            inventoryContext.SaveChanges();
        }

        public void RemoveItem(int id)
        {
            var item = inventoryContext.InventoryItems.
                FirstOrDefault(x => x.Id == id);

            if (item == null)
                throw new ArgumentException("item does not exit");
            inventoryContext.InventoryItems.Remove(item);
            inventoryContext.SaveChanges();
        }

        public void UpdateItem(InventoryItem item)
        {
            var oldItem = inventoryContext.InventoryItems.
                FirstOrDefault(x=> x.Id == item.Id);

            if (oldItem == null)
                throw new ArgumentException("item does not exit");

            oldItem.Location = item.Location;
            oldItem.Name = item.Name;
            oldItem.Description = item.Description;
            oldItem.Deleted = item.Deleted;
            oldItem.ModifiedAt = item.ModifiedAt;

            inventoryContext.InventoryItems.Update(oldItem);
            inventoryContext.SaveChanges();
        }
    }
}
