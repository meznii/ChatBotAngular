import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';
import {AddResponsService} from '../../../services/bd/add-respons.service';

@Component({
  selector: 'app-reception-nf',
  templateUrl: './reception-nf.component.html',
  styleUrls: ['./reception-nf.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReceptionNFComponent implements OnInit {
  // var lien
  activatelien = false;
  activateLienON = false;
  // var Actvité call
  activateAcGrp = false;
  activateAcBloc = false;

  constructor(private afficherService: AfficherService,
              private addService: AddResponsService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activatelien = true;
    }, 1000);
  }

  // method de problem de lien
  ouiLien() {
    this.activateLienON = true;
  }

  problemLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    // const text = 'Merci de verifier votre connexion internet. :)';
    // this.afficherService.MessageReussi(idDiv, text);
    this.afficherService.messageUser(idDiv, 'persiste');
    this.addService.addCategorie({
      libelle: 'Reception non fonctionnelle',
      description: 'Voir ce lien',
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
      this.activateAcGrp = true;
    }, 1000);

  }

  nonLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    // const text = 'probléme sauvgarder et on vas vous envoyer la solution de cette probléme. :)';
    // this.afficherService.MessageReussi(idDiv, text);
    this.afficherService.messageUser(idDiv, 'résolut');
    this.addService.addCategorie({
      libelle: 'Reception non fonctionnelle',
      description: 'Voir ce lien',
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
      this.activateAcGrp = true;
    }, 1000);
  }

  // method activité bloc
  ouiAcGrp() {
    this.activateAcBloc = true;
  }

  problemTAcGr(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    // const text = 'probléme sauvgarder et on vas vous envoyer la solution de cette probléme. :)';
    // this.afficherService.MessageReussi(idDiv, text);
    const text1 = 'Merci de contacter le support 🙂';
    this.afficherService.MessageReussi2(idDiv, text1);
    this.afficherService.messageUser(idDiv, 'Oui');
    this.addService.addCategorie({
      libelle: 'Reception non fonctionnelle',
      description: 'Activé callblinding groupe d\'agent',
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

  nonAcGr(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text1 = 'Merci de contacter le support 🙂';
    this.afficherService.MessageReussi2(idDiv, text1);
    this.afficherService.messageUser(idDiv, 'Non');
    this.addService.addCategorie({
      libelle: 'Reception non fonctionnelle',
      description: 'Activé callblinding groupe d\'agent',
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
