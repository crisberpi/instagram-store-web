import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-create',
  templateUrl: './shop-create.component.html',
  styleUrls: ['./shop-create.component.css']
})
export class ShopCreateComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
