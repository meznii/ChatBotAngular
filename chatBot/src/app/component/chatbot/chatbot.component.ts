import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, OnDestroy {

  block = 'none';
  flex = 'none';
  close = 'none';

  constructor() {
  }

  ngOnInit(): void {
  }

  agrandirMin() {
    if (this.block === 'none') {
      this.block = 'block';
      this.flex = 'none';
      this.close = 'inline-block';
    }
  }

  agrandirMax() {
    if (this.flex === 'none') {
      this.block = 'none';
      this.flex = 'flex';
    }
  }

  fermer() {
    this.block = 'none';
    this.flex = 'none';
    if (this.close === 'inline-block') {
      this.close = 'none';
    }
  }

  ngOnDestroy() {
    localStorage.clear();
  }

}
