import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { IonicStorageModule } from '@ionic/storage';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

// Pages
import { ListaPage } from '../pages/lista/lista';
import { TableroPage } from '../pages/tablero/tablero';

// Modals
import { AddProductModalPage } from "../pages/add-product-modal/add-product-modal";
import { DeleteProductModalPage } from "../pages/delete-product-modal/delete-product-modal"
import { AddListModalPage } from "../pages/add-list-modal/add-list-modal";

// Services
import { ProductoServiceProvider } from '../providers/producto-service/producto-service';
import { ListaServiceProvider } from '../providers/lista-service/lista-service';

// Pipes
import { ImportanceProductsPipe } from '../pipes/importance-products/importance-products';
import { TypeProductsPipe } from '../pipes/type-products/type-products'
import { ProductInCartPipe } from '../pipes/product-in-cart/product-in-cart'


@NgModule({
  declarations: [
    MyApp,
    ListaPage,
    TableroPage,
    AddProductModalPage,
    DeleteProductModalPage,
    AddListModalPage,
    ImportanceProductsPipe,
    TypeProductsPipe,
    ProductInCartPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaPage,
    TableroPage,
    AddProductModalPage,
    DeleteProductModalPage,
    AddListModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductoServiceProvider,
    ListaServiceProvider
  ]
})
export class AppModule {}
