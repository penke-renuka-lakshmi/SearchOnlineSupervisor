import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  mail: Subject<any> = new Subject<any>();
  store: string[] | null | undefined;
  // new_mail: string = "";
  constructor() { }
  store_mails(mail: string) {
    this.store = JSON.parse(localStorage.getItem('store')!);
    if (this.store != null) this.store.push(mail);
    localStorage.setItem('store', JSON.stringify(this.store));
    this.mail.subscribe(res => {

    })

  }

}
