import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/model/user.model';
import { Shop } from '../../../shared/model/shop.model';
import { UsersService } from './../../../shared/services/users.service';
import { SessionService } from './../../../shared/services/session.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  shop: Shop;
  user: User;
  favourite: Array<Shop>;
  error: Object;
  userlist: any;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private usersService: UsersService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.user = this.sessionService.getUser()
    this.router.navigate(['/users', this.user.id]);
    this.routes.params.subscribe((params: Params) => {
      console.log(params)
      const userId = params['id'];
      this.usersService.getShopLikes(userId)
        .subscribe((user) => {
          this.user = user;

          //this.products = shop.products;
        });

    })

  }




}
