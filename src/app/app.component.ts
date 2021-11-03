import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cases: Array<any> = [];
  casesShow: Array<any> = [];
  departament = '';
  town = '';
  type = '';
  age = 0;
  det = '';

  constructor() {
    this.consultAll();
  }

  async consultAll() {
    try {
      const result = await fetch(
        'https://www.datos.gov.co/resource/gt2j-8ykr.json'
      );
      this.cases = await result.json();
    } catch (e) {
      console.log(e);
    }
  }

  findByTown() {
    if (this.town == '') {
      return alert('ingrese un nombre de Municipio');
    }
    const consult = this.town.toUpperCase();
    this.casesShow = this.cases.filter(
      (ob: any) => ob.ciudad_municipio_nom == consult
    );
    if (this.casesShow.length <= 0) {
      return alert('no existen registro para ese Municipio');
    }
    this.type = 'Municipio';
    this.det = this.town.toUpperCase();
  }

  findByDept() {
    if (this.departament == '') {
      return alert('ingrese un nombre de departamento');
    }
    const consult = this.departament.toUpperCase();
    this.casesShow = this.cases.filter(
      (ob: any) => ob.departamento_nom == consult
    );
    if (this.casesShow.length <= 0) {
      return alert('no existen registro para ese departamento');
    }
    this.type = 'Departamento';
    this.det = this.departament.toUpperCase();
  }

  findByAge() {
    if (this.age == 0) {
      return alert('ingrese un nombre de departamento');
    }
    this.casesShow = this.cases.filter((ob: any) => ob.edad == this.age);
    if (this.casesShow.length <= 0) {
      return alert('no existen registro para ese departamento');
    }
    this.type = 'Edad';
    this.det = this.age.toString();
  }
}
