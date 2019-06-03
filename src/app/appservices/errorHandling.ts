import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandle {


    public static errorHandle(errorMessage:HttpErrorResponse) {
        console.log('Error From Server : ', errorMessage);
        return throwError(errorMessage);

    }
}


