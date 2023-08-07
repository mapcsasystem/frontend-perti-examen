import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRandom, Result } from '../interfaces/user-random.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser, IUserMSG } from '../interfaces/user.interface';

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

  saveUser(valor: IUser): IUserMSG {
    localStorage.setItem('user', JSON.stringify(valor));
    return {
      ok: true,
      msg: 'Datos guardados exitosamente en el localStorage.',
    };
  }

  getUser(): IUserMSG {
    return {
      ok: true,
      msg: localStorage.getItem('user') as string,
    };
  }

  logout(): IUserMSG {
    localStorage.clear();
    return {
      ok: true,
      msg: 'Sesión cerrada correctamente',
    };
  }

  login(): IUserMSG {
    return {
      ok: true,
      msg: 'Sesión iniciada correctamente',
    };
  }
}
