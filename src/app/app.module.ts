import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { ListaPage } from '../pages/lista/lista';
import { AddProductModalPage } from "../pages/add-product-modal/add-product-modal";
import { DeleteProductModalPage } from "../pages/delete-product-modal/delete-product-modal"
import { ProductoServiceProvider } from '../providers/producto-service/producto-service';
import { ImportanceProductsPipe } from '../pipes/importance-products/importance-products';
import { TypeProductsPipe } from '../pipes/type-products/type-products'


@NgModule({
  declarations: [
    MyApp,
    ListaPage,
    AddProductModalPage,
    DeleteProductModalPage,
    ImportanceProductsPipe,
    TypeProductsPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaPage,
    AddProductModalPage,
    DeleteProductModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductoServiceProvider
  ]
})
export class AppModule {}
