import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { TriviaGameComponent } from './components/trivia-game/trivia-game.component';
import { PlayerJoinComponent } from './components/player-join/player-join.component';
import { PlayerWaitComponent } from './components/player-wait/player-wait.component';
import { PlayerActivityComponent } from './components/player-activity/player-activity.component';
import { ListTriviaComponent } from './components/list-trivia/list-trivia.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';


const routes: Routes = [ 
    { path: 'player-activity', component: PlayerActivityComponent },
    { path: 'player-join', component: PlayerJoinComponent },
    { path: 'player-wait', component: PlayerWaitComponent },
    { path: 'list-activities', component: ListActivitiesComponent },
    { path: 'create-question', component: CreateQuestionComponent },
    { path: 'edit-question/:id', component: UpdateQuestionComponent },
    { path: 'trivia-game', component: TriviaGameComponent },
    { path: 'list-trivia', component: ListTriviaComponent },
    { path: '**', redirectTo: 'player-wait', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
