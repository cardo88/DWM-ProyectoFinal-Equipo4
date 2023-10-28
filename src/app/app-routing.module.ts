import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { TriviaGameComponent } from './components/trivia-game/trivia-game.component';
import { PlayerJoinComponent } from './components/player-join/player-join.component';
import { PlayerWaitComponent } from './components/player-wait/player-wait.component';
import { PlayerActivityComponent } from './components/player-activity/player-activity.component';


const routes: Routes = [ 
    { path: 'player-activity', component: PlayerActivityComponent },
    { path: 'player-join', component: PlayerJoinComponent },
    { path: 'player-wait', component: PlayerWaitComponent },
    { path: 'list-activities', component: ListActivitiesComponent },
    { path: 'create-activity', component: CreateActivityComponent },
    { path: 'edit-activity/:id', component: CreateActivityComponent },
    { path: 'create-question', component: CreateQuestionComponent },
    { path: 'trivia-game', component: TriviaGameComponent },
    { path: '**', redirectTo: 'player-wait', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
