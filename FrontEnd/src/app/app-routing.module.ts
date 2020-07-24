import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user-model/login.component';
import { ProfileComponent } from './user-model/profile.component';
import { CompleteProfileComponent } from './user-model/complete-profile.component';
import { UpdateProfileComponent } from './user-model/update-profile/update-profile.component';
import { IstartPricingComponent } from './user-model/istart-pricing/istart-pricing.component';
import { AuthGuard } from './_services/auth.guard';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent }, //temporary for dev purposes.
    { path: 'register', component: RegisterComponent },
    { path: 'updateProfile', component: CompleteProfileComponent },
    { path: 'editProfile', component: UpdateProfileComponent},
    { path: 'istart-pricing', component: IstartPricingComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
