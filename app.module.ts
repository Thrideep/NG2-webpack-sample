import { NgModule, ErrorHandler, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
//import { PolymerElement } from '@vaadin/angular2-polymer';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpModule, Http, Request, RequestOptionsArgs, Response, XHRBackend, RequestOptions, ConnectionBackend, Headers } from '@angular/http';

import { CustomExceptionHandler } from './shared/customexceptionhandler';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';

//import { SearchFilters, IFilter } from './shared/search-filter/searchfilter.component';
import { DataTableDirectives } from 'angular2-datatable/datatable';

import { ConfigService } from './config/config.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { DashboardService } from './services/dashboard.service';
import { AuthenticationService } from './services/authetication.service';

//import { APP_ROUTER_PROVIDERS } from './routes/app.routes';
import { AppRouteModule } from './routes/app.routes';

import { HttpInterceptor } from './shared/httpinterceptor';


import { LoginComponent } from './components/login/login.component';

// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { HRMDasboardComponent } from './components/Dashboard/hrm.dashboard.component';
// import { SysAdminDasboardComponent } from './components/Dashboard/sysadmin.dashboard.component';


// import { LookupComponent } from './shared/Lookup/lookup.component';
// import { PaginationComponent } from './shared/pagination/pagination.component';
// import { MasterLayoutComponent } from './shared/shell/_layout.component';

import { PaginatePipe, PaginationControlsCmp, PaginationService, IPaginationInstance } from 'ng2-pagination';

//import { AdminComponent } from './components/admin/admin.component';
//import { RoleMasterComponent } from './components/admin/role.component';
//import { NotificationEmailComponent } from './components/admin/notification.email.component';
//import { UserRoleComponent } from './components/admin/userrole.component';
//import { NewUserRoleComponent } from './components/admin/new.userrole.component';

import { AdminComponents } from './components/admin/all.admin.component';
import { DashboardComponents } from './components/dashboard/all.dashboard.component';
import { SharedComponents } from './shared/shared.component';
import { PolymerComponents } from './shared/polymer.component';
import { ProspectiveAssociates } from './components/prospectiveassociate/all.prospective.associate.component';
import { AssociateComponents } from './components/associate/all.associate.component';
import { TalentManagementComponents } from './components/talentmanagement/all.talentmanagement.component';


@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, AppRouteModule],
    declarations: [AppComponent, LoginComponent
        //, DashboardComponent, HRMDasboardComponent, SysAdminDasboardComponent
        //,AdminComponent,NotificationEmailComponent, RoleMasterComponent,UserRoleComponent,NewUserRoleComponent
        , DataTableDirectives, PaginatePipe, PaginationControlsCmp
        , ...AdminComponents
        , ...DashboardComponents
        , ...SharedComponents
        , ...PolymerComponents
        , ...ProspectiveAssociates
        , ...AssociateComponents
        , ...TalentManagementComponents
    ],
    bootstrap: [AppComponent],
    providers: [
        DashboardService, AuthenticationService, ConfigService,
        { provide: ErrorHandler, useClass: CustomExceptionHandler },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {
            provide: Http,
            useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) => new HttpInterceptor(xhrBackend, requestOptions, router),
            deps: [XHRBackend, RequestOptions, Router]
        }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}


