import { Language } from 'src/interfaces/language';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() languages: Array<Language> = [];
  @Input() itemsForPage: number = 5;
  @Input() totalItems: number = 0;

  actualPage = 1;

  constructor() {}

  clickDer() {
    this.actualPage += 1;
  }
  clickIzq() {
    this.actualPage--;
  }
}
