import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from '../../app/clases/index'
import { ToastController, NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.services';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista:string = ""
  nombreItem:string = "";
  listaVacia:boolean =  true;
  items:ListaItem[] = [];

  constructor(public _toastCtrl: ToastController,
              public _listaDeseos:ListaDeseosService,
              public _navController:NavController) {  }

  ngOnInit() { }

  borrar(i:number){
    this.items.splice(i, 1)
    if(this.items.length < 1){
      this.listaVacia = true
    }
  }

  agregar(){
    if(this.nombreItem.length < 1){
      return;
    }
    let item = new ListaItem()
    item.nombre = this.nombreItem
    this.items.push(item)
    this.nombreItem = ''
    this.listaVacia = false
  }
  guardarLista(){
    if(this.nombreLista.length < 1){
      this.mostrarTostada('El nombre de la lista es requerido')
      return
    }
    let lista= new Lista(this.nombreLista)
    lista.items = this.items
    // this._listaDeseos.listas.push(lista)
    this._listaDeseos.agregarLista(lista)
    this._navController.pop()
  }
  mostrarTostada(mensaje:string) {
    let toast = this._toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
