import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { UserListComponent } from './user-list/user-list.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ErrorComponent } from './error/error.component';
import { InternalservererrorComponent } from './internalservererror/internalservererror.component';
import { Service1Component } from './services/service1/service1.component';
import { Service2Component } from './services/service2/service2.component';
import { Service3Component } from './services/service3/service3.component';
import { Service4Component } from './services/service4/service4.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "home", component: HomeComponent },
  {
    path: "services", component: ServicesComponent,
    children: [
      { path: "service1", component: Service1Component },
      { path: "service2", component: Service2Component },
      { path: "service3", component: Service3Component },
      { path: "service4", component: Service4Component },
    ]

  },
  { path: "contactus", component: ContactusComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "userlist", component: UserListComponent },
  { path: "createuser", component: CreateuserComponent },
  { path: "edituser/:id", component: EdituserComponent },
  { path: "error", component: InternalservererrorComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
