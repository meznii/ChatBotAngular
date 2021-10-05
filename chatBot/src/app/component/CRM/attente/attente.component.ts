import {Component, OnInit, Renderer2} from '@angular/core';
import {AddResponsService} from '../../../services/bd/add-respons.service';

@Component({
  selector: 'app-attente',
  templateUrl: './attente.component.html',
  styleUrls: ['./attente.component.scss']
})
export class AttenteComponent implements OnInit {
  activateFormNum = false;
  activateDialogue = false;
  activateDecrocher = false;
  activateDecOuiNon = false;
  // variable contact restant
  activateContact = false;
  activateConatcOuiNon = false;

  // variable solde
  activateSolde = false;
  activateSoldeOuiNon = false;

  constructor(private renderer: Renderer2, private addService: AddResponsService) {
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.activateDialogue = true;
    }, 1000);

  }

  // method format num
  bienForme(idBloc: string, idDiv: string) {
    const message = 'bon';
    this.bloquerBloc(idBloc);
    this.messageUser(idDiv, message);
    this.addService.addCategorie({
      libelle: 'attendte',
      description: 'Verification format NUM',
      reponse: 'bon',
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
      this.activateDecrocher = true;
    }, 1000);
  }

  verfierNon1(idBloc: string, idDiv: string) {
    const message = 'Mauvais';
    this.bloquerBloc(idBloc);
    const text = 'SVP verifiez le format de numéro. :)';
    this.MessageReussi(idDiv, text);
    this.messageUser(idDiv, message);
    this.addService.addCategorie({
      libelle: 'attendte',
      description: 'Verification format NUM',
      reponse: 'mauvais',
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
      this.activateDecrocher = true;
    }, 1000);

  }

  // method de decroché
  decrocheOui(idBloc: string, idDiv: string) {
    const message = 'Bon';
    this.bloquerBloc(idBloc);
    this.messageUser(idDiv, message);
    this.addService.addCategorie({
      libelle: 'attendte',
      description: 'Taux de décroché',
      reponse: 'bon',
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
      this.activateContact = true;
    }, 1000);
  }

  verifierNonDecro(idBloc: string, idDiv: string) {
    const message = 'Mauvais';
    this.bloquerBloc(idBloc);
    const text = 'Merci de changer le fichier. 🙂';
    this.MessageReussi(idDiv, text);
    this.messageUser(idDiv, message);
    this.addService.addCategorie({
      libelle: 'attendte',
      description: 'Taux de décroché',
      reponse: 'Mauvais',
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
      this.activateContact = true;
    }, 1000);
  }

  // method contact restant
  ContactOui(idBloc: string, idDiv: string) {
    this.bloquerBloc(idBloc);
    this.messageUser(idDiv, 'Oui');
    this.addService.addCategorie({
      libelle: 'attendte',
      description: 'Contact restant',
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
      this.activateSolde = true;
    }, 1000);
  }

  verfierNonContact(idBloc: string, idDiv: string) {
    const message = 'Non';
    this.bloquerBloc(idBloc);
    const text = 'Merci de changer votre fichier 🙂';
    this.MessageReussi(idDiv, text);
    this.messageUser(idDiv, message);
    this.addService.addCategorie({
      libelle: 'attendte',
      description: 'Contact restant',
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
      this.activateSolde = true;
    }, 1000);

  }

  // methods solde
  soldeOui(idBloc: string, idDiv) {
    this.bloquerBloc(idBloc);
    const text = 'Merci de contacter le support. 🙂';
    this.MessageReussi(idDiv, text);
    this.messageUser(idDiv, 'Oui');
    this.addService.addCategorie({
      libelle: 'attendte',
      description: 'Solde',
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

  verfiNonSolde(solde: string, soldeOuiNon: string) {
    this.bloquerBloc(soldeOuiNon);
    const text = 'Merci d\'alimenter votre compte ou joindre le service financier ';
    this.MessageReussi(solde, text);
    this.messageUser(solde, 'Non');
    this.addService.addCategorie({
      libelle: 'attendte',
      description: 'Solde',
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

  // *******************
  // verfierNum() {
  //   this.activateFormNum = true;
  // }
  //
  // verfierTDec() {
  //   this.activateDecOuiNon = true;
  // }
  //
  // verfierTContact() {
  //   this.activateConatcOuiNon = true;
  // }
  //
  // verfierTSoldet() {
  //   this.activateSoldeOuiNon = true;
  // }

  MessageReussi(idDiv: string, message: string) {
    // declaraction des variables
    const d1 = document.getElementById(idDiv);
    const d2 = this.renderer.createElement('div');
    const d3 = this.renderer.createElement('div');
    const d4 = this.renderer.createElement('div');
    const h1 = this.renderer.createElement('H1');
    const espace = this.renderer.createElement('p');
    const img = this.renderer.createElement('img');

    // traitement
    espace.innerHTML = '<br>';
    h1.textContent = message;
    d2.className = 'chat-bubble bot';
    img.src = 'assets/images/téléchargement.jpg';
    img.className = 'bot-avatar';
    d3.className = 'bot-message-container';
    d4.className = 'img-avatar-container';
    d4.appendChild(img);
    d3.appendChild(d4);
    this.renderer.appendChild(d2, h1);
    d1.appendChild(espace);
    d3.appendChild(d2);
    d1.after(d3);


  }

  messageUser(idDiv: string, messge: string) {
    // declaration variable
    const d = document.getElementById(idDiv);
    const d1 = this.renderer.createElement('div');
    const d2 = this.renderer.createElement('div');
    const p = this.renderer.createElement('p');

    // traitement
    d1.className = 'user-message-container';
    d2.className = 'chat-bubble user';
    p.textContent = messge;
    d2.appendChild(p);
    d1.appendChild(d2);
    d.after(d1);

  }

  bloquerBloc(id: string) {
    const blockOuiNon = document.getElementById(id);
    blockOuiNon.hidden = true;
  }

  speak(text: string) {
    console.log('text ', text);
    const u = new SpeechSynthesisUtterance();
    const allVoices = speechSynthesis.getVoices();
    u.voice = allVoices.filter(voice => voice.name === 'Amelie')[0];
    u.text = text;
    u.lang = 'fr-CA';
    u.volume = 1; // 0-1 interval
    u.rate = 1;
    u.pitch = 1; // 0-2 interval
    speechSynthesis.speak(u);
  }

}
