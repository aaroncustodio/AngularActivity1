import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AddProductFormComponent } from './product/add-product-form/add-product-form.component';
// import { NewComponent } from './new.component';
// import { ExtraComponent } from './extra.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddProductFormComponent
    // NewComponent,
    // ExtraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
