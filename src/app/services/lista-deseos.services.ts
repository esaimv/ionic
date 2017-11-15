import { Injectable } from '@angular/core';
import {Lista} from '../clases/listas';
@Injectable()
export class ListaDeseosService {

  listas:Lista[] = []

  constructor() {
    this.cargarData()
    // let lista1 = new Lista('Compras de super mercado')
    // let lista2 = new Lista('Juegos')
    //
    // this.listas.push(lista1)
    // this.listas.push(lista2)

    // console.log("Servicio inicializado")
   }

   agregarLista(lista:Lista){
     this.listas.push(lista)
     this.actualizarData()
   }

   actualizarData(){
     localStorage.setItem('data', JSON.stringify(this.listas))
   }
   cargarData(){
     if(localStorage.getItem('data')){
       this.listas = JSON.parse(localStorage.getItem('data'))
     }
   }
   eliminarLista(i:number){
     this.listas.splice(i, 1)
     this.actualizarData()
   }

}
