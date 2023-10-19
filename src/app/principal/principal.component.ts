import{Component}from'@angular/core';

import {ClienteService} from "../serices/cliente.service";
import {Cliente} from "../model/Cliente";

@Component({
selector: 'app-principal',
templateUrl: './principal.component.html',
styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

    isVisible:boolean = true;

    clientes:Cliente[] = [];

    constructor(private service: ClienteService){}

    selecionar():void {
      this.service.selecionar()
      .subscribe(retorno => this.clientes = retorno )
    }

    ngOnInit() {
      this.selecionar();
    }

}
