import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListActivitiesComponent } from './components/list-activities/list-activities.component'
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { TriviaGameComponent } from './components/trivia-game/trivia-game.component';
import { ListTriviaComponent } from './components/list-trivia/list-trivia.component';


const routes: Routes = [ 
    { path: 'list-activities', component: ListActivitiesComponent },
    { path: 'create-question', component: CreateQuestionComponent },
    { path: 'trivia-game', component: TriviaGameComponent },
    { path: 'list-trivia', component: ListTriviaComponent },
    { path: '**', redirectTo: 'list-activities', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
