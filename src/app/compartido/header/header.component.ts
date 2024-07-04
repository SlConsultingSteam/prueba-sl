
import { Component, HostListener, Inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isUnderlined: boolean = false;
  isUnderlinedModel: boolean = false;
  isUnderlinedSoluciones: boolean = false;
  isUnderlinedBlog: boolean = false;
  isUnderlinedContact: boolean = false;

  toggleUnderline() {
    this.isUnderlined = true;
    this.isUnderlinedModel = false;
    this.isUnderlinedSoluciones = false;
    this.isUnderlinedContact = false;
    this.isUnderlinedBlog = false;
  }

  toggleUnderlineModel() {
    this.isUnderlinedModel = true;
    this.isUnderlined = false;
    this.isUnderlinedSoluciones = false;
    this.isUnderlinedContact = false;
    this.isUnderlinedBlog = false;
  }

  toggleUnderlineSoluciones() {
    this.isUnderlinedSoluciones = true;
    this.isUnderlined = false;
    this.isUnderlinedModel = false;
    this.isUnderlinedContact = false;
    this.isUnderlinedBlog = false;
  }

  toggleUnderlineBlog() {
    this.isUnderlinedBlog = true;
    this.isUnderlined = false;
    this.isUnderlinedModel = false;
    this.isUnderlinedContact = false;
    this.isUnderlinedSoluciones = false;
  }
  
  toggleUnderlineContact() {
    this.isUnderlinedContact = true;
    this.isUnderlinedBlog = false;
    this.isUnderlined = false;
    this.isUnderlinedModel = false;
    this.isUnderlinedSoluciones = false;
  }

}
