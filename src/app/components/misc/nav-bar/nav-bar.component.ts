import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from './../../../shared/services/session.service';
import { User } from './../../../shared/model/user.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  private user: User;
  private userSubscription: Subscription;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private routes: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
    this.userSubscription = this.sessionService.onUserChanges()
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onClickLogout() {
    this.sessionService.logout()
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

}
