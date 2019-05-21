import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { UserListComponent } from './user-list/user-list.component';
import { CreateuserComponent } from './createuser/createuser.component';

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
  { path: "userlist", component: UserListComponent },
  { path: "createuser", component: CreateuserComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
