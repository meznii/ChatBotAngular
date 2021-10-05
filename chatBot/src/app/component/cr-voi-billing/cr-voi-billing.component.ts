import {Component, OnInit} from '@angular/core';
import {SelectItemService} from '../../services/select-item.service';

@Component({
  selector: 'app-cr-voi-billing',
  templateUrl: './cr-voi-billing.component.html',
  styleUrls: ['./cr-voi-billing.component.scss']
})
export class CrVoiBillingComponent implements OnInit {
  activateCRM = false;
  activateBilling = false;
  activateVoice = false;

  constructor(private selectItemService: SelectItemService) {
  }

  ngOnInit(): void {
    this.selectItemService.itemPrblem.subscribe(
      (data) => {
        this.activate(data);
      }
    );
  }

  activate(label: string) {
    switch (label) {
      case 'CRM': {
        this.activateCRM = true;
        this.activateBilling = false;
        this.activateVoice = false;
        break;
      }
      case 'voice': {
        this.activateCRM = false;
        this.activateBilling = false;
        this.activateVoice = true;
        break;
      }
      case 'billing': {
        this.activateCRM = false;
        this.activateBilling = true;
        this.activateVoice = false;
        break;
      }
      default: {
        alert('il faut selectionné une probléme');
        break;
      }
    }
  }


}
