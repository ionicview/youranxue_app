import { NgModule } from '@angular/core';

import { YouImgComponent } from './you-img/you-img';
import { YouChoiceComponent } from './you-choice/you-choice.component';
import { YouChoiceOptionComponent } from './you-choice-option/you-choice-option.component';
import { YouChoiceOptionlistComponent } from './you-choice-optionlist/you-choice-optionlist.component';

@NgModule({
	declarations: [
    YouChoiceComponent,
    YouChoiceOptionComponent,
    YouChoiceOptionlistComponent,
    YouImgComponent,
    ],
	imports: [],
	exports: [
    YouChoiceComponent,
    YouChoiceOptionComponent,
    YouChoiceOptionlistComponent,
    YouImgComponent,
    ]
})
export class ComponentsModule {}
