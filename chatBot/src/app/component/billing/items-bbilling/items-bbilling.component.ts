import { Component, OnInit } from '@angular/core';
import {SelectItemService} from '../../../services/select-item.service';

@Component({
  selector: 'app-items-bbilling',
  templateUrl: './items-bbilling.component.html',
  styleUrls: ['./items-bbilling.component.scss']
})
export class ItemsBbillingComponent implements OnInit {
  activatedWhite = false;
  activatedBlack = false;
  activatedChargement = false;
  constructor(private selecteItemService: SelectItemService) { }

  ngOnInit(): void {
    this.selecteItemService.itemBillingItemSubject.subscribe(
      (data) => {
        this.activateItem(data);
      }
    );
  }
  activateItem(data: string) {
    switch (data) {
      case 'white': {
        this.activatedWhite = true;
        this.activatedBlack = false;
        this.activatedChargement = false;
        break;
      }
      case 'black': {
        this.activatedWhite = false;
        this.activatedBlack = true;
        this.activatedChargement = false;
        break;
      }
      case 'chargement': {
        this.activatedWhite = false;
        this.activatedBlack = false;
        this.activatedChargement = true;
        break;
      }
      default: {
        alert('il faut selectionné une probléme');
        break;
      }
    }
  }

}
