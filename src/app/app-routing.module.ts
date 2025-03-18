import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FindBuddyComponent } from './pages/find-buddy/find-buddy.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from '../pages/auth/signup/signup.component';
import { LoginComponent } from '../pages/auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'find-buddy', component: FindBuddyComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },// Redirect unknown routes to home
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }  // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
