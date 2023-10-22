//From Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Design
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { TriviaGameComponent } from './components/trivia-game/trivia-game.component';

@NgModule({
    declarations: [
        AppComponent,
        CreateActivityComponent,
        ListActivitiesComponent,
        TriviaGameComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }
