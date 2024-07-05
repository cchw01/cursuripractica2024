import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryItem } from '../../app-logic/inventory-item';
import { InventoryListMockService } from '../../app-logic/inventory-list-mock.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItemComponent implements OnInit {
  addItemForm!: FormGroup;
  item!: InventoryItem;
  itemId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private inventoryListMockService: InventoryListMockService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.itemId = params['id'] ?? 0;
    });
  }

  ngOnInit(): void {
    this.item =
      this.itemId == 0
        ? new InventoryItem()
        : this.inventoryListMockService.getItemById(this.itemId);
    this.addItemForm = this.formBuilder.group({
      name: [this.item.name, Validators.required],
      description: [this.item.description, Validators.maxLength(100)],
      user: [this.item.user, Validators.required],
      location: [this.item.location, Validators.required],
      inventoryNumber: [this.item.inventoryNumber, Validators.required],
      createdAt: [
        this.item.createdAt?.toISOString().split('T')[0],
        Validators.required,
      ],
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.addItemForm.controls[controlName].hasError(errorName);
  };

  onSubmit(): void {
    if (this.itemId == 0) {
      this.item = new InventoryItem(this.addItemForm.value);
      this.item.createdAt = new Date(this.item.createdAt);
      this.item.modifiedAt = new Date();
      this.item.deleted = false;
      this.item.id = this.inventoryListMockService.getLastId() + 1;
      this.inventoryListMockService.addItem(this.item);
    } else {
      this.item.name = this.addItemForm.value.name;
      this.item.description = this.addItemForm.value.description;
      this.item.user = this.addItemForm.value.user;
      this.item.location = this.addItemForm.value.location;
      this.item.inventoryNumber = this.addItemForm.value.inventoryNumber;
      this.item.createdAt = new Date(this.addItemForm.value.createdAt);
      this.item.modifiedAt = new Date();
    }
    this.router.navigate(['/inventory']);
  }
}
