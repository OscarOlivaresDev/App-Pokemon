import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private urlApi : String = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http : HttpClient) { }

  getAllPokemon(name : string){
    return this.http.get(`${this.urlApi}/${name}`);
  }

}
