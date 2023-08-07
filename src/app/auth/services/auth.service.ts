import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRandom, Result } from '../interfaces/user-random.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser, IUserSave } from '../interfaces/user.interface';

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

  saveUser(valor: IUser): Promise<IUserSave> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem('user', JSON.stringify(valor));
        resolve({
          ok: true,
          msg: 'Datos guardados exitosamente en el localStorage.',
        });
      } catch (error) {
        reject({
          ok: false,
          msg: 'Error al guardar los datos en el localStorage.',
        });
      }
    });
  }

  getUser(): Promise<IUserSave | IUser> {
    return new Promise((resolve, reject) => {
      try {
        const user = JSON.parse(localStorage.getItem('user') as string);
        resolve(user);
      } catch (error) {
        reject({
          ok: false,
          msg: 'Error al guardar los datos en el localStorage.',
        });
      }
    });
  }
}
