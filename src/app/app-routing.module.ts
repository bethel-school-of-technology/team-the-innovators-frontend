import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: "hotspots", component: HomeComponent},
  { path: "signup", component: SignupComponent},
  { path: "", redirectTo: "hotspots", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
