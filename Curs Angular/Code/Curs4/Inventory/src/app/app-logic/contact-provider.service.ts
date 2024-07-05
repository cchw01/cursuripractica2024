import { Injectable } from '@angular/core';
import { ContactData } from './contact-data';

@Injectable({
  providedIn: 'root',
})
export class ContactProviderService {
  providedData = <ContactData>{
    info: 'Storage Units near Midtown in Atlanta, GA 30312',
    address: '486 Decatur St SE Atlanta, GA 30312',
    openDays: 'Monday - Friday',
    timeSlot: '9.00-17.00',
    phone: '07472122321',
  };
  constructor() {}

  getData(): ContactData {
    return this.providedData;
  }
}
