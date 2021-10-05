import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AfficherService } from 'src/app/services/afficher.service';
import { AddResponsService } from 'src/app/services/bd/add-respons.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AchatComponent implements OnInit {

  activatelien = false;

  constructor(private afficherService: AfficherService,
              private addService: AddResponsService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activatelien = true;
    }, 1000);
  }

  // mehtods pour les lien
  problemLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text2 = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text2);
    this.afficherService.messageUser(idDiv, 'persiste');
    this.addService.addCategorie({
      libelle: 'chargement avec carte banquaire',
      description: 'Consulter ce lien',
      reponse: 'persiste',
      typeId: '5f4b76444b24361d503f18bf'
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
    const text2 = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text2);
    this.afficherService.messageUser(idDiv, 'résolut');
    this.addService.addCategorie({
      libelle: 'chargement avec carte banquaire',
      description: 'Consulter ce lien',
      reponse: 'résolut',
      typeId: '5f4b76444b24361d503f18bf'
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
