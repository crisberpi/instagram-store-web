import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import './rxjs.operators';

import { AppComponent } from './app.component';

import { NavBarComponent } from './components/misc/nav-bar/nav-bar.component';
import { routes } from './app.routes';
import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';

import { BoardComponent } from './components/misc/board/board.component';

import { SessionService } from './shared/services/session.service';
import { UsersService } from './shared/services/users.service';
import { ShopsService } from './shared/services/shops.service';
import { ProductsService } from './shared/services/products.service';
import { ShoppingCartService } from './shared/services/shoppingCart.service';

import { ShopListComponent } from './components/shops/shop-list/shop-list.component';
import { ShopCreateComponent } from './components/shops/shop-create/shop-create.component';
import { ShopBaseComponent } from './components/shops/shop-base/shop-base.component';
import { ShopItemComponent } from './components/shops/shop-item/shop-item.component';

import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { ProductBaseComponent } from './components/products/product-base/product-base.component';
import { ProductDetailsResolverGuard } from './shared/resolvers/product-details-resolver.guard';


import { ShoppingCartListComponent } from './components/shoppingCart/shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartItemComponent } from './components/shoppingCart/shopping-cart-item/shopping-cart-item.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignupComponent,
    LoginComponent,

    ShopListComponent,
    ShopCreateComponent,
    ShopBaseComponent,
    ShopItemComponent,

    ProductListComponent,
    ProductCreateComponent,
    ProductItemComponent,
    ProductBaseComponent,
    BoardComponent,

    ShoppingCartListComponent,
    ShoppingCartItemComponent,



  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [
    UsersService,
    SessionService,
    ShopsService,
    ProductsService,
    ShoppingCartService,
    ProductDetailsResolverGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
