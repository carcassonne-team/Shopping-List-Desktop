import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {LoginComponent} from './components/elements/login/login.component';
import {RegisterComponent} from './components/elements/register/register.component';
import {FormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {SnackBar} from './helpers/snack-bar.helper';
import {MenuComponent} from './components/elements/menu/menu.component';
import {DashboardContentComponent} from './components/elements/dashboard-content/dashboard-content.component';
import { CreateListComponent } from './components/dialogs/create-list/create-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    DashboardContentComponent,
    CreateListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexModule,
    HttpClientModule,
  ],
  providers: [SnackBar],
  bootstrap: [AppComponent]
})
export class AppModule {
}
