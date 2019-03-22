import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { WebDesigningComponent } from './events/web-designing/web-designing.component';
import { TechyonComponent } from './events/techyon/techyon.component';
import { TechTreasureHuntComponent } from './events/tech-treasure-hunt/tech-treasure-hunt.component';
import { PythonProgrammingWorkshopComponent } from './events/python-programming-workshop/python-programming-workshop.component';
import { PythonProgrammingComponent } from './events/python-programming/python-programming.component';
import { LaravelAndPhpComponent } from './events/laravel-and-php/laravel-and-php.component';
import { IgniteNinteenComponent } from './events/ignite-ninteen/ignite-ninteen.component';
import { GitComponent } from './events/git/git.component';
import { BytestruckComponent } from './events/bytestruck/bytestruck.component';
import { FsmkWinterCampNinteenComponent } from './blog/fsmk-winter-camp-ninteen/fsmk-winter-camp-ninteen.component';
import { MyExperienceOfTechyonComponent } from './blog/my-experience-of-techyon/my-experience-of-techyon.component';
import { WhatIsGitComponent } from './blog/what-is-git/what-is-git.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    EventsComponent,
    BlogComponent,
    WebDesigningComponent,
    TechyonComponent,
    TechTreasureHuntComponent,
    PythonProgrammingWorkshopComponent,
    PythonProgrammingComponent,
    LaravelAndPhpComponent,
    IgniteNinteenComponent,
    GitComponent,
    BytestruckComponent,
    FsmkWinterCampNinteenComponent,
    MyExperienceOfTechyonComponent,
    WhatIsGitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
