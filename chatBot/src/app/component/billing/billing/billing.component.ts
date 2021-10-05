import {Component, OnInit} from '@angular/core';
import {SelectItemService} from '../../../services/select-item.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  isActivate = false;
  constructor(private selectItemService: SelectItemService) {
  }

  ngOnInit(): void {
  }

  selectItem(label: string) {
    this.isActivate = true;
    this.selectItemService.selectedIemBilling(label);
  }

}
