import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { BytestruckComponent } from './events/bytestruck/bytestruck.component';
import { PythonProgrammingComponent } from './events/python-programming/python-programming.component';
import { LaravelAndPhpComponent } from './events/laravel-and-php/laravel-and-php.component';
import { IgniteNinteenComponent } from './events/ignite-ninteen/ignite-ninteen.component';
import { GitComponent } from './events/git/git.component';
import { TechyonComponent } from './events/techyon/techyon.component';
import { WebDesigningComponent } from './events/web-designing/web-designing.component';
import { TechTreasureHuntComponent } from './events/tech-treasure-hunt/tech-treasure-hunt.component';
import { PythonProgrammingWorkshopComponent } from './events/python-programming-workshop/python-programming-workshop.component';
import { MyExperienceOfTechyonComponent } from './blog/my-experience-of-techyon/my-experience-of-techyon.component';
import { FsmkWinterCampNinteenComponent } from './blog/fsmk-winter-camp-ninteen/fsmk-winter-camp-ninteen.component';
import { WhatIsGitComponent } from './blog/what-is-git/what-is-git.component';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},{
  path: 'home', component: HomeComponent
},{
  path: 'team' , component: TeamComponent
},{
  path: 'events' , component: EventsComponent
},{
  path: 'blog' , component: BlogComponent
},{
  path: 'bytestruck-2015' , component: BytestruckComponent
},{
  path: 'python-programming' , component: PythonProgrammingComponent
},{
  path: 'laravel-and-php' , component: LaravelAndPhpComponent
},{
  path: 'ignite-19' , component: IgniteNinteenComponent
},{
  path: 'git-&-github-101' , component: GitComponent
},{
  path: 'techyon' , component: TechyonComponent
},{
  path: 'web-designing' , component: WebDesigningComponent
},{
  path: 'tech-treasure-hunt' , component: TechTreasureHuntComponent
},{
  path: 'python-programming-workshop' , component: PythonProgrammingWorkshopComponent
},{
  path: 'my-experience-of-techyon' , component: MyExperienceOfTechyonComponent
},{
  path: 'fsmk-winter-camp-2k19' , component: FsmkWinterCampNinteenComponent
},{
  path: 'what-is-git' , component: WhatIsGitComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
