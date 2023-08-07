import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IMovies } from '../interfaces/movie.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private readonly _http: HttpClient) {}

  getAllMovies(): Observable<IMovies[]> {
    return this._http.get<IMovies[]>(`${environment.apiMovies}/schedule/full`);
  }

  searchMovies(term: string): Observable<IMovies[]> {
    let params = new HttpParams().set('q', term);
    return this._http.get<IMovies[]>(`${environment.apiMovies}/search/shows`, {
      params,
    });
  }
}
