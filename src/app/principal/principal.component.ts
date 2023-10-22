import {Component} from '@angular/core';

import {ClienteService} from "../serices/cliente.service";
import {Cliente} from "../model/Cliente";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  cliente = new Cliente();

  isVisibleButton: boolean = true;
  tabela: boolean = true;

  clientes: Cliente[] = [];

  constructor(private service: ClienteService) {
  }

  selecionar(): void {
    this.service.selecionar()
      .subscribe(retorno => this.clientes = retorno)
  }

  cadastrar(): void {
    this.service.cadastrar(this.cliente)
      .subscribe(retorno => {
        this.clientes.push(retorno);
        this.cliente = new Cliente();
        alert("Cliente cadastrado com sucesso!")
      });
  }

  selecionarCliente(posicao: number): void {

    this.cliente = this.clientes[posicao];
    this.isVisibleButton = false;
    this.tabela = false;
  }

  editar(): void {
    this.service.editar(this.cliente.codigo, this.cliente)
      .subscribe(retorno => {
        let posicao = this.clientes.findIndex(obj => {
          return obj.codigo == retorno.codigo;
        });
        this.clientes[posicao] = retorno;
        this.cliente = new Cliente();
        this.isVisibleButton = true;
        this.tabela = true;
        alert("Cliente alterado com sucesso!")
        console.log(retorno)
      });
  }

  remover(): void {
    this.service.remover(this.cliente.codigo)
      .subscribe(retorno => {
        let posicao = this.clientes.findIndex(obj => {
          return obj.codigo == this.cliente.codigo;
        });
        this.clientes.splice(posicao, 1);
        this.cliente = new Cliente();
        this.isVisibleButton = true;
        this.tabela = true;
        alert("Cliente removido com sucesso!")
        console.log(retorno)
      });
  }

  cancelar(): void {

    this.cliente = new Cliente();
    this.isVisibleButton = true;
    this.tabela = true
  }



  ngOnInit() {
    this.selecionar();
  }

}
