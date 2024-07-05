import { Injectable } from '@angular/core';
import { InventoryItem } from './inventory-item';

@Injectable({
  providedIn: 'root',
})
export class InventoryListMockService {
  inventoryData: Array<InventoryItem> = [
    {
      id: 1001,
      name: 'PC01',
      user: 'Andrei Stancu',
      description: 'Dell precision PC',
      location: 'Level 2',
      inventoryNumber: 20190001,
      createdAt: new Date('2010-01-01'),
      modifiedAt: new Date('2020-02-04'),
      deleted: false,
    },
    {
      id: 1002,
      name: 'PC02',
      user: 'Bogdan Vasilescu',
      description: 'Dell PC',
      location: 'Level 2',
      inventoryNumber: 20190002,
      createdAt: new Date('2011-01-01'),
      modifiedAt: new Date('2019-02-04'),
      deleted: false,
    },
    {
      id: 1003,
      name: 'PC03',
      user: 'Florin Ionescu',
      description: 'Dell precision PC',
      location: 'Level 1',
      inventoryNumber: 20190003,
      createdAt: new Date('2020-03-10'),
      modifiedAt: new Date('2022-11-10'),
      deleted: true,
    },
    {
      id: 1004,
      name: 'PC04',
      user: 'Codrin Antonescu',
      description: 'ThinkPad Laptop',
      location: 'Level 1',
      inventoryNumber: 20190004,
      createdAt: new Date('2020-01-01'),
      modifiedAt: new Date('2022-02-04'),
      deleted: false,
    },
    {
      id: 1005,
      name: 'PC05',
      user: 'Matei Bozna',
      description: 'Gamning PC',
      location: 'Level 2',
      inventoryNumber: 20190005,
      createdAt: new Date('2015-01-01'),
      modifiedAt: new Date('2022-02-04'),
      deleted: false,
    },
    {
      id: 1006,
      name: 'PC06',
      user: 'Andrei Tudor',
      description: 'Dell precision PC',
      location: 'Level 2',
      inventoryNumber: 20190006,
      createdAt: new Date('2011-04-11'),
      modifiedAt: new Date('2012-02-12'),
      deleted: false,
    },
    {
      id: 1007,
      name: 'PC07',
      user: 'Cristi Ionascu',
      description: 'Dell precision PC',
      location: 'Level 2',
      inventoryNumber: 20190007,
      createdAt: new Date('2022-01-01'),
      modifiedAt: new Date('2022-02-04'),
      deleted: false,
    },
    {
      id: 1008,
      name: 'PC08',
      user: 'Zoltan Basta',
      description: 'Dell precision PC',
      location: 'Level 2',
      inventoryNumber: 20190008,
      createdAt: new Date('2011-01-01'),
      modifiedAt: new Date('2021-02-04'),
      deleted: false,
    },
    {
      id: 1009,
      name: 'PC09',
      user: 'Lucian Boeriu',
      description: 'Personal PC',
      location: 'Level 1',
      inventoryNumber: 20190009,
      createdAt: new Date('2012-01-01'),
      modifiedAt: new Date('2020-02-04'),
      deleted: false,
    },
    {
      id: 1010,
      name: 'PC10',
      user: 'Miruna Tudoran',
      description: 'Dell precision PC',
      location: 'Level 1',
      inventoryNumber: 20190010,
      createdAt: new Date('2017-01-01'),
      modifiedAt: new Date('2020-02-04'),
      deleted: true,
    },
  ];

  constructor() {}

  getData(): Array<InventoryItem> {
    return this.inventoryData;
  }
}
