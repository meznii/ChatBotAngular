import {Component, OnInit} from '@angular/core';
import {SelectItemService} from '../../../services/select-item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  item: string;
  // declaration items attribute
  activateAttente = false;
  activateImpoFich = false;
  activateDedoub = false;
  activateLeceCrm = false;
  activateRecpNF = false;
  activateFichMutt = false;
  activateDecalage = false;
  activateAgenda = false;
  activateContrat = false;
  activateApple = false;

  // activateAttente = false;

  constructor(private selectItemService: SelectItemService) {
  }

  ngOnInit(): void {
    this.selectItemService.itemSelectedSubject.subscribe(
      (data) => {
        this.activateItem(data);
        this.item = data;
      }
    );
  }

  activateItem(data: string) {
    switch (data) {
      case 'attente': {
        this.activateAttente = true;
        this.activateImpoFich = false;
        this.activateDedoub = false;
        this.activateLeceCrm = false;
        this.activateRecpNF = false;
        this.activateFichMutt = false;
        this.activateDecalage = false;
        this.activateAgenda = false;
        this.activateContrat = false;
        this.activateApple = false;
        break;
      }
      case 'impossible importer fichier': {
        this.activateImpoFich = true;
        this.activateAttente = false;
        this.activateDedoub = false;
        this.activateLeceCrm = false;
        this.activateRecpNF = false;
        this.activateFichMutt = false;
        this.activateDecalage = false;
        this.activateAgenda = false;
        this.activateContrat = false;
        this.activateApple = false;
        break;
      }
      case 'lecteur crm': {
        this.activateLeceCrm = true;
        this.activateAttente = false;
        this.activateImpoFich = false;
        this.activateDedoub = false;
        this.activateRecpNF = false;
        this.activateFichMutt = false;
        this.activateDecalage = false;
        this.activateAgenda = false;
        this.activateContrat = false;
        this.activateApple = false;
        break;
      }
      case 'dedoublonnage': {
        this.activateDedoub = true;
        this.activateAttente = false;
        this.activateImpoFich = false;
        this.activateLeceCrm = false;
        this.activateRecpNF = false;
        this.activateFichMutt = false;
        this.activateDecalage = false;
        this.activateAgenda = false;
        this.activateContrat = false;
        this.activateApple = false;
        break;
      }
      case 'reception NF': {
        this.activateRecpNF = true;
        this.activateAttente = false;
        this.activateImpoFich = false;
        this.activateDedoub = false;
        this.activateLeceCrm = false;
        this.activateFichMutt = false;
        this.activateDecalage = false;
        this.activateAgenda = false;
        this.activateContrat = false;
        this.activateApple = false;
        break;
      }
      case 'fiche mutes': {
        this.activateFichMutt = true;
        this.activateAttente = false;
        this.activateImpoFich = false;
        this.activateDedoub = false;
        this.activateLeceCrm = false;
        this.activateRecpNF = false;
        this.activateDecalage = false;
        this.activateAgenda = false;
        this.activateContrat = false;
        this.activateApple = false;
        break;
      }
      case 'decalage FA': {
        this.activateDecalage = true;
        this.activateAttente = false;
        this.activateImpoFich = false;
        this.activateDedoub = false;
        this.activateLeceCrm = false;
        this.activateRecpNF = false;
        this.activateFichMutt = false;
        this.activateAgenda = false;
        this.activateContrat = false;
        this.activateApple = false;
        break;
      }
      case 'agenda non': {
        this.activateAgenda = true;
        this.activateAttente = false;
        this.activateImpoFich = false;
        this.activateDedoub = false;
        this.activateLeceCrm = false;
        this.activateRecpNF = false;
        this.activateFichMutt = false;
        this.activateDecalage = false;
        this.activateContrat = false;
        this.activateApple = false;
        break;
      }
      case 'rechercher contart': {
        this.activateContrat = true;
        this.activateAttente = false;
        this.activateImpoFich = false;
        this.activateDedoub = false;
        this.activateLeceCrm = false;
        this.activateRecpNF = false;
        this.activateFichMutt = false;
        this.activateDecalage = false;
        this.activateAgenda = false;
        this.activateApple = false;
        break;
      }
      case 'filtre aplle': {
        this.activateApple = true;
        this.activateAttente = false;
        this.activateImpoFich = false;
        this.activateDedoub = false;
        this.activateLeceCrm = false;
        this.activateRecpNF = false;
        this.activateFichMutt = false;
        this.activateDecalage = false;
        this.activateAgenda = false;
        this.activateContrat = false;
        break;
      }
      default: {
        alert('il faut selectionné une probléme');
        break;
      }
    }
  }

}
