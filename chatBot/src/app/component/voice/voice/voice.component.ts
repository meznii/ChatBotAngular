import {Component, OnInit} from '@angular/core';
import {SelectItemService} from '../../../services/select-item.service';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {
  isActivate = false;
  constructor(private selectItemService: SelectItemService) {
  }

  ngOnInit(): void {
  }

  selectItem(label: string) {
    this.isActivate = true;
    this.selectItemService.selectedItemVoice(label);
  }
}
