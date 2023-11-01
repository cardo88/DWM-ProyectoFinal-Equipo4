//From Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Design
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { TriviaGameComponent } from './components/trivia-game/trivia-game.component';
import { ListTriviaComponent } from './components/list-trivia/list-trivia.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';


@NgModule({
    declarations: [
        AppComponent,
        ListActivitiesComponent,
        ListTriviaComponent,
        CreateQuestionComponent,
        TriviaGameComponent,
        UpdateQuestionComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }
