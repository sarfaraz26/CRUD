import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { EmployeeGridComponent } from './main/employee-grid/employee-grid.component';
import { EmployeeFormComponent } from './main/employee-form/employee-form.component';
import { AboutComponent } from './main/about/about.component';
import { StartViewComponent } from './main/start-view/start-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    EmployeeGridComponent,
    EmployeeFormComponent,
    AboutComponent,
    StartViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
