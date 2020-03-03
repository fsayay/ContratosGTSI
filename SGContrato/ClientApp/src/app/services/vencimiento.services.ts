import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { interval, Observable, of } from "rxjs";
import { switchMap, flatMap, delay, map, concatAll, concatMap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class VencimientoService {
    _interval = 300000;
    _delay = 3000;

    constructor(private _http: HttpClient) {}

    getVencimientos() {
        return this._http.get<any[]>('/api/Vencimiento');
    }

    emitPeriodically() {
        return interval(this._interval).pipe(
            switchMap(() => this.getVencimientos()),
            concatAll(),
            concatMap(val => of(val).pipe(delay(this._delay)))
        );
    }
}
