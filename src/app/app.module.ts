import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './route';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { RouterModule } from '@angular/router';
import { FormsModule, FormControl, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptor} from './shared/token-interceptor';
import { MusicAppComponent } from './music-app/music-app.component';
import { FooComponent } from './foo/foo.component';
import { HeaderComponent } from './shared/header/header.component';
import { PlaidComponent } from './plaid/plaid.component';
import { BankDetComponent } from './plaid/bank-det/bank-det.component';
import { BankAddComponent } from './plaid/bank-add/bank-add.component'
@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    MusicAppComponent,
    FooComponent,
    HeaderComponent,
    PlaidComponent,
    BankDetComponent,
    BankAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
