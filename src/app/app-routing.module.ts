import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SummaryComponent } from './summary/summary.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'summary', component: SummaryComponent, children: [
    { path: 'newInv', component: InventoryComponent },
    { path: 'newTran',  component: TransactionComponent },
    { path: 'reports', component: ReportsComponent }
  ] },
  // { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
