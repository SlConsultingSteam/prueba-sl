import { ModalComponent } from './../../modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    InicioComponent,
    ModalComponent

  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    ReactiveFormsModule
  ]
})
export class InicioModule { }
