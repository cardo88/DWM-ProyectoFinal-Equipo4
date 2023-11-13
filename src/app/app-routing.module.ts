import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListActivitiesComponent } from './components/activities/list-activities/list-activities.component';
import { CreateQuestionComponent } from './components/activities/questions/create-question/create-question.component';
import { TriviaGameComponent } from './components/activities/questions/trivia-game/trivia-game.component';
import { PlayerJoinComponent } from './components/player/player-join/player-join.component';
import { PlayerWaitComponent } from './components/player/player-wait/player-wait.component';
import { PlayerActivityComponent } from './components/player/player-activity/player-activity.component';
import { PlayerCommonComponent } from './components/player/player-common/player-common.component';
import { ListTriviaComponent } from './components/activities/questions/list-trivia/list-trivia.component';
import { UpdateQuestionComponent } from './components/activities/questions/update-question/update-question.component';
import { ProposalDetailsComponent } from './components/proposals/proposal-details/proposal-details.component';


import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [ 
    { path: 'player-activity', component: PlayerActivityComponent },
    { path: 'player-join', component: PlayerJoinComponent },
    { path: 'player-wait', component: PlayerWaitComponent },
    { path: 'player-room/:room', component: PlayerCommonComponent},
    { path: 'list-activities', component: ListActivitiesComponent },
    { path: 'create-question', component: CreateQuestionComponent },

    { path: 'trivia-game', component: CreateQuestionComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'login', component: LoginComponent },

    { path: 'edit-question/:id', component: UpdateQuestionComponent },
    { path: 'trivia-game', component: TriviaGameComponent },
    { path: 'list-trivia', component: ListTriviaComponent },
    { path: 'proposals/:id', component: ProposalDetailsComponent },
    { path: '**', redirectTo: 'player-join', pathMatch: 'full' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
