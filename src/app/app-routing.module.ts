import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent },
  { path: "services", component: ServicesComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "aboutus", component: AboutusComponent },
  // { path: "login", component: LoginComponent },
  { path: "userlist", component: UserListComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
