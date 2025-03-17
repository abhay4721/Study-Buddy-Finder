import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(-10px)' })),
      transition(':enter', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class AuthComponent {
  isSignUp = false;
  profilePic: string | ArrayBuffer | null = null;

  toggleForm() {
    this.isSignUp = !this.isSignUp;
  }

  uploadProfilePic(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePic = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}