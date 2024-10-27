import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharactersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rick-and-morty-angular';
}
