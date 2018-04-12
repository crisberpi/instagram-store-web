import { Routes } from '@angular/router';
import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';
import { ShopListComponent } from './components/shops/shop-list/shop-list.component';
import { ShopCreateComponent } from './components/shops/shop-create/shop-create.component';
import { ShopBaseComponent } from './components/shops/shop-base/shop-base.component';
import { ListComponent } from './components/shops/list/list.component';
import { ShopItemComponent } from './components/shops/shop-item/shop-item.component';

export const routes: Routes = [
  { path: '', redirectTo: 'shops', pathMatch: 'full'},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  { path: 'shops', component: ShopListComponent },

  {
      path: 'shops',
      component: ShopBaseComponent,
      children: [
          {
              path: 'new',
              component: ShopCreateComponent
          },
          {
              path: 'list',
              component: ListComponent
          },
          {
              path: ':id',
              component: ShopItemComponent
          },
        ]
    },

];
