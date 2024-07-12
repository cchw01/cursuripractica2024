using Inventory.Context;
using Inventory.Models;
using Inventory.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Inventory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryItemController : ControllerBase
    {
        private readonly InventoryItemManager inventoryItemManager;
        
        public InventoryItemController()
        {
            inventoryItemManager = new InventoryItemManager();
        }

        [HttpGet]
        public IActionResult GetInventoryItems()
        {
            var items = inventoryItemManager.GetItems();

			return Ok(items);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetInventoryItem(int id)
        {
            var inventoryItem = inventoryItemManager.GetItem(id);
            if (inventoryItem != null)
            {
                return Ok(inventoryItem);
            }
            return NotFound($"can't found item with id: {id}");
        }

        [HttpPost]
        public IActionResult AddNewItem(InventoryItem item)
        {
            try
            {
                inventoryItemManager.AddItem(item);
                return Created();
            }
            catch
            {

                return BadRequest("The request is not valid");
            }
        }

        [HttpPut]
        public IActionResult UpdateItem(InventoryItem item)
        {
            try
            {
                inventoryItemManager.UpdateItem(item);
                return Ok();
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex.Message);
            }
            catch {
                return BadRequest("The request is not valid");
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteItem(int id)
        {
            try
            {
                inventoryItemManager.RemoveItem(id);
                return Ok();
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex.Message);
            }
            catch
            {
                return BadRequest("The request is not valid");
            }
        }

    }
}
