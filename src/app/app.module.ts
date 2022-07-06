import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { environment } from 'environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageViewComponent } from './image-view/image-view.component';

@NgModule({
  declarations: [AppComponent, ImageViewComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    }), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
