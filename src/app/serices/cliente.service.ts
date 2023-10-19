import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

import {HttpClient} from "@angular/common/http";
import {Cliente} from "../model/Cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url:string = 'http://localhost:8080/clientes'
  constructor(private http:HttpClient) { }

   selecionar():Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

}
