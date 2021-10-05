import {Component, Inject, Injectable, Renderer2, RendererFactory2, ViewEncapsulation} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {isNgContent} from '@angular/compiler';
//
// @Component({
//   encapsulation: ViewEncapsulation.None
//   })

@Injectable({
  providedIn: 'root'
})
export class AfficherService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  MessageReussi(idDiv: string, message: string) {
    const d1 = document.getElementById(idDiv);
    const d2 = this.renderer.createElement('div');
    const h1 = this.renderer.createElement('H1');
    const espace = this.renderer.createElement('p');
    espace.innerHTML = '<br>';
    h1.textContent = message;
    d2.className = 'chat-bubble bot';
    this.renderer.appendChild(d2, h1);
    this.renderer.appendChild(d1, d2);
    // h1.attributes[0] = d1.attributes[0].name;
    // d2.attributes[0] = d1.attributes[0];
    d1.appendChild(espace);
    // d1.appendChild(d2);
    this.renderer.appendChild(d1, d2);
    console.log(d2._ngcontent);
  }

  bloquerBloc(id: string) {
    const blockOuiNon = document.getElementById(id);
    blockOuiNon.hidden = true;
  }


  MessageReussi2(idDiv: string, message: string) {
    // declaraction des variables
    const d1 = document.getElementById(idDiv);
    const d2 = this.renderer.createElement('div');
    const d3 = this.renderer.createElement('div');
    const d4 = this.renderer.createElement('div');
    const h1 = this.renderer.createElement('H1');
    const espace = this.renderer.createElement('p');
    const img = this.renderer.createElement('img');

    console.log('message ', d1.attributes[0].name);
    // traitement
    console.log();
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
    // d1.getName.setAttribute(d.attributes[0]) ;
    // NamedNodeMap
    console.log('d ', d.attributes[0]);
    console.log('message ', d1.attributes);
    p.textContent = messge;
    d2.appendChild(p);
    d1.appendChild(d2);
    d.after(d1);

  }


}
