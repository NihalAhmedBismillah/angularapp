import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor,
    HttpHandler, HttpRequest,
    HttpResponse,
    HttpErrorResponse

} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

        const startRequest = Date.now();
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('Take time  : ', Date.now() - startRequest);
                }

                if (event instanceof HttpErrorResponse) {
                    console.log('eror : ', JSON.stringify(event));
                }
            })
        );

    }
}