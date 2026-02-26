import { Component, signal } from '@angular/core';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('lab_6');
}
