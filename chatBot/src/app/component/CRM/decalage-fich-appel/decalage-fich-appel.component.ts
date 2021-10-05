import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';
import {AddResponsService} from '../../../services/bd/add-respons.service';

@Component({
  selector: 'app-decalage-fich-appel',
  templateUrl: './decalage-fich-appel.component.html',
  styleUrls: ['./decalage-fich-appel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DecalageFichAppelComponent implements OnInit {
  // var tous agent
  activateTouAg = false;
  activateTsAgON = false;
  // var verfication internet
  activateVerCnx = false;
  activateVerCnxON = false;

  constructor(private afficherService: AfficherService,
              private addService: AddResponsService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activateTouAg = true;
    }, 1000);
  }

  // method pur TOus agent
  ouiTsAg() {
    this.activateTsAgON = true;
  }

  problemTsAg(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'Oui');
    this.addService.addCategorie({
      libelle: 'Decalage fiche/Appel',
      description: 'Chez tous les agents',
      reponse: 'Oui',
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
      this.activateVerCnx = true;
    }, 1000);
  }

  nonTsAg(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Voir en interne';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'Non');
    this.addService.addCategorie({
      libelle: 'Decalage fiche/Appel',
      description: 'Chez tous les agents',
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
    setTimeout(() => {
      this.activateVerCnx = true;
    }, 1000);
  }

  // method de verification conex internet
  ouiVerCnx() {
    this.activateVerCnxON = true;
  }

  problemVerCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text2 = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text2);
    const text = 'Merci de verifiez votre connexion internet';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'Oui');
    this.addService.addCategorie({
      libelle: 'Decalage fiche/Appel',
      description: 'Vérifier la connexion internet',
      reponse: 'Oui',
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

  nonVerCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    // this.activateVerTaux = true;
    const text2 = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text2);
    this.afficherService.messageUser(idDiv, 'Non');
    this.addService.addCategorie({
      libelle: 'Decalage fiche/Appel',
      description: 'Vérifier la connexion internet',
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
