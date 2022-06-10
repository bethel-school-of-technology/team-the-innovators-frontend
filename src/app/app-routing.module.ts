import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // localhost:4200/login
  { path: "login", component: LoginComponent },
  // localhost:4200/profile
  { path: "profile", component: AccountComponent },
  // localhost:4200/
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
