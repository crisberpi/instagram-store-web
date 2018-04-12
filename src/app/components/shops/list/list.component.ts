import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../../shared/model/list.model';
import { ShopsService } from './../../../shared/services/shops.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @Input() list: List;

  constructor(private shopsService: ShopsService) { }

  ngOnInit() {
    this.shopsService.shops$
      .subscribe((shops) => {
        this.list.shops = shops.filter(shop => shop.list === this.list.title);
      });
  }

}
