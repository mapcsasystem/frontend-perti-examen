import { Component } from '@angular/core';
import { LocalNotificationsService } from 'src/app/shared/notifications/local-notifications.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(private readonly noti: LocalNotificationsService) {}
}
