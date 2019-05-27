import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';

const routes : Routes = [
    {path:'', component: MoviesComponent}
]

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations:[
        MoviesComponent
    ]
})
export class MoviesPageModule {}