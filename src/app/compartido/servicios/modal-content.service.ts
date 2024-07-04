import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalContentService {
  private modalContentSubject = new BehaviorSubject<string>(''); // Inicializa con un valor inicial vacío
  modalContent$: Observable<string> = this.modalContentSubject.asObservable();

  constructor() {}

  setContent(content: string) {
    this.modalContentSubject.next(content);
  }
}
