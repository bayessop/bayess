import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../layout/header/header.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
	],
	declarations: [
		HeaderComponent,
	],
	exports: [
		HeaderComponent,
	]
})// @ts-ignore
export class LayoutModule {}
