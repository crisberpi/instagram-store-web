import { Routes } from '@angular/router';
import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';
import { ShopListComponent } from './components/shops/shop-list/shop-list.component';
import { ShopCreateComponent } from './components/shops/shop-create/shop-create.component';

export const routes: Routes = [
  { path: '', redirectTo: 'shops', pathMatch: 'full'},
  { path: 'shops', component: ShopListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  {
      path: 'new',
      component: ShopCreateComponent,
  },

];
