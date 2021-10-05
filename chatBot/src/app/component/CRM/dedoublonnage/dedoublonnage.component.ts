import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';
import {AddResponsService} from '../../../services/bd/add-respons.service';

@Component({
  selector: 'app-dedoublonnage',
  templateUrl: './dedoublonnage.component.html',
  styleUrls: ['./dedoublonnage.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DedoublonnageComponent implements OnInit {
  activateLien = false;
  activateLienON = false;

  constructor(private afficherService: AfficherService, private addService: AddResponsService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activateLien = true;
    }, 1000);
  }

  ouiLien() {
    this.activateLienON = true;
  }

  problemLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'persiste');
    this.addService.addCategorie({
      libelle: 'dedoublonnage',
      description: 'Consulter ce lien',
      reponse: 'persiste',
      typeId: '5f4b760e4b24361d503f18bd'
    }).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log('error ');
        console.log(err);
      }
    );
  }

  nonLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    // const text = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
    // this.afficherService.MessageReussi(idDiv, text);
    this.afficherService.messageUser(idDiv, 'résolut');
    this.addService.addCategorie({
      libelle: 'dedoublonnage',
      description: 'Consulter ce lien',
      reponse: 'résolut',
      typeId: '5f4b760e4b24361d503f18bd'
    }).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log('error ');
        console.log(err);
      }
    );
  }
}
