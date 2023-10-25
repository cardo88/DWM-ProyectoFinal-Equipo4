import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateActivityComponent } from './components/create-activity/create-activity.component'
import { ListActivitiesComponent } from './components/list-activities/list-activities.component'
import { CreateQuestionComponent } from './components/create-question/create-question.component';


const routes: Routes = [ 
    { path: 'list-activities', component: ListActivitiesComponent },
    { path: 'create-activity', component: CreateActivityComponent },
    { path: 'edit-activity/:id', component: CreateActivityComponent },
    { path: 'create-question', component: CreateQuestionComponent },
    { path: 'trivia-game', component: CreateQuestionComponent },
    { path: '**', redirectTo: 'list-activities', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
