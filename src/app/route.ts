import { Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { MusicAppComponent } from './music-app/music-app.component';
import { AuthGuard } from './auth/auth.guard';
import { FooComponent } from './foo/foo.component';
import { PlaidComponent } from './plaid/plaid.component';
import { BankDetComponent } from './plaid/bank-det/bank-det.component';
import { BankAddComponent } from './plaid/bank-add/bank-add.component';

export const appRoutes: Routes =[
    {
        path:'', redirectTo: '/homepage',pathMatch:'full'
    },
    {
        path:'homepage', component: AuthenticateComponent
       
    },
    {
        path:'testPage', component:FooComponent, canActivate:[AuthGuard]
    },
    {
        path:'musicApp', component: MusicAppComponent, canActivate:[AuthGuard]
    },
    {
        path:'plaid', component: PlaidComponent, canActivate:[AuthGuard],children: [
            { path: "viewDetails",component: BankDetComponent},
            { path: "add",component: BankAddComponent} ]
    }
] 