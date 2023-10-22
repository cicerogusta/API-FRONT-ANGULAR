import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';

import {HttpClient} from "@angular/common/http";
import {Cliente} from "../model/Cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl:string = 'http://localhost:8080'
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
    const url = `${this.baseUrl}/cliente/${id}`
    return this.http.put<Cliente>(url, obj)
  }

  remover(id:number):Observable<Cliente> {
    const url = `${this.baseUrl}/cliente/${id}`
    return this.http.delete<Cliente>(url)
  }

}
