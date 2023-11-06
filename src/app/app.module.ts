//From Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Design
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { TriviaGameComponent } from './components/trivia-game/trivia-game.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { AuthInterceptor } from './auth.interceptor';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
    declarations: [
        AppComponent,
        ListActivitiesComponent,
        CreateActivityComponent,
        CreateQuestionComponent,
        TriviaGameComponent,
        LoginComponent,
        SigninComponent,
        InicioComponent,
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
