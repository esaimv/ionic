import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class detalleComponent implements OnInit {

  idx:number
  lista:any

  constructor(
    public navController:NavController,
    public navParams:NavParams,
    public _listaDeseos:ListaDeseosService,
    public alertCtrl: AlertController) {
      this.idx =  this.navParams.get('i')
      this.lista =  this.navParams.get('lista')
    }

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado =  !item.completado
    let terminados = true
    for(let item of this.lista.items){
      if(!item.completado){
        terminados = false
        break;
      }
    }
    this.lista.terminado = terminados
    this._listaDeseos.actualizarData()
  }
  borrarItem(){
    this.alerta(this.lista.nombre, '¿Está seguro que desea borrar la lista?', 'Eliminar')
  }

  alerta(titulo, mensaje, ok) {
    let confirm = this.alertCtrl.create({
      title: titulo,
      message: mensaje,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            //-cancelar
          }
        },
        {
          text: ok,
          handler: () => {
            this._listaDeseos.eliminarLista(this.idx)
            this.navController.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
