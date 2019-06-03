import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyhighlightDirective } from './directives/myhighlight.directive';
import { MynumberDirective } from './directives/mynumber.directive';
import { ReversePipe } from './reverse.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child2Component } from './child2/child2.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateuserComponent } from './createuser/createuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ErrorComponent } from './error/error.component';
import { InternalservererrorComponent } from './internalservererror/internalservererror.component';
import { Service1Component } from './services/service1/service1.component';
import { Service2Component } from './services/service2/service2.component';
import { Service3Component } from './services/service3/service3.component';
import { Service4Component } from './services/service4/service4.component';
import { AppInterceptor } from './interceptors/spinner.interceptors';


@NgModule({
  declarations: [
    AppComponent,
    MyhighlightDirective,
    MynumberDirective,
    ReversePipe,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    ContactusComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Parent3Component,
    Child2Component,
    UserListComponent,
    CreateuserComponent,
    EdituserComponent,
    ErrorComponent,
    InternalservererrorComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
