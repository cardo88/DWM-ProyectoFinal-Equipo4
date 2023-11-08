import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListActivitiesComponent } from './components/activities/list-activities/list-activities.component'
import { ListTriviaComponent } from './components/activities/questions/list-trivia/list-trivia.component';
import { CreateQuestionComponent } from './components/activities/questions/create-question/create-question.component';
import { UpdateQuestionComponent } from './components/activities/questions/update-question/update-question.component';
import { TriviaGameComponent } from './components/activities/questions/trivia-game/trivia-game.component';

import { WordsListComponent } from './components/activities/hangman/words-list/words-list.component';
import { CreateWordComponent } from './components/activities/hangman/create-word/create-word.component';
import { UpdateWordsComponent } from './components/activities/hangman/update-words/update-words.component';
import { HangmanGameComponent } from './components/activities/hangman/hangman-game/hangman-game.component';



const routes: Routes = [ 
    { path: 'list-activities', component: ListActivitiesComponent },
    { path: 'list-trivia', component: ListTriviaComponent },
    { path: 'create-question', component: CreateQuestionComponent },
    { path: 'edit-question/:id', component: UpdateQuestionComponent },
    { path: 'trivia-game', component: TriviaGameComponent },
    { path: 'words-list', component: WordsListComponent },
    { path: 'create-word', component: CreateWordComponent },
    { path: 'edit-word/:id', component: UpdateWordsComponent },
    { path: 'hangman-game', component: HangmanGameComponent },
    { path: '**', redirectTo: 'list-activities', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
