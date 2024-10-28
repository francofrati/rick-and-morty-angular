import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  http = inject(HttpClient)

  character = signal<any>({})

  apiUrl = 'https://rickandmortyapi.com/api'
  characterUrl = (characterId: string | number) => this.apiUrl + "/character/" + characterId

  getCharacter(characterId: string | number) {
    return this.http.get<{ info: any, results: any[] }>(this.characterUrl(characterId))
  }

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('characterId')
    this.getCharacter(characterId as string).subscribe((res) => {
      this.character.set(res)
      console.log(characterId, this.character())
    })
  }

}
