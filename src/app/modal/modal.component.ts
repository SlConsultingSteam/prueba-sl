import { Component, OnInit } from '@angular/core';
import { ModalContentService } from '../compartido/servicios/modal-content.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public modalContentService: ModalContentService) { }

  ngOnInit(): void {
  }

}
