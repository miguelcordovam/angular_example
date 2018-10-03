import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { SitesComponent } from './sites/sites.component';
import { ManagementComponent } from './management/management.component';

const appRoutes: Routes = [
  { path: 'admin', component: ManagementComponent},
  { path: 'products', component: ProductComponent},
  { path: '', component: AppComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SitesComponent,
    ManagementComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
