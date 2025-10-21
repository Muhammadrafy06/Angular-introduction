import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  @Input() testo = '';
  protected readonly title = signal('angular-introduction');
  boolMessaggio = true;


  mostraMessaggio()
  {
    this.boolMessaggio = !this.boolMessaggio;
  }
}
