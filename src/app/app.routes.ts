import { Routes } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

export const routes: Routes = [
    { path: 'characters', component: CharactersListComponent },
    { path: 'characters/:characterId', component: CharacterDetailComponent },
    { path: '', redirectTo: '/characters', pathMatch: 'full' }
];
