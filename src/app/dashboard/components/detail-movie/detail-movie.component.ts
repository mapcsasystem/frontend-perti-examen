import { Component, Input } from '@angular/core';
import { IMovies } from '../../interfaces/movie.interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent {
  @Input() movie!: IMovies;
  constructor(private readonly _modalCtrl: ModalController) {}

  closeModal(): void {
    this._modalCtrl.dismiss();
  }
}
