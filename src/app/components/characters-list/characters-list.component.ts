import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent implements OnInit {
  http = inject(HttpClient)

  characters = signal<any[]>([])

  apiUrl = 'https://rickandmortyapi.com/api'
  allCharactersUrl = this.apiUrl + "/character"

  getCharacters() {
    return this.http.get<{ info: any, results: any[] }>(this.allCharactersUrl)
  }
  ngOnInit(): void {
    console.log(this.characters())
    this.getCharacters().subscribe((res) => {
      this.characters.set(res.results)
    })
  }
}
