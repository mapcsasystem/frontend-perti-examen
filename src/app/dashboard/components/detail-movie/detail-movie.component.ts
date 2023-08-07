import { Component, Input, OnInit } from '@angular/core';
import { IMovies } from '../../interfaces/movie.interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  @Input() movie!: IMovies;
  constructor(private readonly _modalCtrl: ModalController) {}

  ngOnInit(): void {
    console.log(this.movie);
  }

  closeModal(): void {
    this._modalCtrl.dismiss();
  }
}
