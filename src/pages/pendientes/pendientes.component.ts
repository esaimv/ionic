import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { detalleComponent } from '../detalle/detalle.component';
@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor( private _listaDeseos:ListaDeseosService,
                private _navControler:NavController) {  }

  ngOnInit() {}

  irAgregar(){
    this._navControler.push(AgregarComponent)
  }
  verDetalle(lista, i){
    this._navControler.push(detalleComponent, {lista, i})
  }
}
