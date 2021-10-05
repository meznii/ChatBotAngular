import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AfficherService } from '../../../services/afficher.service';
import { AddResponsService } from '../../../services/bd/add-respons.service';

@Component({
  selector: 'app-import-fichier',
  templateUrl: './import-fichier.component.html',
  styleUrls: ['./import-fichier.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImportFichierComponent implements OnInit, OnDestroy {
  // variable FORMAT
  activateFormat = false;
  activateFormNum = false;
  // varaible caract spciau
  activateCaract = false;
  activateCarON = false;
  // var changer navigateur
  activateChangNav = false;
  activateChangNavBloc = false;
  // var test
  activateTest = false;
  activateTestbloc = false;
  // fieirfierFormat
  activateVerifierFormat = false;

  constructor(private afficherService: AfficherService, private addService: AddResponsService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activateFormat = true;
    }, 1000);
  }

  // methods de format
  problemFormat(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    // const text = 'verifiez l\' extension de votre fichier. :)';
    // this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'persiste');
    this.addService.addCategorie({
      libelle: 'Impossible d’importer un fichier',
      description: 'Changer le format en xlsx',
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
      this.activateVerifierFormat = true;
    }, 1000);

  }

  nonFormat(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'résolut');
    this.addService.addCategorie({
      libelle: 'Impossible d’importer un fichier',
      description: 'Changer le format en xlsx',
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
      this.activateCaract = true;
    }, 1000);
  }

  ouiFormat() {
    this.activateFormNum = true;
  }

  // method de verifier format 
  problemVerifierFormat(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    // const text = 'verifiez l\' extension de votre fichier. :)';
    // this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'persiste');
    this.addService.addCategorie({
      libelle: 'Impossible d’importer un fichier',
      description: 'Verifiez l\'extension de votre fichier (xls, csv, xlsx)',
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
      this.activateCaract = true
    }, 1000);

  }
  nonVerifierFormat(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'résolut');
    this.addService.addCategorie({
      libelle: 'Impossible d’importer un fichier',
      description: 'Verifiez l\'extension de votre fichier (xls, csv, xlsx)',
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
      this.activateCaract = true;
    }, 1000);
  }
  // method de caracter spéciaux
  problemCaract(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    // const text = 'veuillez d\'utiliser \'\'\ avant les caratcéres spéciaux';
    // this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'persiste');
    this.addService.addCategorie({
      libelle: 'Impossible d’importer un fichier',
      description: 'Enelever les caractères spéciaux',
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
      this.activateChangNav = true;
    }, 1000);

  }

  nonCaract(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.activateChangNav = true;
    this.afficherService.messageUser(idDiv, 'résolut');
    this.addService.addCategorie({
      libelle: 'Impossible d’importer un fichier',
      description: 'Enelever les caractères spéciaux',
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


  // method de changenment navigateur
  problemChangNav(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'persiste');
    this.addService.addCategorie({
      libelle: 'Impossible d’importer un fichier',
      description: 'Changer de navigateur',
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
      this.activateTest = true;
    }, 1000);
  }

  nonChangNav(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'résolut');
    this.addService.addCategorie({
      libelle: 'Impossible d’importer un fichier',
      description: 'Changer de navigateur',
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
      this.activateTest = true;
    }, 1000);
  }

  // method tester avec autre fichier
  ouiTest() {
    this.activateTestbloc = true;
  }

  problemTest(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'persiste');
    this.addService.addCategorie({
      libelle: 'Impossible d’importer un fichier',
      description: 'Tester avec un autre fichier',
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
    // setTimeout(() => {
    //   const text2 = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
    //   this.afficherService.MessageReussi(idDiv, text2);
    // }, 1000);
  }

  nonTest(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    // const text = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
    // this.afficherService.MessageReussi(idDiv, text);
    // this.activateTest = true;
    this.afficherService.messageUser(idDiv, 'résolut');
    this.addService.addCategorie({
      libelle: 'Impossible d’importer un fichier',
      description: 'Tester avec un autre fichier',
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

  // ****************
  ngOnDestroy() {
  }
}
