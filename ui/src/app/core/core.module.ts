import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BasicInterceptor } from './interceptors/basic.interceptor';
import { AuthGuardService } from './routing/guards/auth-guard.service';
import {
  RouterStateSerializer,
  routerReducer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { RouteSerializer } from './store/router/route.serializer';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppStoreModule } from './store';
import { StoreModule } from '@ngrx/store';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RoutingModule } from './routing/routing.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  exports: [AppStoreModule, RoutingModule],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppStoreModule,
    StoreModule.forRoot(
      {
        router: routerReducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      serializer: RouteSerializer,
      stateKey: 'router'
    }),
    RoutingModule
  ],
  providers: [
    AuthenticationService,
    CookieService,
    AuthGuardService,
    {
      provide: RouterStateSerializer,
      useClass: RouteSerializer
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    core: CoreModule
  ) {
    if (core) {
      throw new Error('CoreModule already instantiated!');
    }
  }
}
