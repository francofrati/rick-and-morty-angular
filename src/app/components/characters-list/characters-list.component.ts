import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {
  http = inject(HttpClient)

  characters = signal<any[]>([])

  apiUrl = 'https://rickandmortyapi.com/api'
  allCharactersUrl = this.apiUrl + "/character"

  getCharacters() {
    return this.http.get<{ info: any, results: any[] }>(this.allCharactersUrl)
  }

  constructor() {
    this.getCharacters().subscribe((res) => {
      this.characters.set(res.results)
    })
  }

}
