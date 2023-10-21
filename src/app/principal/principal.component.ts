import{Component}from'@angular/core';

import {ClienteService} from "../serices/cliente.service";
import {Cliente} from "../model/Cliente";

@Component({
selector: 'app-principal',
templateUrl: './principal.component.html',
styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

    cliente = new Cliente();

    isVisible:boolean = true;

    clientes:Cliente[] = [];

    constructor(private service: ClienteService){}

    selecionar():void {
      this.service.selecionar()
      .subscribe(retorno => this.clientes = retorno )
    }

    cadastrar(): void {
      this.service.cadastrar(this.cliente)
        .subscribe(retorno => {
          this.clientes.push(retorno);
          this.cliente = new Cliente();
          alert("Cliente cadastrado com sucesso!")
        });
    }

    ngOnInit() {
      this.selecionar();
    }

}
