import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';
import {AddResponsService} from '../../../services/bd/add-respons.service';


@Component({
  selector: 'app-lecture-crm',
  templateUrl: './lecture-crm.component.html',
  styleUrls: ['./lecture-crm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LectureCrmComponent implements OnInit {
  // variable of 1st case
  activateTouAg = false;
  activateTouAgON = false;
  // varible verfier internet
  activateVerif = false;
  activateVerifBloc = false;
  // varible redmr cnx
  activateRedmar = false;
  activateRedimarBloc = false;

  constructor(private afficherService: AfficherService, private addService: AddResponsService) {
  }

  ngOnInit(): void {
    setTimeout(
      () => {
        this.activateTouAg = true;
      }, 1000);
  }

  // method de tous agent
  ouiLien() {
    this.activateTouAgON = true;
  }

  problemTouAg(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'Oui');
    this.addService.addCategorie({
      libelle: 'Lenteur sur le CRM',
      description: 'Chez tous les agents ',
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
      this.activateVerif = true;
    }, 1000);
  }

  nonTouAge(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Voir en interne. :)';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'non');
    this.addService.addCategorie({
      libelle: 'Lenteur sur le CRM',
      description: 'Chez tous les agents ',
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
      this.activateVerif = true;
    }, 1000);
  }


  // ouiVerif() {
  //   this.activateVerifBloc = true;
  // }


  // method pour bloc verifier

  problemVerif(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'oui');
    this.addService.addCategorie({
      libelle: 'Lenteur sur le CRM',
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
    setTimeout(() => {
      this.activateRedmar = true;
    }, 1000);
  }

  nonVerif(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Merci de verifier votre connexion internet.';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'non');
    this.addService.addCategorie({
      libelle: 'Lenteur sur le CRM',
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
    setTimeout(() => {
      this.activateRedmar = true;
    }, 1000);
  }


  // ouiRedmar() {
  //   this.activateRedimarBloc = true;
  // }

  // method remarer cnx
  problemRedmarCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Merci de contacter le support. 🙂';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'persiste');
    this.addService.addCategorie({
      libelle: 'Lenteur sur le CRM',
      description: 'Redémarrer votre cnx',
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

  nonRedmar(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    // const text = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
    // this.afficherService.MessageReussi(idDiv, text);
    this.afficherService.messageUser(idDiv, 'résolut');
    this.addService.addCategorie({
      libelle: 'Lenteur sur le CRM',
      description: 'Redémarrer votre cnx',
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
