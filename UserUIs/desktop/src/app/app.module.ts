import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdRadioModule, 
    MdCheckboxModule, 
    MdSelectModule, 
    MdInputModule, 
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdTabsModule,
    MaterialModule, 
    MdDatepickerModule, 
    MdNativeDateModule,
    MdDialogModule,
    MdExpansionModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { NewcaseComponent } from './newcase/newcase.component';
import { MissingComponent } from './missing/missing.component';
import { FoundComponent } from './found/found.component';
import { ReunitedComponent } from './reunited/reunited.component';

import { NavigationService } from "./services/navigation.service"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidenavComponent,
    NavbarComponent,
    ContentComponent,
    NewcaseComponent,
    MissingComponent,
    FoundComponent,
    ReunitedComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdRadioModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdSelectModule,
    MdInputModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdCardModule,
    MdTabsModule,
    MaterialModule, 
    MdDatepickerModule, 
    MdNativeDateModule,
    MdDialogModule,
    MdExpansionModule,
    RouterModule.forRoot([
        {
            path:"newcase",
            component:NewcaseComponent,
            data:{title: "New Case"}
        },
        {
            path:"missing",
            component:MissingComponent,
            data:{title: "Missing"}
        },
        {
            path:"found",
            component:FoundComponent,
            data:{title: "Found"}
        },
        {
            path:"reunited",
            component:ReunitedComponent,
            data:{title: "Reunited"}
        },
        {
            path:"login",
            component:LoginComponent,
            data:{title: "Reunited"}
        },
        {
            path:"",
            redirectTo:"/login",
            pathMatch:"full"
        }

    ])
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
