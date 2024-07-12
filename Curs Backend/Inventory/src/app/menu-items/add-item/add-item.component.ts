import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryItem } from '../../app-logic/inventory-item';
import { InventoryListMockService } from '../../app-logic/inventory-list-mock.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css',
})
export class AddItemComponent implements OnInit, AfterViewInit {
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
      if (params['id']) {
        this.itemId = params['id'];
      } else {
        this.itemId = 0;
      }
    });
    this.addItemForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.maxLength(100)],
      user: ["", Validators.required],
      location: ["", Validators.required],
      inventoryNumber: ["", Validators.required],
      createdAt: [
        new Date(),
        Validators.required,
      ],
    });
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

if(this.itemId!=0)
    this.inventoryListMockService.getItemById(this.itemId).subscribe(
      data=>{this.item = data;
        console.log(this.item);
        this.InitForm();
      }
    );

    else
    {
      this.item = new InventoryItem();
      this.item.createdAt = new Date();
      this.InitForm();
    }



  }

  private InitForm()
  {
    this.addItemForm = this.formBuilder.group({
      name: [this.item.name, Validators.required],
      description: [this.item.description, Validators.maxLength(100)],
      user: [this.item.user, Validators.required],
      location: [this.item.location, Validators.required],
      inventoryNumber: [this.item.inventoryNumber, Validators.required],
      createdAt: [new Date(this.item.createdAt).toISOString().split('T')[0],
        Validators.required,
      ],
    });
  }


  public hasError = (controlName: string, errorName: string) => {
    if(this.addItemForm!= undefined)
    return this.addItemForm.controls[controlName].hasError(errorName);
  return false;
  };

  onSubmit() {
    if (this.itemId == 0) {
      this.item = new InventoryItem(this.addItemForm.value);
      this.item.createdAt = new Date(this.item.createdAt);
      this.item.modifiedAt = new Date();
      this.item.deleted = false;
      //this.item.id = this.inventoryListMockService.getLastId() + 1;
      this.inventoryListMockService.addItem(this.item);
    } else {
      this.item.name = this.addItemForm.value.name;
      this.item.description = this.addItemForm.value.description;
      this.item.user = this.addItemForm.value.user;
      this.item.location = this.addItemForm.value.location;
      this.item.inventoryNumber = this.addItemForm.value.inventoryNumber;
      this.item.createdAt = new Date(this.addItemForm.value.createdAt);
      this.item.modifiedAt = new Date();
      this.inventoryListMockService.updateItem(this.item);
    }
    //this.router.navigate(['/inventory']);
  }
}
