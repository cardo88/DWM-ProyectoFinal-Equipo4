import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListActivitiesComponent } from './components/activities/list-activities/list-activities.component'
import { CreateQuestionComponent } from './components/activities/questions/create-question/create-question.component';
import { TriviaGameComponent } from './components/activities/questions/trivia-game/trivia-game.component';
import { ListTriviaComponent } from './components/activities/questions/list-trivia/list-trivia.component';
import { UpdateQuestionComponent } from './components/activities/questions/update-question/update-question.component';


const routes: Routes = [ 
    { path: 'list-activities', component: ListActivitiesComponent },
    { path: 'create-question', component: CreateQuestionComponent },
    { path: 'edit-question/:id', component: UpdateQuestionComponent },
    { path: 'trivia-game', component: TriviaGameComponent },
    { path: 'list-trivia', component: ListTriviaComponent },
    { path: '**', redirectTo: 'list-activities', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
