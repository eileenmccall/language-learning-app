import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AuthGuardService } from './routing/guards/auth-guard.service';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicInterceptor } from './core/interceptors/basic.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { AppStoreModule } from './store';
import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { RouteSerializer } from './store/router/route.serializer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '@env/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AppStoreModule,
    StoreModule.forRoot({
      router: routerReducer
    }, {
      metaReducers: !environment.production ? [storeFreeze] : []
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      serializer: RouteSerializer,
      stateKey: 'router'
    }),
    RoutingModule
  ],
  providers: [
    AuthGuardService,
    {
      provide: RouterStateSerializer,
      useClass: RouteSerializer
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
