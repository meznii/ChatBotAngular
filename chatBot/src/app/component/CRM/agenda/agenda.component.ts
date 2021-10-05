import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';
import {AddResponsService} from '../../../services/bd/add-respons.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AgendaComponent implements OnInit {
  // variable de lien
  activatelien = false;
  activateLienBloc = false;
  // var verifiecation
  activateVerivication = false;
  activateVerivicationbloc = false;

  constructor(private afficherService: AfficherService,
              private addService: AddResponsService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activatelien = true;
    }, 1000);
  }

  // method de lien
  ouiLien() {
    this.activateLienBloc = true;
  }

  problemLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'reponse sauvgarder';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'persiste');
    this.addService.addCategorie({
      libelle: 'Agenda ne s\'affiche pas Chez l\’agent',
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
    setTimeout(() => {
      this.activateVerivication = true;
    }, 1000);
  }

  nonLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'résolut');
    this.addService.addCategorie({
      libelle: 'Agenda ne s\'affiche pas Chez l\’agent',
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
    setTimeout(() => {
      this.activateVerivication = true;
    }, 1000);
  }

  // method verificztion
  ouiVerification() {
    this.activateVerivicationbloc = true;
  }

  problemVerification(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text2 = 'Merci de contacter le support 🙂.';
    this.afficherService.MessageReussi2(idDiv, text2);
    this.afficherService.messageUser(idDiv, 'bien affecté');
    this.addService.addCategorie({
      libelle: 'Agenda ne s\'affiche pas Chez l\’agent',
      description: 'Vérifier bien que qu’il y a Un commercial affecté au fichier',
      reponse: 'bien affecté',
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

  nonVerification(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text2 = 'Merci de contacter le support 🙂.';
    this.afficherService.MessageReussi2(idDiv, text2);
    const text3 = 'reponse sauvgarder';
    this.afficherService.MessageReussi2(idDiv, text3);
    this.afficherService.messageUser(idDiv, 'non');
    this.addService.addCategorie({
      libelle: 'Agenda ne s\'affiche pas Chez l\’agent',
      description: 'Vérifier bien que qu’il y a Un commercial affecté au fichier',
      reponse: 'Non',
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
