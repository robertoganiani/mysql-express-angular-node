import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import appRoutes from "./app.routes";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ServicesModule} from "./services/services.module";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RegisterComponent} from "./register/register.component";

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, appRoutes, ServicesModule.forRoot() ],
    declarations: [ AppComponent, LoginComponent, HomeComponent, RegisterComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
