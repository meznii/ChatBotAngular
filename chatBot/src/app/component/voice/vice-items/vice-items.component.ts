import { Component, OnInit } from '@angular/core';
import {SelectItemService} from '../../../services/select-item.service';

@Component({
  selector: 'app-vice-items',
  templateUrl: './vice-items.component.html',
  styleUrls: ['./vice-items.component.scss']
})
export class ViceItemsComponent implements OnInit {
  activePrbSon = false;
  activecopureAppel = false;
  activeCnxEchoue = false;
  item: string;

  constructor(private selecteItemService: SelectItemService) { }

  ngOnInit(): void {
    this.selecteItemService.itemVoiceSelectedSubject.subscribe(
      (data) => {
        this.activateItem(data);
        this.item = data;
      }
    );
  }
  activateItem(data: string) {
    switch (data) {
      case 'Problème de son': {
        this.activePrbSon = true;
        this.activecopureAppel = false;
        this.activeCnxEchoue = false;
        break;
      }
      case 'coupure d\'appel': {
        this.activePrbSon = false;
        this.activecopureAppel = true;
        this.activeCnxEchoue = false;
        break;
      }
      case 'connexion echouée': {
        this.activePrbSon = false;
        this.activecopureAppel = false;
        this.activeCnxEchoue = true;
        break;
      }
      default: {
        console.log('il faut selectionné une probléme');
        break;
      }
    }
  }
}
