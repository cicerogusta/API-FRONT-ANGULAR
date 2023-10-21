import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

import {HttpClient} from "@angular/common/http";
import {Cliente} from "../model/Cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlGetAllClients:string = 'http://localhost:8080/clientes'
  private urlPostClient:string = 'http://localhost:8080/cliente'
  constructor(private http:HttpClient) { }

   selecionar():Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlGetAllClients);
  }

  cadastrar(obj: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlPostClient, obj)
  }

}
