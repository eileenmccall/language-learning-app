import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BasicInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/auth/login')) {
      localStorage.removeItem('token');

      const authString = btoa(`${req.body.email}:${req.body.password}`);

      req = req.clone({
        setHeaders: {
          Authorization: `Basic ${authString}`
        }
      });

      return next.handle(req);
    } else {
      return next.handle(req);
    }
  }
}
