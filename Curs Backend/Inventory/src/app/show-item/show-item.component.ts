import { Component, OnInit } from '@angular/core';
import { InventoryItem } from '../app-logic/inventory-item';
import { InventoryListMockService } from '../app-logic/inventory-list-mock.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.css',
})
export class ShowItemComponent implements OnInit {
  itemId!: number;
  item!: InventoryItem;
  itemFound = false;
  constructor(
    private inventoryListMockService: InventoryListMockService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.itemId = params['id'];
      } else {
        this.itemId = 0;
      }
    });
  }

  ngOnInit(): void {
    this.inventoryListMockService.getItemById(this.itemId).subscribe(
      data=>{this.item = data;  }
    )
    this.itemFound = this.item ? true : false;
  }

  editItem() {
    this.router.navigate(['edit/' + this.itemId]);
  }
}
