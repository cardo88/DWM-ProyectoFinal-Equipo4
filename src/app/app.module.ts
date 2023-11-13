//From Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Design
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule } from '@angular/router';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { AuthInterceptor } from './auth.interceptor';
import { CookieService } from 'ngx-cookie-service';

import { ListActivitiesComponent } from './components/activities/list-activities/list-activities.component';
import { CreateQuestionComponent } from './components/activities/questions/create-question/create-question.component';
import { TriviaGameComponent } from './components/activities/questions/trivia-game/trivia-game.component';
import { ListTriviaComponent } from './components/activities/questions/list-trivia/list-trivia.component';
import { UpdateQuestionComponent } from './components/activities/questions/update-question/update-question.component';
import { CreateWordComponent } from './components/activities/hangman/create-word/create-word.component';
import { WordsListComponent } from './components/activities/hangman/words-list/words-list.component';
import { UpdateWordsComponent } from './components/activities/hangman/update-words/update-words.component';
import { HangmanGameComponent } from './components/activities/hangman/hangman-game/hangman-game.component';

import { PlayerJoinComponent } from './components/player/player-join/player-join.component';
import { PlayerWaitComponent } from './components/player/player-wait/player-wait.component';
import { BemVindoComponent } from './components/bem-vindo/bem-vindo.component';
import { PlayerVoteComponent } from './components/player/player-vote/player-vote.component';
import { PlayerActivityComponent } from './components/player/player-activity/player-activity.component';
import { PlayerTimerComponent } from './components/player/player-timer/player-timer.component';
import { PlayerCommonComponent } from './components/player/player-common/player-common.component';
import { ProposalsComponent } from './components/proposals/proposals/proposals.component';
import { ProposalDetailsComponent } from './components/proposals/proposal-details/proposal-details.component';

@NgModule({
    declarations: [
        AppComponent,
        ListActivitiesComponent,
        ListTriviaComponent,
        CreateQuestionComponent,
        TriviaGameComponent,
        LoginComponent,
        SigninComponent,
        InicioComponent,
        PlayerJoinComponent,
        PlayerWaitComponent,
        BemVindoComponent,
        PlayerVoteComponent,
        PlayerActivityComponent,
        PlayerTimerComponent,
        UpdateQuestionComponent,
        CreateWordComponent,
        WordsListComponent,
        UpdateWordsComponent,
        HangmanGameComponent,
        PlayerCommonComponent,
        ProposalsComponent,
        ProposalDetailsComponent,
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
    providers: [
        CookieService,
        {
                        provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
          },
     ],
    bootstrap: [AppComponent]
})
export class AppModule { }
