import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { DashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { AdminComponent } from './components/pages/admin/admin/admin.component';
import { OrganizationComponent } from './components/pages/admin/organization/organization.component';
import { CanteenMenuComponent } from './components/pages/admin/canteen-menu/canteen-menu.component';
import { SettingsComponent } from './components/pages/admin/settings/settings.component';
import { HelpRequestsComponent } from './components/pages/admin/help-requests/help-requests.component';
import { SupportComponent } from './components/pages/admin/support/support.component';

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
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'organization',
                component: OrganizationComponent
            },
            {
                path: 'help',
                component: HelpRequestsComponent
            },
            {
                path: 'support',
                component: SupportComponent
            },
            {
                path: 'menu',
                component: CanteenMenuComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            }

            // Add more admin routes here as needed, for example:
            // {
            //     path: 'users',
            //     component: UsersComponent
            // }
        ]
    },
];
