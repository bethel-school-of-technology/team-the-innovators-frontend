import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: "hotspots", component: HomeComponent},
  { path: "signup", component: SignupComponent},
  //localhost:4200/
  { path: "", redirectTo: "hotspots", pathMatch: "full"},
  // localhost:4200/login
  { path: "login", component: LoginComponent },
  // localhost:4200/profile
  { path: "profile", component: AccountComponent },
  // localhost:4200/admin
  { path: "admin", component: AdminComponent },
  // localhost:4200/places/:place_id
  { path: "places/:place_id", component: ResultComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
