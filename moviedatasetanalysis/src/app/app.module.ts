import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectorWiseComponent } from './director-wise/director-wise.component';
import { HomeComponent } from './home/home.component';
import { VerdictwiseComponent } from './verdictwise/verdictwise.component';
import { YearwiseComponent } from './yearwise/yearwise.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreatorsComponent } from './creators/creators.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'directorwise',
    component: DirectorWiseComponent,
  }, 
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'yearwise',
    component: YearwiseComponent,
  },
  {
    path: 'verdictwise',
    component: VerdictwiseComponent,
  },
  {
    path: 'creators',
    component: CreatorsComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  }
 ];

@NgModule({
  declarations: [
    AppComponent,
    DirectorWiseComponent,
    HomeComponent,
    YearwiseComponent,
    PagenotfoundComponent,
    VerdictwiseComponent,
    CreatorsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, 
    HttpClientModule, BrowserAnimationsModule 
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
