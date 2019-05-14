import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import {MyhighlightDirective} from './directives/myhighlight.directive';
import {MynumberDirective} from './directives/mynumber.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyhighlightDirective,
    MynumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
