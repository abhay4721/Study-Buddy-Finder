import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet], // ✅ Combine imports into one array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ Fix: Use 'styleUrls' (plural)
})
export class AppComponent {
  title = 'study-buddy-finder';
}
