import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  juegos = [
    {
      nombre: 'Call of Duty',
      genero: 'Acción',
      plataforma: ['PlayStation', 'PC', 'Xbox'],
      tiempo: 'Sesión larga',
      jugadores: 'Multijugador',
      imagen: 'https://th.bing.com/th/id/OIP.dNyuYksQSSRqvZcCBBWKHQHaFj?rs=1&pid=ImgDetMain',
    },
    {
      nombre: 'Goat Simulator',
      genero: 'Simulación',
      plataforma: ['PC', 'PlayStation', 'Xbox'],
      tiempo: 'Sesión corta',
      jugadores: 'Un jugador',
      imagen: 'https://th.bing.com/th/id/OIP.dFz0_qZHj-j45ZsS8ksUXwHaEK?rs=1&pid=ImgDetMain',
    },
    {
      nombre: 'League of Legends',
      genero: 'Estrategia',
      plataforma: ['PC'],
      tiempo: 'Sesión larga',
      jugadores: 'Multijugador',
      imagen: 'https://th.bing.com/th/id/R.56628c89043ea820cdacdb4a39ba1052?rik=RqM7pO%2fnUyGNcQ&pid=ImgRaw&r=0',
    },
    {
      nombre: 'Gears of War 4',
      genero: 'Acción',
      plataforma: ['Xbox', 'PC'],
      tiempo: 'Sesión larga',
      jugadores: 'Multijugador',
      imagen: 'https://th.bing.com/th/id/OIP.n9j35drkNZOBJ4vc2Ir2ZQHaEK?rs=1&pid=ImgDetMain',
    },
    {
      nombre: 'Forza Horizon 5',
      genero: 'Carreras',
      plataforma: ['Xbox', 'PC'],
      tiempo: 'Sesión media',
      jugadores: 'Multijugador',
      imagen: 'https://gameranx.com/wp-content/uploads/2021/08/ForzaHorizon5_KeyArt_Horiz_RGB_Final.jpg',
    },
    {
      nombre: 'Spider-Man 2',
      genero: 'Acción',
      plataforma: ['PlayStation'],
      tiempo: 'Sesión media',
      jugadores: 'Un jugador',
      imagen: 'https://th.bing.com/th/id/OIP.scHLU-7DtzJJIiD1jnq7YQHaHa?rs=1&pid=ImgDetMain',
    },
    {
      nombre: 'The Last Of Us',
      genero: 'Supervivencia',
      plataforma: ['PlayStation'],
      tiempo: 'Sesión larga',
      jugadores: 'Un jugador',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg',
    },
    {
      nombre: 'Street Fighter V',
      genero: 'Peleas',
      plataforma: ['PlayStation', 'PC'],
      tiempo: 'Sesión larga',
      jugadores: 'Multijugador',
      imagen: 'https://upload.wikimedia.org/wikipedia/en/8/80/Street_Fighter_V_box_artwork.png',
    },
    {
      nombre: 'Halo Infinite',
      genero: 'Accion',
      plataforma: ['Xbox', 'PC'],
      tiempo: 'Sesión larga',
      jugadores: 'Multijugador',
      imagen: 'https://store-images.s-microsoft.com/image/apps.21536.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.68796bde-cbf5-4eaa-a299-011417041da6',
    },
    {
      nombre: 'God of War',
      genero: 'Supervivencia',
      plataforma: ['PlayStation'],
      tiempo: 'Sesión larga',
      jugadores: 'Un jugador',
      imagen: 'https://m.media-amazon.com/images/M/MV5BNjJiNTFhY2QtNzZkYi00MDNiLWEzNGEtNWE1NzBkOWIxNmY5XkEyXkFqcGc@._V1_.jpg',
    },
    {
      nombre: 'The King Of Fighters XV',
      genero: 'Peleas',
      plataforma: ['PlayStation', 'PC'],
      tiempo: 'Sesión corta',
      jugadores: 'Multijugador',  
      imagen: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_THEKINGOFFIGHTERSXV_SNKCORPORATION_S2_1200x1600-5bf30907b3472a4d4bfed10e93fc7135',
    }
  ];

  filtros = {
    genero: '',
    plataforma: '',
    tiempo: '',
    jugadores: '',
  };

  juegosFiltrados = [...this.juegos];

  constructor() {}

  aplicarFiltros() {
    this.juegosFiltrados = this.juegos.filter(juego => {
      return (
        (!this.filtros.genero || juego.genero === this.filtros.genero) &&
        (!this.filtros.plataforma || juego.plataforma.includes(this.filtros.plataforma)) &&
        (!this.filtros.tiempo || juego.tiempo === this.filtros.tiempo) &&
        (!this.filtros.jugadores || juego.jugadores === this.filtros.jugadores)
      );
    });
  }
}
