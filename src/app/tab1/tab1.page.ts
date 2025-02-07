import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  juegos = [
    {
      titulo: 'The Last Of Us',
      categoria: 'Supervivencia',
      jugadores: '1',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg'
    },
    {
      titulo: 'Street Fighter V',
      categoria: 'Peleas',
      jugadores: '1 - 2',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/8/80/Street_Fighter_V_box_artwork.png'
    },
    {
      titulo: 'Halo Infinite',
      categoria: 'Disparos',
      jugadores: '1 - 6',
      imagen: 'https://store-images.s-microsoft.com/image/apps.21536.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.68796bde-cbf5-4eaa-a299-011417041da6'
    },
    {
      titulo: 'God of War',
      categoria: 'Supervivencia',
      jugadores: '1',
      imagen: 'https://m.media-amazon.com/images/M/MV5BNjJiNTFhY2QtNzZkYi00MDNiLWEzNGEtNWE1NzBkOWIxNmY5XkEyXkFqcGc@._V1_.jpg'
    },
    {
      titulo: 'Just Dance',
      categoria: 'Simulación',
      jugadores: '1 - 6',
      imagen: 'https://i.3djuegos.com/juegos/19988/just_dance_2025_edition/fotos/ficha/just_dance_2025_edition-5921196.jpg'
    },
    {
      titulo: 'The King Of Fighters XV',
      categoria: 'Peleas',
      jugadores: '1 - 2',
      imagen: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_THEKINGOFFIGHTERSXV_SNKCORPORATION_S2_1200x1600-5bf30907b3472a4d4bfed10e93fc7135'
    },
    {
      titulo: 'Call Of Duty Black Ops 6',
      categoria: 'Disparos',
      jugadores: '1 - 2',
      imagen: 'https://assets.xboxservices.com/assets/6d/2d/6d2d3f54-b3f0-4a09-8b4b-0ad627c5ee4f.jpg?n=000123445_Sharing_200x200.jpg'
    },
    {
      titulo: 'Stardew Valley',
      categoria: 'Simulación',
      jugadores: '1',
      imagen: 'https://store-images.s-microsoft.com/image/apps.44413.65985311967005000.4f51b5e9-febf-4990-8951-33ba59b634c9.924253ef-36b2-4cc0-8bb1-9a97c88d4828'
    },
  ];

  abrirFormulario() {
    this.navCtrl.navigateForward('/agregar-juegos');
  }

  agregarJuego(juego: any) {
    this.juegos.push(juego);
  }

  constructor(private navCtrl: NavController, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const newGame = history.state.juego;
      if (newGame) {
        this.juegos.push(newGame);
      }
    });
  }

}
