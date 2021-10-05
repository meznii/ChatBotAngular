import {Component, OnInit} from '@angular/core';
import {SelectItemService} from '../../../services/select-item.service';

@Component({
  selector: 'app-cadre-problem',
  templateUrl: './cadre-problem.component.html',
  styleUrls: ['./cadre-problem.component.css']
})
export class CadreProblemComponent implements OnInit {
  isActivate = false;

  constructor(private selectItemService: SelectItemService) {
  }
  ngOnInit() {
  }

  selectItem(label: string) {
    this.isActivate = true;
    this.selectItemService.selectedItem(label);
  }
}
