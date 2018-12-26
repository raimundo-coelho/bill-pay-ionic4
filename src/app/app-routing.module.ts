import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'forum', loadChildren: './pages/forum/forum.module#ForumPageModule' },
  { path: 'tip', loadChildren: './pages/tip/tip.module#TipPageModule' },
  { path: 'category', loadChildren: './pages/category/category.module#CategoryPageModule' },
  { path: 'bill', loadChildren: './pages/bill/bill.module#BillPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
