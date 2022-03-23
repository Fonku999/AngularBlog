import { Injectable } from '@angular/core';
import { Post } from '../interfaces/postinterface';

@Injectable({
  providedIn: 'root'
})


export class PostService {

  arrServicios: Post[];



  constructor() {
    this.arrServicios = [
      {
        title: 'Bob esponja', body: 'La serie se desarrolla en el fondo del océano Pacífico, en la ciudad submarina de Fondo de Bikini(Bikini Bottom, en inglés), donde vive una esponja de mar cuadrada y de color amarillo, llamada Bob Esponja.', author: 'United Plankton Pictures', image: 'https://www.neeo.es/wp-content/uploads/2019/07/bob-esponja.jpg', category: 'Dibujos', createdAt: new Date()
      },
      {
        title: 'Putin', body: 'Vladímir Vladímirovich Putin es un abogado, militar y político ruso, actual presidente de su país desde 2012, oficio que también ejerció entre 1999 y 2008, convirtiéndolo en el presidente de Rusia que más tiempo ha estado en el cargo.', author: 'Presidente de Rusia', image: 'https://media.infocielo.com/p/2f053ed2012f4678f0105985719d54ab/adjuntos/299/imagenes/001/374/0001374794/375x250/smart/vladimir_putin_men_brown_bears_run_533027_1280x800jpg.jpg', category: 'Guerra', createdAt: new Date()
      },

    ]
  }

  getAll(): Post[] {
    return this.arrServicios
  }


  getByCategory(pCategoria: string): Post[] {
    const filtrados = [];
    for (let servicio of this.arrServicios) {
      if (servicio.category.toLocaleLowerCase() === pCategoria.toLocaleLowerCase()) {
        filtrados.push(servicio)
      }
    }
    return filtrados;
  }

  create(pPost: Post) {
    this.arrServicios.push(pPost);
  }







}
