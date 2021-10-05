import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AfficherService } from '../../../services/afficher.service';
import { AddResponsService } from '../../../services/bd/add-respons.service';

@Component({
  selector: 'app-problem-son',
  templateUrl: './problem-son.component.html',
  styleUrls: ['./problem-son.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProblemSonComponent implements OnInit {
  // variable
  activateTouAg = false;
  activateCnxInternet = false;
  activateTestEcho = false;
  activateRedamarageCnx = false;

  constructor(private afficherService: AfficherService,
    private addService: AddResponsService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activateTouAg = true;
    }, 1000);
  }

  // method Cher TouAg
  problemTsAg(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'Oui');
    this.addService.addCategorie({
      libelle: 'Problème de son',
      description: 'probléme chez tous les agents',
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
      this.activateCnxInternet = true;
    }, 1000);
  }

  nonTsAg(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Voir en interne';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'Non');
    this.addService.addCategorie({
      libelle: 'Problème de son',
      description: 'probléme chez tous les agents',
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
      this.activateCnxInternet = true;
    }, 1000);
  }

  // methods connexion internet
  problemCnxInternet(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'Bon');
    this.addService.addCategorie({
      libelle: 'Problème de son',
      description: 'Merci de vérifier votre connexion internet',
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
      this.activateTestEcho = true;
    }, 1000);
  }
  nonCnxInternet(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Merci de verifiez votre connexion Internet';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'Mauvais');
    this.addService.addCategorie({
      libelle: 'Problème de son',
      description: 'Merci de vérifier votre connexion internet',
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
      this.activateTestEcho = true;
    }, 1000);
  }

  // method test echo
  problemTestEcho(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'Oui');
    this.addService.addCategorie({
      libelle: 'Problème de son',
      description: 'test d\'écho depuis le CRM',
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
      this.activateRedamarageCnx = true;
    }, 1000);
  }
  nonTestEcho(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'Non');
    this.addService.addCategorie({
      libelle: 'Problème de son',
      description: 'test d\'écho depuis le CRM',
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
      this.activateRedamarageCnx = true;
    }, 1000);
  }
  // method redaemarage cnx

  problemRedmrgCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text2 = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text2);
    this.afficherService.messageUser(idDiv, 'Oui');
    this.addService.addCategorie({
      libelle: 'Problème de son',
      description: 'redemarrage cnx',
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

  nonRedmrgCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text2 = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text2);
    this.afficherService.messageUser(idDiv, 'Non');
    this.addService.addCategorie({
      libelle: 'Problème de son',
      description: 'redemarrage cnx',
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
