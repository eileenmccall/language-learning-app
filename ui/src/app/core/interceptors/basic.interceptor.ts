import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BasicInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authString = btoa(`${req.body.email}:${req.body.password}`);
    req = req.clone({
      setHeaders: {
        'Authorization': `Basic ${authString}`
      },
    });

    console.log(req.headers);

    return next.handle(req);
  }
}
