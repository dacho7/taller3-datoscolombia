import { Language } from 'src/interfaces/language';
import { LanguagesService } from './../services/app.services';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  languagesResult: Array<Language> = [];

  constructor(private _serviceLanguages: LanguagesService) {
    this._serviceLanguages.getAllLanguages().subscribe((data: any) => {
      data.forEach((val: any) => {
        this.languagesResult.push({
          languageName: val.nombre_de_lengua,
          department: val.departamento,
          description: val.descripci_n_de_lengua,
          numSpeakers: val.n_mero_de_hablantes,
          state: val.vitalidad,
        });
      });
    });
  }
}
