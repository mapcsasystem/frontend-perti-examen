import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRandom, Result } from '../interfaces/user-random.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly _http: HttpClient) {}

  getRandomUser(): Observable<Result> {
    return this._http.get<IUserRandom>(environment.apiRandomUser).pipe(
      map((resp) => {
        return resp.results[0];
      })
    );
  }
}
