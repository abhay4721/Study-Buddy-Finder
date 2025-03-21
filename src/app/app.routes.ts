import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FindBuddyComponent } from './pages/find-buddy/find-buddy.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'find-buddy', component: FindBuddyComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' } // Redirect unknown routes to home
];
