import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { DashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { AdminComponent } from './components/pages/admin/admin/admin.component';
import { OrganizationComponent } from './components/pages/admin/organization/organization.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'organization',
                component: OrganizationComponent
            }

            // Add more admin routes here as needed, for example:
            // {
            //     path: 'users',
            //     component: UsersComponent
            // }
        ]
    },
];
