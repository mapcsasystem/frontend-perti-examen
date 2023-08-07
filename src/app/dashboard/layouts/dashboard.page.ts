import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalNotificationsService } from 'src/app/shared/notifications/local-notifications.service';
import { DashboardService } from '../services/dashboard.service';
import { IMovies } from '../interfaces/movie.interface';
import { debounceTime, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoadingController, ModalController } from '@ionic/angular';
import { DetailMovieComponent } from '../components/detail-movie/detail-movie.component';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
  movies: IMovies[] = [];
  formInput = new FormControl('');
  private _sub = new Subscription();
  constructor(
    private readonly _noti: LocalNotificationsService,
    private readonly _dashboardService: DashboardService,
    private readonly _modalCtrl: ModalController,
    private readonly loadingCtrl: LoadingController,
    private readonly _authService: AuthService
  ) {}

  async ngOnInit() {
    await this.showLoading();
    this._dashboardService.getAllMovies().subscribe(async (resp) => {
      this.movies = resp;
      await this.loadingCtrl.dismiss();
    });
    this._sub.add(
      this.formInput.valueChanges
        .pipe(
          debounceTime(500),
          tap(() => {})
        )
        .subscribe((value) => {
          if (value?.length === 0) {
            this.getAllMovies();
          } else {
            this.searchMovies(value);
          }
        })
    );
  }

  async searchMovies(termino: any) {
    await this.showLoading();
    const term = termino as string;
    this._dashboardService
      .searchMovies(term)
      .pipe(debounceTime(300))
      .subscribe(async (resp) => {
        console.log(resp);
        this.movies = resp;
        await this.loadingCtrl.dismiss();
      });
  }

  async getAllMovies() {
    await this.showLoading();
    this._dashboardService.getAllMovies().subscribe(async (resp) => {
      this.movies = resp;
      await this.loadingCtrl.dismiss();
    });
  }

  async showModal(movie: IMovies) {
    const modal = await this._modalCtrl.create({
      component: DetailMovieComponent,
      cssClass: 'modalSize',
      backdropDismiss: false,
      animated: true,
      componentProps: { movie },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();

    if (!data) return;
    console.log(data);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
    });

    loading.present();
  }

  logout() {
    const resp = this._authService.logout();
    this._noti.scheduleNotification('Cerrar', 'Sesión', resp.msg);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
