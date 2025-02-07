import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-juegos',
  templateUrl: './agregar-juegos.page.html',
  styleUrls: ['./agregar-juegos.page.scss'],
  standalone: false
})
export class AgregarJuegosPage implements OnInit {

  nuevoJuego = {
    titulo: '',
    categoria: '',
    jugadores: '',
    imagen: ''
  };

  constructor(private navCtrl: NavController) {}

  agregarJuego() {
    this.navCtrl.back();  
    this.navCtrl.navigateBack('/tabs/tab1', {
      state: { juego: this.nuevoJuego }
    });
  }

  cerrarFormulario() {
    this.navCtrl.back();
  }

  ngOnInit() {
  }

  

}
