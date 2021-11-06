import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  url = 'https://www.datos.gov.co/resource/734h-gxtn.json';

  constructor(private _http: HttpClient) {}

  getAllLanguages() {
    return this._http.get(this.url);
  }
}
