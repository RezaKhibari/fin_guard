import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { BudgetCategoriesComponent } from './components/budget-categories/budget-categories.component';
import { GoalsComponent } from './components/goals/goals.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TransactionsComponent,
    BudgetCategoriesComponent,
    GoalsComponent,
    CurrenciesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
