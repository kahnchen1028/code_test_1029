import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from "./@code/guards/login-guards.guard";
import { LoginComponent } from './components/login/login.component';
import { LoginSuccessComponent } from './components/login-success/login-success.component';

const routes: Routes = [
  { path: 'login', LoginComponent,
    canActivate: [LoginGuard]
  },

  {
   path: 'suceess', LoginComponent,
   canActivate: [LoginGuard]
  },
  { path: '', LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
