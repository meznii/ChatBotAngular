import {Component, OnInit} from '@angular/core';
import {SelectItemService} from '../../../services/select-item.service';

@Component({
  selector: 'app-type-problem',
  templateUrl: './type-problem.component.html',
  styleUrls: ['./type-problem.component.scss']
})
export class TypeProblemComponent implements OnInit {
  isActiveStyle = false;
  btn1 = false;
  btn2 = false;
  btn3 = false;

  constructor(private selectItemService: SelectItemService) {
  }

  ngOnInit(): void {
  }

  selecProblem(label: string) {
    this.selectItemService.selectedProblem(label);
    if (label === 'CRM') {
      this.btn1 = true;
      this.btn2 = false;
      this.btn3 = false;
    }
    if (label === 'voice') {
      this.btn1 = false;
      this.btn2 = true;
      this.btn3 = false;
    }
    if (label === 'billing') {
      this.btn1 = false;
      this.btn2 = false;
      this.btn3 = true;
    }
  }
}
