import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatData } from './FormatData.pipe';

@NgModule({
    declarations: [FormatData],
    imports: [
        CommonModule,
    ],
    exports: [ FormatData]
})

export class PipesModule { }
