import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './menu/menu-item/menu-item';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuItem ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
