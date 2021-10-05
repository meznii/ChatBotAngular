import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';
import {AddResponsService} from '../../../services/bd/add-respons.service';

@Component({
  selector: 'app-connexion-echoue',
  templateUrl: './connexion-echoue.component.html',
  styleUrls: ['./connexion-echoue.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConnexionEchoueComponent implements OnInit {
  // variables
  activateCnrNum = false;
  activVerCnx = false;
  activateRdmrCnx = false;

  constructor(private afficherService: AfficherService,
              private addService: AddResponsService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activateCnrNum = true;
    }, 1000);
  }

  // method concernne tous numéro
  problemNum(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'Oui');
    this.addService.addCategorie({
      libelle: 'connexion echouée',
      description: 'ça concerne tous les numéros',
      reponse: 'Oui',
      typeId: '5f4b763c4b24361d503f18be'
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
      this.activVerCnx = true;
    }, 1000);
  }

  nonNum(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'tester avec mobile';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'Non');
    this.addService.addCategorie({
      libelle: 'connexion echouée',
      description: 'ça concerne tous les numéros',
      reponse: 'Non',
      typeId: '5f4b763c4b24361d503f18be'
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
      this.activVerCnx = true;
    }, 1000);
  }

  // method verifier connexion
  problemVerCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'Bon');
    this.addService.addCategorie({
      libelle: 'connexion echouée',
      description: 'Vérifier la connexion internet',
      reponse: 'Bon',
      typeId: '5f4b763c4b24361d503f18be'
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
      this.activateRdmrCnx = true;
    }, 1000);
  }

  nonVerCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Merci de verifiez votre connexion Internet';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'Mauvais');
    this.addService.addCategorie({
      libelle: 'connexion echouée',
      description: 'Vérifier la connexion internet',
      reponse: 'Mauvais',
      typeId: '5f4b763c4b24361d503f18be'
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
      this.activateRdmrCnx = true;
    }, 1000);
  }

  // method redmarge conx
  problemRdmrCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text2 = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text2);
    this.afficherService.messageUser(idDiv, 'Oui');
    this.addService.addCategorie({
      libelle: 'connexion echouée',
      description: 'Redémarrer votre connexion internet',
      reponse: 'Oui',
      typeId: '5f4b763c4b24361d503f18be'
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

  nonRdmrCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text2 = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text2);
    this.afficherService.messageUser(idDiv, 'Non');
    this.addService.addCategorie({
      libelle: 'connexion echouée',
      description: 'Redémarrer votre connexion internet',
      reponse: 'Non',
      typeId: '5f4b763c4b24361d503f18be'
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
