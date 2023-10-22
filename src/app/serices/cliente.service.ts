import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

import {HttpClient} from "@angular/common/http";
import {Cliente} from "../model/Cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl:string = 'http://localhost:8080'
  private urlGetAllClients:string = 'http://localhost:8080/clientes'
  private urlPostClient:string = 'http://localhost:8080/cliente'
  private urlPutClient:string = 'http://localhost:8080/clientes/{id}'
  constructor(private http:HttpClient) { }

   selecionar():Observable<Cliente[]> {
     const url = `${this.baseUrl}/clientes`
    return this.http.get<Cliente[]>(url);
  }

  cadastrar(obj: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/cliente`
    return this.http.post<Cliente>(url, obj)
  }

  editar(id:number, obj: Cliente): Observable<Cliente> {
    const url = `${this.baseUrl}/clientes/${id}`
    return this.http.put<Cliente>(url, obj)
  }

}
