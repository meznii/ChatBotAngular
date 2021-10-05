import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectItemService {
  itemSelectedSubject: Subject<string> = new Subject<string>();
  itemPrblem: Subject<string> = new Subject<string>();
  itemVoiceSelectedSubject: Subject<string> = new Subject<string>();
  itemBillingItemSubject: Subject<string> = new Subject<string>();

  constructor() {
  }

  selectedItem(label: string) {
    this.itemSelectedSubject.next(label);
  }

  selectedProblem(label: string) {
    this.itemPrblem.next(label);
  }

  selectedItemVoice(label: string) {
    this.itemVoiceSelectedSubject.next(label);
  }
  selectedIemBilling(label: string) {
    this.itemBillingItemSubject.next(label);
  }
}
