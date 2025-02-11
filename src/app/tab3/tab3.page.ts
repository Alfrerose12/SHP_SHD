import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  preguntas = [
    { 
      texto: '¿Prefieres jugar solo o con amigos?', 
      opciones: [
        { texto: 'Solo', valor: 'rpg' },
        { texto: 'Con amigos', valor: 'multiplayer' }
      ]
    },
    { 
      texto: '¿Te gusta la acción intensa o pensar estrategias?', 
      opciones: [
        { texto: 'Acción intensa', valor: 'shooter' },
        { texto: 'Estrategia', valor: 'estrategia' }
      ]
    },
    { 
      texto: '¿Prefieres juegos con historia profunda o competitivos?', 
      opciones: [
        { texto: 'Historia profunda', valor: 'rpg' },
        { texto: 'Competitivos', valor: 'shooter' }
      ]
    },
    { 
      texto: '¿Prefieres los mundos abiertos o entornos lineales?', 
      opciones: [
        { texto: 'Mundos abiertos', valor: 'rpg' },
        { texto: 'Entornos lineales', valor: 'estrategia' }
      ]
    },
    { 
      texto: '¿Prefieres juegos centrados en la narrativa o en la jugabilidad?', 
      opciones: [
        { texto: 'Narrativa', valor: 'rpg' },
        { texto: 'Jugabilidad', valor: 'shooter' }
      ]
    },
    { 
      texto: '¿Te gustan los desafíos tácticos o los enfrentamientos directos?', 
      opciones: [
        { texto: 'Desafíos tácticos', valor: 'estrategia' },
        { texto: 'Enfrentamientos directos', valor: 'shooter' }
      ]
    }
  ];

  respuestas: string[] = [];
  generoRecomendado: string = '';
  juegosRecomendados: { nombre: string }[] = [];

  constructor() {}

  calcularGenero() {
    const conteo: Record<string, number> = {};

    this.respuestas.forEach(respuesta => {
      conteo[respuesta] = (conteo[respuesta] || 0) + 1;
    });

    const generoGanador = Object.keys(conteo).reduce((a, b) => conteo[a] > conteo[b] ? a : b, '') as keyof typeof generos;

    const generos = {
      rpg: { 
        nombre: 'RPG', 
        juegos: [
          { nombre: 'The Witcher 3' },
          { nombre: 'Final Fantasy' },
          { nombre: 'Dark Souls' }
        ]
      },
      shooter: { 
        nombre: 'Shooter', 
        juegos: [
          { nombre: 'Call of Duty' },
          { nombre: 'Counter-Strike' },
          { nombre: 'Doom' }
        ]
      },
      estrategia: { 
        nombre: 'Estrategia', 
        juegos: [
          { nombre: 'Age of Empires' },
          { nombre: 'Civilization' },
          { nombre: 'Starcraft' }
        ]
      },
      multiplayer: { 
        nombre: 'Multijugador', 
        juegos: [
          { nombre: 'Fortnite' },
          { nombre: 'League of Legends' },
          { nombre: 'Minecraft' }
        ]
      }
    };

    if (generos[generoGanador]) {
      this.generoRecomendado = generos[generoGanador].nombre;
      this.juegosRecomendados = generos[generoGanador].juegos;
    } else {
      this.generoRecomendado = 'Indefinido';
      this.juegosRecomendados = [];
    }
  }

  formValido(): boolean {
    return this.respuestas.length === this.preguntas.length && this.respuestas.every(respuesta => respuesta !== undefined);
  }
}
