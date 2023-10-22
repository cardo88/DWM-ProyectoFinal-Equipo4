import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateActivityComponent } from './components/create-activity/create-activity.component'
import { ListActivitiesComponent } from './components/list-activities/list-activities.component'


const routes: Routes = [ 
    { path: '', component: ListActivitiesComponent },
    { path: 'create-product', component: CreateActivityComponent },
    { path: 'edit-product/:id', component: CreateActivityComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
