import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalNotificationsService } from 'src/app/shared/notifications/local-notifications.service';
import { DashboardService } from '../services/dashboard.service';
import { IMovies } from '../interfaces/movie.interface';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { DetailMovieComponent } from '../components/detail-movie/detail-movie.component';

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
    private readonly _modalCtrl: ModalController
  ) {}
  ngOnInit(): void {
    this._dashboardService.getAllMovies().subscribe((resp) => {
      this.movies = resp;
    });
    this._sub.add(
      this.formInput.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
        if (value?.length === 0) {
          this.getAllMovies();
        } else {
          this.searchMovies(value);
        }
      })
    );
  }

  searchMovies(termino: any) {
    const term = termino as string;
    this._dashboardService
      .searchMovies(term)
      .pipe(debounceTime(300))
      .subscribe((resp) => {
        console.log(resp);
        this.movies = resp;
      });
  }

  getAllMovies() {
    this._dashboardService.getAllMovies().subscribe((resp) => {
      this.movies = resp;
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

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
