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
import { JoinListComponent } from './components/dialogs/join-list/join-list.component';
import {ListViewService} from './services/list-view.service';
import { DeleteListComponent } from './components/dialogs/delete-list/delete-list.component';
import { AddProductToListComponent } from './components/dialogs/add-product-to-list/add-product-to-list.component';
import { CreateProductComponent } from './components/dialogs/create-product/create-product.component';
import { CreateCategoryComponent } from './components/dialogs/create-category/create-category.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    DashboardContentComponent,
    CreateListComponent,
    JoinListComponent,
    DeleteListComponent,
    AddProductToListComponent,
    CreateProductComponent,
    CreateCategoryComponent,
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
  providers: [SnackBar, ListViewService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
