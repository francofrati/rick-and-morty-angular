import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css',
  // inputs: ['name: characterName', 'gender: characterGender', 'imgUrl']
})
export class CharacterCardComponent {
  @Input() imgUrl = ''
  @Input() name = ''
  @Input() gender = ''

}
