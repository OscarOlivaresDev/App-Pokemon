import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  name : any;
  pokeImage : any;
  constructor (private PokemonService : PokemonService) {}

  ngOnInit(): void {
  }

  searchPokemon(){
    this.PokemonService.getAllPokemon(this.name).subscribe((data:any) =>{
      this.pokeImage = data.sprites.other.dream_world.front_default;
    })
  }

}
