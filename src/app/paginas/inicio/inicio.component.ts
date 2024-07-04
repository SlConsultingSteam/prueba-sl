import { CarruselService } from './../../compartido/servicios/carrusel.service';

import { FormBuilder } from '@angular/forms';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import lottie from 'lottie-web';
import { ViewportScroller } from '@angular/common';
import Aos from 'aos';
import { ModalContentService } from 'src/app/compartido/servicios/modal-content.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class InicioComponent implements OnInit {

  @ViewChild('videoElement', { static: false }) videoElement?: ElementRef;
  @ViewChild('playButton', { static: false }) playButton?: ElementRef;
  
  @ViewChild('followImageArri', { static: false }) followImageArri?: ElementRef;
  @ViewChild('followImageProvo', { static: false }) followImageProvo?: ElementRef;
  @ViewChild('followImageDina', { static: false }) followImageDina?: ElementRef;
  @ViewChild('followImagePerpis', { static: false }) followImagePerpis?: ElementRef;
  @ViewChild('followImageCrea', { static: false }) followImageCrea?: ElementRef;
  
  @ViewChild('followImageCompre', { static: false }) followImageCompre?: ElementRef;
  @ViewChild('followImageDis', { static: false }) followImageDis?: ElementRef;
  @ViewChild('followImageAct', { static: false }) followImageAct?: ElementRef;
  @ViewChild('followImageLog', { static: false }) followImageLog?: ElementRef;
  @ViewChild('followImageStem', { static: false }) followImageStem?: ElementRef;

  defaultPositionX = 0;
  defaultPositionY = 0;


  isOval: boolean = false;


  onMouseMoveArri(event: MouseEvent) {
    if (this.followImageArri) {
      const imageElement = this.followImageArri.nativeElement;
      const containerElement = this.followImageArri.nativeElement.parentElement;

      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;

      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      const sensitivityX = 0.4; // Sensibilidad horizontal
      const sensitivityY = 0.4; // Sensibilidad vertical

      const offsetX = (x - containerRect.width / 2) * sensitivityX;
      const offsetY = (y - containerRect.height / 2) * sensitivityY;

      const newX = containerRect.width / 2 - imgWidth / 2 + offsetX;
      const newY = containerRect.height / 2 - imgHeight / 2 + offsetY;

      // Centrar la imagen debajo del cursor
      imageElement.style.left = Math.min(Math.max(newX, -imgWidth / 2), containerRect.width - imgWidth / 2) + 'px';
      imageElement.style.top = Math.min(Math.max(newY, -imgHeight / 2), containerRect.height - imgHeight / 2) + 'px';

      // Aumentar la altura de la imagen al pasar el mouse sobre ella
      const newHeight = 300; // Nueva altura deseada
      imageElement.style.height = newHeight + 'px';
      
      // Guarda la posición por defecto si no se ha guardado aún
      if (this.defaultPositionX === 0 && this.defaultPositionY === 0) {
        this.defaultPositionX = 0;
        this.defaultPositionY = 0;
      }
    }
  }

  onMouseMoveProvo(event: MouseEvent) {

    if (this.followImageProvo) {
      const imageElement = this.followImageProvo.nativeElement;
      const containerElement = this.followImageProvo.nativeElement.parentElement;

      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;

      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      const sensitivityX = 0.4; // Sensibilidad horizontal
      const sensitivityY = 0.4; // Sensibilidad vertical

      const offsetX = (x - containerRect.width / 2) * sensitivityX;
      const offsetY = (y - containerRect.height / 2) * sensitivityY;

      const newX = containerRect.width / 2 - imgWidth / 2 + offsetX;
      const newY = containerRect.height / 2 - imgHeight / 2 + offsetY;

      // Centrar la imagen debajo del cursor
      imageElement.style.left = Math.min(Math.max(newX, -imgWidth / 2), containerRect.width - imgWidth / 2) + 'px';
      imageElement.style.top = Math.min(Math.max(newY, -imgHeight / 2), containerRect.height - imgHeight / 2) + 'px';

      // Aumentar la altura de la imagen al pasar el mouse sobre ella
      const newHeight = 300; // Nueva altura deseada
      imageElement.style.height = newHeight + 'px';
      
      // Guarda la posición por defecto si no se ha guardado aún
      if (this.defaultPositionX === 0 && this.defaultPositionY === 0) {
        this.defaultPositionX = 0;
        this.defaultPositionY = 0;
      }
    }
  }

  onMouseMoveDina(event: MouseEvent) {

    if (this.followImageDina) {
      const imageElement = this.followImageDina.nativeElement;
      const containerElement = this.followImageDina.nativeElement.parentElement;

      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;

      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      const sensitivityX = 0.4; // Sensibilidad horizontal
      const sensitivityY = 0.4; // Sensibilidad vertical

      const offsetX = (x - containerRect.width / 2) * sensitivityX;
      const offsetY = (y - containerRect.height / 2) * sensitivityY;

      const newX = containerRect.width / 2 - imgWidth / 2 + offsetX;
      const newY = containerRect.height / 2 - imgHeight / 2 + offsetY;

      // Centrar la imagen debajo del cursor
      imageElement.style.left = Math.min(Math.max(newX, -imgWidth / 2), containerRect.width - imgWidth / 2) + 'px';
      imageElement.style.top = Math.min(Math.max(newY, -imgHeight / 2), containerRect.height - imgHeight / 2) + 'px';

      // Aumentar la altura de la imagen al pasar el mouse sobre ella
      const newHeight = 300; // Nueva altura deseada
      imageElement.style.height = newHeight + 'px';
      
      // Guarda la posición por defecto si no se ha guardado aún
      if (this.defaultPositionX === 0 && this.defaultPositionY === 0) {
        this.defaultPositionX = 0;
        this.defaultPositionY = 0;
      }
    }
  }


  onMouseMovePerpis(event: MouseEvent) {

    if (this.followImagePerpis) {
      const imageElement = this.followImagePerpis.nativeElement;
      const containerElement = this.followImagePerpis.nativeElement.parentElement;

      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;

      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      const sensitivityX = 0.4; // Sensibilidad horizontal
      const sensitivityY = 0.4; // Sensibilidad vertical

      const offsetX = (x - containerRect.width / 2) * sensitivityX;
      const offsetY = (y - containerRect.height / 2) * sensitivityY;

      const newX = containerRect.width / 2 - imgWidth / 2 + offsetX;
      const newY = containerRect.height / 2 - imgHeight / 2 + offsetY;

      // Centrar la imagen debajo del cursor
      imageElement.style.left = Math.min(Math.max(newX, -imgWidth / 2), containerRect.width - imgWidth / 2) + 'px';
      imageElement.style.top = Math.min(Math.max(newY, -imgHeight / 2), containerRect.height - imgHeight / 2) + 'px';

      // Aumentar la altura de la imagen al pasar el mouse sobre ella
      const newHeight = 300; // Nueva altura deseada
      imageElement.style.height = newHeight + 'px';
      
      // Guarda la posición por defecto si no se ha guardado aún
      if (this.defaultPositionX === 0 && this.defaultPositionY === 0) {
        this.defaultPositionX = 0;
        this.defaultPositionY = 0;
      }
    }
  }

  onMouseMoveCrea(event: MouseEvent) {

    if (this.followImageCrea) {
      const imageElement = this.followImageCrea.nativeElement;
      const containerElement = this.followImageCrea.nativeElement.parentElement;

      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;

      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      const sensitivityX = 0.4; // Sensibilidad horizontal
      const sensitivityY = 0.4; // Sensibilidad vertical

      const offsetX = (x - containerRect.width / 2) * sensitivityX;
      const offsetY = (y - containerRect.height / 2) * sensitivityY;

      const newX = containerRect.width / 2 - imgWidth / 2 + offsetX;
      const newY = containerRect.height / 2 - imgHeight / 2 + offsetY;

      // Centrar la imagen debajo del cursor
      imageElement.style.left = Math.min(Math.max(newX, -imgWidth / 2), containerRect.width - imgWidth / 2) + 'px';
      imageElement.style.top = Math.min(Math.max(newY, -imgHeight / 2), containerRect.height - imgHeight / 2) + 'px';

      // Aumentar la altura de la imagen al pasar el mouse sobre ella
      const newHeight = 300; // Nueva altura deseada
      imageElement.style.height = newHeight + 'px';
      
      // Guarda la posición por defecto si no se ha guardado aún
      if (this.defaultPositionX === 0 && this.defaultPositionY === 0) {
        this.defaultPositionX = 0;
        this.defaultPositionY = 0;
      }
    }
  }

  onMouseMoveCompre(event: MouseEvent) {
    if (this.followImageCompre) {
      const imageElement = this.followImageCompre.nativeElement;
      const containerElement = this.followImageCompre.nativeElement.parentElement;

      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;

      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      const sensitivityX = 0.4; // Sensibilidad horizontal
      const sensitivityY = 0.4; // Sensibilidad vertical

      const offsetX = (x - containerRect.width / 2) * sensitivityX;
      const offsetY = (y - containerRect.height / 2) * sensitivityY;

      const newX = containerRect.width / 2 - imgWidth / 2 + offsetX;
      const newY = containerRect.height / 2 - imgHeight / 2 + offsetY;

      // Centrar la imagen debajo del cursor
      imageElement.style.left = Math.min(Math.max(newX, -imgWidth / 2), containerRect.width - imgWidth / 2) + 'px';
      imageElement.style.top = Math.min(Math.max(newY, -imgHeight / 2), containerRect.height - imgHeight / 2) + 'px';

      // Aumentar la altura de la imagen al pasar el mouse sobre ella
      const newHeight = 300; // Nueva altura deseada
      imageElement.style.height = newHeight + 'px';
      
      // Guarda la posición por defecto si no se ha guardado aún
      if (this.defaultPositionX === 0 && this.defaultPositionY === 0) {
        this.defaultPositionX = 0;
        this.defaultPositionY = 0;
      }
    }
  }

  onMouseMoveDis(event: MouseEvent) {
    if (this.followImageDis) {
      const imageElement = this.followImageDis.nativeElement;
      const containerElement = this.followImageDis.nativeElement.parentElement;

      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;

      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      const sensitivityX = 0.4; // Sensibilidad horizontal
      const sensitivityY = 0.4; // Sensibilidad vertical

      const offsetX = (x - containerRect.width / 2) * sensitivityX;
      const offsetY = (y - containerRect.height / 2) * sensitivityY;

      const newX = containerRect.width / 2 - imgWidth / 2 + offsetX;
      const newY = containerRect.height / 2 - imgHeight / 2 + offsetY;

      // Centrar la imagen debajo del cursor
      imageElement.style.left = Math.min(Math.max(newX, -imgWidth / 2), containerRect.width - imgWidth / 2) + 'px';
      imageElement.style.top = Math.min(Math.max(newY, -imgHeight / 2), containerRect.height - imgHeight / 2) + 'px';

      // Aumentar la altura de la imagen al pasar el mouse sobre ella
      const newHeight = 135; // Nueva altura deseada
      const newWidth = 125;
      
      imageElement.style.height = newHeight + '%';
      imageElement.style.width = newWidth + '%';

      // Guarda la posición por defecto si no se ha guardado aún
      if (this.defaultPositionX === 0 && this.defaultPositionY === 0) {
        this.defaultPositionX = 0;
        this.defaultPositionY = 0;
      }
    }
  }

  onMouseMoveAct(event: MouseEvent) {
    if (this.followImageAct) {
      const imageElement = this.followImageAct.nativeElement;
      const containerElement = this.followImageAct.nativeElement.parentElement;

      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;

      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      const sensitivityX = 0.4; // Sensibilidad horizontal
      const sensitivityY = 0.4; // Sensibilidad vertical

      const offsetX = (x - containerRect.width / 2) * sensitivityX;
      const offsetY = (y - containerRect.height / 2) * sensitivityY;

      const newX = containerRect.width / 2 - imgWidth / 2 + offsetX;
      const newY = containerRect.height / 2 - imgHeight / 2 + offsetY;

      // Centrar la imagen debajo del cursor
      imageElement.style.left = Math.min(Math.max(newX, -imgWidth / 2), containerRect.width - imgWidth / 2) + 'px';
      imageElement.style.top = Math.min(Math.max(newY, -imgHeight / 2), containerRect.height - imgHeight / 2) + 'px';

      // Aumentar la altura de la imagen al pasar el mouse sobre ella
      const newHeight = 150; // Nueva altura deseada
      const newWidth = 155;

      imageElement.style.height = newHeight + '%';
      imageElement.style.width = newWidth + '%';
      
      // Guarda la posición por defecto si no se ha guardado aún
      if (this.defaultPositionX === 0 && this.defaultPositionY === 0) {
        this.defaultPositionX = 0;
        this.defaultPositionY = 0;
      }
    }
  }

  onMouseMoveLog(event: MouseEvent) {
    if (this.followImageLog) {
      const imageElement = this.followImageLog.nativeElement;
      const containerElement = this.followImageLog.nativeElement.parentElement;

      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;

      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      const sensitivityX = 0.4; // Sensibilidad horizontal
      const sensitivityY = 0.4; // Sensibilidad vertical

      const offsetX = (x - containerRect.width / 2) * sensitivityX;
      const offsetY = (y - containerRect.height / 2) * sensitivityY;

      const newX = containerRect.width / 2 - imgWidth / 2 + offsetX;
      const newY = containerRect.height / 2 - imgHeight / 2 + offsetY;

      // Centrar la imagen debajo del cursor
      imageElement.style.left = Math.min(Math.max(newX, -imgWidth / 2), containerRect.width - imgWidth / 2) + 'px';
      imageElement.style.top = Math.min(Math.max(newY, -imgHeight / 2), containerRect.height - imgHeight / 2) + 'px';

      // Aumentar la altura de la imagen al pasar el mouse sobre ella
      const newHeight = 145; // Nueva altura deseada
      const newWidth = 135; 

      imageElement.style.height = newHeight + '%';
      imageElement.style.width = newWidth + '%';

      // Guarda la posición por defecto si no se ha guardado aún
      if (this.defaultPositionX === 0 && this.defaultPositionY === 0) {
        this.defaultPositionX = 0;
        this.defaultPositionY = 0;
      }
    }
  }

  onMouseMoveStem(event: MouseEvent) {
    if (this.followImageStem) {
      const imageElement = this.followImageStem.nativeElement;
      const containerElement = this.followImageStem.nativeElement.parentElement;

      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;

      const x = event.clientX - containerRect.left;
      const y = event.clientY - containerRect.top;

      const sensitivityX = 0.4; // Sensibilidad horizontal
      const sensitivityY = 0.4; // Sensibilidad vertical

      const offsetX = (x - containerRect.width / 2) * sensitivityX;
      const offsetY = (y - containerRect.height / 2) * sensitivityY;

      const newX = containerRect.width / 2 - imgWidth / 2 + offsetX;
      const newY = containerRect.height / 2 - imgHeight / 2 + offsetY;

      // Centrar la imagen debajo del cursor
      imageElement.style.left = Math.min(Math.max(newX, -imgWidth / 2), containerRect.width - imgWidth / 2) + 'px';
      imageElement.style.top = Math.min(Math.max(newY, -imgHeight / 2), containerRect.height - imgHeight / 2) + 'px';

      // Aumentar la altura de la imagen al pasar el mouse sobre ella
      const newHeight = 147; // Nueva altura deseada
      const newWidth = 145; 

      imageElement.style.height = newHeight + '%';
      imageElement.style.width = newWidth + '%';

      // Guarda la posición por defecto si no se ha guardado aún
      if (this.defaultPositionX === 0 && this.defaultPositionY === 0) {
        this.defaultPositionX = 0;
        this.defaultPositionY = 0;
      }
    }
  }

  resetImagePositionStem() {
    if (this.followImageStem) {
      const imageElement = this.followImageStem.nativeElement;
      // Reinicia la posición de la imagen a la posición por defecto
      imageElement.style.left = "-25px"
      imageElement.style.height = "115%"
      imageElement.style.width = "115%"
      imageElement.style.top = "0"
      imageElement.style.bottom = "25px"
    }
  }

  resetImagePositionLog() {
    if (this.followImageLog) {
      const imageElement = this.followImageLog.nativeElement;
      // Reinicia la posición de la imagen a la posición por defecto
      imageElement.style.left = "-37px"
      imageElement.style.height = "115%"
      imageElement.style.width = "115%"
      imageElement.style.top = "0"
      imageElement.style.bottom = "1.5px"
    }
  }
  
  resetImagePositionAct() {
    if (this.followImageAct) {
      const imageElement = this.followImageAct.nativeElement;
      // Reinicia la posición de la imagen a la posición por defecto
      imageElement.style.left = "-4px"
      imageElement.style.height = "140%"
      imageElement.style.width = "135%"
      imageElement.style.top = "0"
      imageElement.style.bottom = "-2px"
    }
  }

  resetImagePositionDis() {
    if (this.followImageDis) {
      const imageElement = this.followImageDis.nativeElement;
      // Reinicia la posición de la imagen a la posición por defecto
      imageElement.style.left = "-30px"
      imageElement.style.height = "105%"
      imageElement.style.width = "105%"
      imageElement.style.top = "0"
      imageElement.style.bottom = "-3px"
    }
  }

  resetImagePositionCompre() {
    if (this.followImageCompre) {
      const imageElement = this.followImageCompre.nativeElement;
      // Reinicia la posición de la imagen a la posición por defecto
      imageElement.style.left = "-20px"
      imageElement.style.height = "105%"
      imageElement.style.width = "105%"
      imageElement.style.top = "0"
      imageElement.style.bottom = "-9px"
    }
  }

  resetImagePositionArri() {
    if (this.followImageArri) {
      const imageElement = this.followImageArri.nativeElement;
      const containerElement = this.followImageArri.nativeElement.parentElement;

      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;

      // Reinicia la posición de la imagen a la posición por defecto
      imageElement.style.left = (containerRect.width / 2 - imgWidth / 2) + 'px';
      imageElement.style.top = (containerRect.height / 2 - imgHeight / 2) + 'px';
    }
  }


  resetImagePositionProvo() {
    if (this.followImageProvo) {
      const imageElement = this.followImageProvo.nativeElement;
      const containerElement = this.followImageProvo.nativeElement.parentElement;
  
      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;
  
      // Reinicia la posición de la imagen a la posición por defecto
      imageElement.style.left = (containerRect.width / 2 - imgWidth / 2) + 'px';
      imageElement.style.top = (containerRect.height / 2 - imgHeight / 2) + 'px';
    }
  }

  resetImagePositionDina() {
    if (this.followImageDina) {
      const imageElement = this.followImageDina.nativeElement;
      const containerElement = this.followImageDina.nativeElement.parentElement;
  
      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;
  
      // Reinicia la posición de la imagen a la posición por defecto
      imageElement.style.left = (containerRect.width / 2 - imgWidth / 2) + 'px';
      imageElement.style.top = (containerRect.height / 2 - imgHeight / 2) + 'px';
    }
  }

  resetImagePositionPerpis() {
    if (this.followImagePerpis) {
      const imageElement = this.followImagePerpis.nativeElement;
      const containerElement = this.followImagePerpis.nativeElement.parentElement;
  
      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;
  
      // Reinicia la posición de la imagen a la posición por defecto
      imageElement.style.left = (containerRect.width / 2 - imgWidth / 2) + 'px';
      imageElement.style.top = (containerRect.height / 2 - imgHeight / 2) + 'px';
    }
  }

  resetImagePositionCrea() {
    if (this.followImageCrea) {
      const imageElement = this.followImageCrea.nativeElement;
      const containerElement = this.followImageCrea.nativeElement.parentElement;
  
      const containerRect = containerElement.getBoundingClientRect();
      const imgWidth = imageElement.width;
      const imgHeight = imageElement.height;
  
      // Reinicia la posición de la imagen a la posición por defecto
      imageElement.style.left = (containerRect.width / 2 - imgWidth / 2) + 'px';
      imageElement.style.top = (containerRect.height / 2 - imgHeight / 2) + 'px';
    }
  }


  botonEmpresasBlanco: boolean = true;
  botonEmpresasRojo: boolean = false;
  botonEmprendimientosBlanco: boolean = true;
  botonEmprendimientosRojo: boolean = false;
  infoEmprendimientos: boolean = false;
  infoEmpresas: boolean = false;
  espacioRojo: boolean = true;

  instagram: boolean = true;
  instagramColor: boolean = false;

  whatsapp: boolean = true;
  whatsappColor: boolean = false;

  arquetipos: boolean = true;
  arquetiposColor: boolean = false;

  email: boolean = true;
  emailColor: boolean = false;

  facebook: boolean = true;
  facebookColor: boolean = false;

  link: boolean = true;
  linkColor: boolean = false;

  cartaPantalla: boolean = true;
  cartaTuerca: boolean = true;
  cartaCabeza: boolean = true;


  marginTopDiv: string = '30px';

  @ViewChild('colombia') colombia!: ElementRef;

  @ViewChild('flechasAnal') flechasAnal!: ElementRef;

  @ViewChild('manoTuerca') manoTuerca!: ElementRef;

  @ViewChild('tituloPuente') tituloPuente!: ElementRef;

  @ViewChild('textoPuente') textoPuente!: ElementRef;


  @ViewChild('ojoAnal') ojoAnal!: ElementRef;

  @ViewChild('banner') banner!: ElementRef;


  @ViewChild('perpis') perpis!: ElementRef;
  @ViewChild('dina') dina!: ElementRef;
  @ViewChild('crea') crea!: ElementRef;
  @ViewChild('arriesga') arriesga!: ElementRef;
  @ViewChild('provo') provo!: ElementRef;

  @ViewChild('perpisM') perpisM!: ElementRef;
  @ViewChild('dinaM') dinaM!: ElementRef;
  @ViewChild('creaM') creaM!: ElementRef;
  @ViewChild('arriesgaM') arriesgaM!: ElementRef;
  @ViewChild('provoM') provoM!: ElementRef;

  botonPerpis: boolean = true;
  botonDina: boolean = true;
  botonCrea: boolean = true;
  botonArriesga: boolean = true;
  botonProvo: boolean = true;

  flechaCerrada: String = "assets/imagenes/imaFichas/flechaArriba.svg"

  flechas: string[] = ['assets/imagenes/imaFichas/flechaArriba.svg', 'assets/imagenes/imaFichas/flechaAbajo.svg'];

  indiceFlecha: number = 0;

  flechaCerradaDina: String = "assets/imagenes/imaFichas/flechaArriba.svg"

  flechasDina: string[] = ['assets/imagenes/imaFichas/flechaArriba.svg', 'assets/imagenes/imaFichas/flechaAbajo.svg'];

  indiceFlechaDina: number = 0;

  flechaCerradaCrea: String = "assets/imagenes/imaFichas/flechaArriba.svg"

  flechasCrea: string[] = ['assets/imagenes/imaFichas/flechaArriba.svg', 'assets/imagenes/imaFichas/flechaAbajo.svg'];

  indiceFlechaCrea: number = 0;

  flechaCerradaArriesga: String = "assets/imagenes/imaFichas/flechaArriba.svg"

  flechasArriesga: string[] = ['assets/imagenes/imaFichas/flechaArriba.svg', 'assets/imagenes/imaFichas/flechaAbajo.svg'];

  indiceFlechaArriesga: number = 0;

  flechaCerradaProvo: String = "assets/imagenes/imaFichas/flechaArriba.svg"

  flechasProvo: string[] = ['assets/imagenes/imaFichas/flechaArriba.svg', 'assets/imagenes/imaFichas/flechaAbajo.svg'];

  indiceFlechaProvo: number = 0;

  // animationContainerComillas: HTMLElement | null = null;

  constructor(private viewportScroller: ViewportScroller, private modalContentService: ModalContentService, private sanitizer: DomSanitizer, private carruselSVC: CarruselService, private router: Router, private formBuilder: FormBuilder){

  }

  displayPerpis(){
    this.indiceFlecha = (this.indiceFlecha + 1) % this.flechas.length;
    this.flechaCerrada = this.flechas[this.indiceFlecha];

    if (this.perpis) {

      if(this.botonPerpis){
        this.perpis.nativeElement.style.display = 'block';
        this.botonPerpis = false;
      } else {
        this.perpis.nativeElement.style.display = 'none';
        this.botonPerpis = true;
      }

    }
  }

  displayDina(){

    this.indiceFlechaDina = (this.indiceFlechaDina + 1) % this.flechasDina.length;
    console.log(this.flechasDina.length);
    
    this.flechaCerradaDina = this.flechasDina[this.indiceFlechaDina];

    if (this.dina) {

      if(this.botonDina){
        this.dina.nativeElement.style.display = 'block';
        this.botonDina = false;
      } else {
        this.dina.nativeElement.style.display = 'none';
        this.botonDina = true;
      }

    }
  }

  displayCrea(){

    this.indiceFlechaCrea = (this.indiceFlechaCrea + 1) % this.flechasCrea.length;
    this.flechaCerradaCrea = this.flechasCrea[this.indiceFlechaCrea];

    if (this.crea) {

      if(this.botonCrea){
        this.crea.nativeElement.style.display = 'block';
        this.botonCrea = false;
      } else {
        this.crea.nativeElement.style.display = 'none';
        this.botonCrea = true;
      }


    }
  }

  displayArriesga(){
    this.indiceFlechaArriesga = (this.indiceFlechaArriesga + 1) % this.flechasArriesga.length;
    this.flechaCerradaArriesga = this.flechasArriesga[this.indiceFlechaArriesga];
    if (this.arriesga) {

      if(this.botonArriesga){
        this.arriesga.nativeElement.style.display = 'block';
        this.botonArriesga = false;
      } else {
        this.arriesga.nativeElement.style.display = 'none';
        this.botonArriesga = true;
      }


    }
  }

  displayProvo(){
    this.indiceFlechaProvo = (this.indiceFlechaProvo + 1) % this.flechasProvo.length;
    this.flechaCerradaProvo = this.flechasProvo[this.indiceFlechaProvo];
    if (this.provo) {

      if(this.botonProvo){
        this.provo.nativeElement.style.display = 'block';
        this.botonProvo = false;
      } else {
        this.provo.nativeElement.style.display = 'none';
        this.botonProvo = true;
      }


    }
  }

  // Para otros tamaños de pantalla 
  displayPerpisM(){
    this.indiceFlecha = (this.indiceFlecha + 1) % this.flechas.length;
    this.flechaCerrada = this.flechas[this.indiceFlecha];

    if (this.perpisM) {

      if(this.botonPerpis){
        this.perpisM.nativeElement.style.display = 'block';
        this.botonPerpis = false;
      } else {
        this.perpisM.nativeElement.style.display = 'none';
        this.botonPerpis = true;
      }

    }
  }

  displayDinaM(){

    this.indiceFlechaDina = (this.indiceFlechaDina + 1) % this.flechasDina.length;
    console.log(this.flechasDina.length);
    
    this.flechaCerradaDina = this.flechasDina[this.indiceFlechaDina];

    if (this.dinaM) {

      if(this.botonDina){
        this.dinaM.nativeElement.style.display = 'block';
        this.botonDina = false;
      } else {
        this.dinaM.nativeElement.style.display = 'none';
        this.botonDina = true;
      }

    }
  }

  displayCreaM(){

    this.indiceFlechaCrea = (this.indiceFlechaCrea + 1) % this.flechasCrea.length;
    this.flechaCerradaCrea = this.flechasCrea[this.indiceFlechaCrea];

    if (this.creaM) {

      if(this.botonCrea){
        this.creaM.nativeElement.style.display = 'block';
        this.botonCrea = false;
      } else {
        this.creaM.nativeElement.style.display = 'none';
        this.botonCrea = true;
      }

    }
  }

  displayArriesgaM(){
    this.indiceFlechaArriesga = (this.indiceFlechaArriesga + 1) % this.flechasArriesga.length;
    this.flechaCerradaArriesga = this.flechasArriesga[this.indiceFlechaArriesga];
    if (this.arriesgaM) {

      if(this.botonArriesga){
        this.arriesgaM.nativeElement.style.display = 'block';
        this.botonArriesga = false;
      } else {
        this.arriesgaM.nativeElement.style.display = 'none';
        this.botonArriesga = true;
      }

    }
  }

  displayProvoM(){
    this.indiceFlechaProvo = (this.indiceFlechaProvo + 1) % this.flechasProvo.length;
    this.flechaCerradaProvo = this.flechasProvo[this.indiceFlechaProvo];
    if (this.provoM) {

      if(this.botonProvo){
        this.provoM.nativeElement.style.display = 'block';
        this.botonProvo = false;
      } else {
        this.provoM.nativeElement.style.display = 'none';
        this.botonProvo = true;
      }

    }
  }

  abrirModal1() {
    const contenido = `
      <h1 class="title">NOMBRE DEL ÁREA</h1>
    
      <div class="lineaAzul"></div>

      <div class="containerCir">
        <div class="containerCard">

          <div class="containerImg">
              <img class="bolaPop" src="assets/imagenes/circuloPopUp.svg" alt="Nueva Imagen">
          </div>

        </div>

        <div class="containerDir">
          <div class="containerImgDir">
              <img class="director" src="assets/imagenes/fotos/DAVID_ZULETA.png" alt="Nueva Imagen">
          </div>

          <div class="infoDesc">
            <h2>Título</h2>
            <hr>
            <p>Descripción/historia</p>
          </div>
          
        </div>
      </div>

      <div class="containerInf">
        <h2>David Zuleta</h2>
        <p>Director Discovery</p>
        
        <div class="containerEmail">
            <div class="containerEmailDa">
              <img class="email" src="assets/imagenes/fotos/mailLog.svg" alt="Nueva Imagen">
            </div>
              <p>d.zuleta@slig.co</p>
        </div>

        <div class="containerEmail">
            <div class="containerEmailDa">
              <img class="email" src="assets/imagenes/fotos/mailLog.svg" alt="Nueva Imagen">
            </div>
              <p>320 2680777</p>
        </div>
      </div>
        <br>
      <div class="cardsPopUp">
        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/ISA.png" alt="Cards">

            <div class="cardPop">
              <h2>Isabel Isaza</h2>
              <p>Coordinador Cualitativo</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/MARIAPAU.png" alt="Cards">

            <div class="cardPop">
              <h2>María Paula Ávila</h2>
              <p>Analista Junior</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/CAMILO.png" alt="Cards">

            <div class="cardPop">
              <h2>Camilo Cano</h2>
              <p>Anlista Junior</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/MARI.png" alt="Cards">

            <div class="cardPop">
              <h2>María Paula López</h2>
              <p>Analista Junior</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/OSCAR.png" alt="Cards">

            <div class="cardPop">
              <h2>Oscar Garzón</h2>
              <p>Coordinador STEM</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/JOHAN.png" alt="Cards">

            <div class="cardPop">
              <h2>Johan Peñaloza</h2>
              <p>Coordinador de <br> análisis de Datos</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/DANIEL_ARIAS.png" alt="Cards">

            <div class="cardPop">
              <h2>Daniel Arias</h2>
              <p>Analista Cualitativo</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/ANDRES.png" alt="Cards">

            <div class="cardPop">
              <h2>Andrés Castiblanco</h2>
              <p>Desarrollador STEM</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/JACKSON.png" alt="Cards">

            <div class="cardPop">
              <h2>Jackson Londoño</h2>
              <p>Practicante Desarrollador</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/DAVID_2.png" alt="Cards">

            <div class="cardPop">
              <h2>David Pabón</h2>
              <p>Analista Lingüista</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/JUAN_DAVID.png" alt="Cards">

            <div class="cardPop">
              <h2>Juan Hernández</h2>
              <p>Analista STEM</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/OLGA_ULLOA.png" alt="Cards">

            <div class="cardPop">
              <h2>Olga Ulloa</h2>
              <p>Administrador de <br> Bases Junior</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/NATALIA.png" alt="Cards">

            <div class="cardPop">
              <h2>Natalia Parra</h2>
              <p>Administrador de <br> Bases Junior</p>
            </div>
        </div>

      </div>
    `;
    this.modalContentService.setContent(contenido); // Ajusta la llamada a setContent según la nueva implementación
  }

  abrirModal2() {
    const contenido = `
      <h1 class="title">NOMBRE DEL ÁREA</h1>
    
      <div class="lineaAzul"></div>

      <div class="containerCir">
        <div class="containerCard">

          <div class="containerImg">
              <img class="bolaPop" src="assets/imagenes/circuloPopUp.svg" alt="Nueva Imagen">
          </div>

        </div>

        <div class="containerDir">
          <div class="containerImgDir">
              <img class="director" src="assets/imagenes/fotos/TRUDY.png" alt="Nueva Imagen">
          </div>

          <div class="infoDesc">
            <h2>Título</h2>
            <hr>
            <p>Descripción/historia</p>
          </div>
          
        </div>
      </div>

      <div class="containerInf">
        <h2>Truddy Harker</h2>
        <p>Strategic Support</p>
        
        <div class="containerEmail">
            <div class="containerEmailDa">
              <img class="email" src="assets/imagenes/fotos/mailLog.svg" alt="Nueva Imagen">
            </div>
              <p>t.harker@slig.co</p>
        </div>

        <div class="containerEmail">
            <div class="containerEmailDa">
              <img class="email" src="assets/imagenes/fotos/mailLog.svg" alt="Nueva Imagen">
            </div>
              <p>320 1000001</p>
        </div>
      </div>
        <br>
      <div class="cardsPopUp">

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/JUANSEBASTIAN.png" alt="Cards">

            <div class="cardPop">
              <h2>Juan Sebastián Muñoz</h2>
              <p>Community Manager</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/DANIELARAMIREZ.png" alt="Cards">

            <div class="cardPop">
              <h2>Daniela Ramírez</h2>
              <p>Diseñadora Gráfica</p>
            </div>
        </div>

        <div class="cardPop tres">
            <img class="imgCard" src="assets/imagenes/fotos/MAFE2.png" alt="Cards">

            <div class="cardPop">
              <h2>María Fernanda Velásquez</h2>
              <p>Comunnity Manager</p>
            </div>
        </div>
      </div>
    `;
    this.modalContentService.setContent(contenido); // Ajusta la llamada a setContent según la nueva implementación
  }

  abrirModal3() {
    const contenido = `
      <h1 class="title">NOMBRE DEL ÁREA</h1>
    
      <div class="lineaAzul"></div>

      <div class="containerCir">
        <div class="containerCard">

          <div class="containerImg">
              <img class="bolaPop" src="assets/imagenes/circuloPopUp.svg" alt="Nueva Imagen">
          </div>

        </div>

        <div class="containerDir">
          <div class="containerImgDir">
              <img class="director" src="assets/imagenes/fotos/PAO.png" alt="Nueva Imagen">
          </div>

          <div class="infoDesc">
            <h2>Título</h2>
            <hr>
            <p>Descripción/historia</p>
          </div>
          
        </div>
      </div>

      <div class="containerInf">
        <h2>Paola Blanco</h2>
        <p>Strategic Support</p>
        
        <div class="containerEmail">
            <div class="containerEmailDa">
              <img class="email" src="assets/imagenes/fotos/mailLog.svg" alt="Nueva Imagen">
            </div>
              <p>r@slig.co</p>
        </div>

        <div class="containerEmail">
            <div class="containerEmailDa">
              <img class="email" src="assets/imagenes/fotos/mailLog.svg" alt="Nueva Imagen">
            </div>
              <p>320 1000001</p>
        </div>
      </div>
        <br>
      <div class="cardsPopUp">

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/JULI.png" alt="Cards">

            <div class="cardPop">
              <h2>Juliana Montaña</h2>
              <p>Analista Senior</p>
            </div>
        </div>

        <div class="cardPop tres">
            <img class="imgCard" src="assets/imagenes/fotos/MAFE.png" alt="Cards">

            <div class="cardPop">
              <h2>María Fernanda Gutiérrez</h2>
              <p>Project Manager</p>
            </div>
        </div>
      </div>
    `;
    this.modalContentService.setContent(contenido); // Ajusta la llamada a setContent según la nueva implementación
  }

  abrirModal4() {
    const contenido = `
      <h1 class="title">NOMBRE DEL ÁREA</h1>
    
      <div class="lineaAzul"></div>

      <div class="containerCir">
        <div class="containerCard">

          <div class="containerImg">
              <img class="bolaPop" src="assets/imagenes/circuloPopUp.svg" alt="Nueva Imagen">
          </div>

        </div>

        <div class="containerDir">
          <div class="containerImgDir">
              <img class="director" src="assets/imagenes/fotos/DIANA.png" alt="Nueva Imagen">
          </div>

          <div class="infoDesc">
            <h2>Título</h2>
            <hr>
            <p>Descripción/historia</p>
          </div>
          
        </div>
      </div>

      <div class="containerInf">
        <h2>Diana Saavedra</h2>
        <p>Directora de Procesos y Operaciones</p>
        
        <div class="containerEmail">
            <div class="containerEmailDa">
              <img class="email" src="assets/imagenes/fotos/mailLog.svg" alt="Nueva Imagen">
            </div>
              <p>proyectos@slig.co</p>
        </div>

        <div class="containerEmail">
            <div class="containerEmailDa">
              <img class="email" src="assets/imagenes/fotos/mailLog.svg" alt="Nueva Imagen">
            </div>
              <p>320 1000001</p>
        </div>
      </div>
        <br>
      <div class="cardsPopUp">

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/LU.png" alt="Cards">

            <div class="cardPop">
              <h2>Luisa Ochoa</h2>
              <p>Gestor De Gestión Humana y Calidad</p>
            </div>
        </div>

        <div class="cardPop tres">
            <img class="imgCard" src="assets/imagenes/fotos/IVONNE.png" alt="Cards">

            <div class="cardPop">
              <h2>Ivonne Montenegro</h2>
              <p>Soporte Administrativo</p>
            </div>
        </div>

        <div class="cardPop tres">
            <img class="imgCard" src="assets/imagenes/fotos/RICHIE.png" alt="Cards">

            <div class="cardPop">
              <h2>Ricardo Uribe</h2>
              <p>Analista de Sistemas</p>
            </div>
        </div>

        <div class="cardPop tres">
            <img class="imgCard" src="assets/imagenes/fotos/JONATHAN.png" alt="Cards">

            <div class="cardPop">
              <h2>Jonatan Martínez</h2>
              <p>Analista Contable</p>
            </div>
        </div>


        <div class="cardPop tres">
            <img class="imgCard" src="assets/imagenes/fotos/SANTI.png" alt="Cards">

            <div class="cardPop">
              <h2>Santiago Vargas</h2>
              <p>Gestor Financiero</p>
            </div>
        </div>

        <div class="cardPop tres">
            <img class="imgCard" src="assets/imagenes/fotos/MARIANA.png" alt="Cards">

            <div class="cardPop">
              <h2>Mariana Salcedo</h2>
              <p>Asistente Administrativo</p>
            </div>
        </div>

      </div>
    `;
    this.modalContentService.setContent(contenido); // Ajusta la llamada a setContent según la nueva implementación
  }

  abrirModal5() {
    const contenido = `
      <h1 class="title">NOMBRE DEL ÁREA</h1>
    
      <div class="lineaAzul"></div>

      <div class="containerCir">
        <div class="containerCard">

          <div class="containerImg">
              <img class="bolaPop" src="assets/imagenes/circuloPopUp.svg" alt="Nueva Imagen">
          </div>

        </div>

        <div class="containerDir">
          <div class="containerImgDir">
              <img class="director" src="assets/imagenes/fotos/DAVID_ZULETA.png" alt="Nueva Imagen">
          </div>

          <div class="infoDesc">
            <h2>Título</h2>
            <hr>
            <p>Descripción/historia</p>
          </div>
          
        </div>
      </div>

      <div class="containerInf">
        <h2>Diana Saavedra</h2>
        <p>Director Discovery</p>
        
        <div class="containerEmail">
            <div class="containerEmailDa">
              <img class="email" src="assets/imagenes/fotos/mailLog.svg" alt="Nueva Imagen">
            </div>
              <p>d.zuleta@slig.co</p>
        </div>

        <div class="containerEmail">
            <div class="containerEmailDa">
              <img class="email" src="assets/imagenes/fotos/mailLog.svg" alt="Nueva Imagen">
            </div>
              <p>320 2680777</p>
        </div>
      </div>
        <br>
      <div class="cardsPopUp">
        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/ISA.png" alt="Cards">

            <div class="cardPop">
              <h2>Isabel Isaza</h2>
              <p>Coordinador Cualitativo</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/MARIAPAU.png" alt="Cards">

            <div class="cardPop">
              <h2>María Paula Ávila</h2>
              <p>Analista Junior</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/CAMILO.png" alt="Cards">

            <div class="cardPop">
              <h2>Camilo Cano</h2>
              <p>Anlista Junior</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/MARI.png" alt="Cards">

            <div class="cardPop">
              <h2>María Paula López</h2>
              <p>Analista Junior</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/OSCAR.png" alt="Cards">

            <div class="cardPop">
              <h2>Oscar Garzón</h2>
              <p>Coordinador STEM</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/JOHAN.png" alt="Cards">

            <div class="cardPop">
              <h2>Johan Peñaloza</h2>
              <p>Coordinador de <br> análisis de Datos</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/DANIEL_ARIAS.png" alt="Cards">

            <div class="cardPop">
              <h2>Daniel Arias</h2>
              <p>Analista Cualitativo</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/ANDRES.png" alt="Cards">

            <div class="cardPop">
              <h2>Andrés Castiblanco</h2>
              <p>Desarrollador STEM</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/JACKSON.png" alt="Cards">

            <div class="cardPop">
              <h2>Jackson Londoño</h2>
              <p>Practicante Desarrollador</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/DAVID_2.png" alt="Cards">

            <div class="cardPop">
              <h2>David Pabón</h2>
              <p>Analista Lingüista</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/JUAN_DAVID.png" alt="Cards">

            <div class="cardPop">
              <h2>Juan Hernández</h2>
              <p>Analista STEM</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/OLGA_ULLOA.png" alt="Cards">

            <div class="cardPop">
              <h2>Olga Ulloa</h2>
              <p>Administrador de <br> Bases Junior</p>
            </div>
        </div>

        <div class="cardPop">
            <img class="imgCard" src="assets/imagenes/fotos/NATALIA.png" alt="Cards">

            <div class="cardPop">
              <h2>Natalia Parra</h2>
              <p>Administrador de <br> Bases Junior</p>
            </div>
        </div>

      </div>
    `;
    this.modalContentService.setContent(contenido); // Ajusta la llamada a setContent según la nueva implementación
  }
  


  cambiarW(){
    this.whatsapp = false;
    this.whatsappColor = true;
  }

  cambiarWBlanco(){
    this.whatsapp = true;
    this.whatsappColor = false;
  }

  cambiarF(){
    this.facebook = false;
    this.facebookColor = true;
  }

  cambiarFBlanco(){
    this.facebook = true;
    this.facebookColor = false;
  }

  cambiarA(){
    this.arquetipos = false;
    this.arquetiposColor = true;
  }

  cambiarABlanco(){
    this.arquetipos = true;
    this.arquetiposColor = false;
  }

  cambiarE(){
    this.email = false;
    this.emailColor = true;
  }

  cambiarEBlanco(){
    this.email = true;
    this.emailColor = false;
  }


  cambiarL(){
    this.link = false;
    this.linkColor = true;
  }

  cambiarLBlanco(){
    this.link = true;
    this.linkColor = false;
  }


  cambiarI(){
    this.instagram = false;
    this.instagramColor = true;
  }

  cambiarIBlanco(){
    this.instagram = true;
    this.instagramColor = false;
  }

  mostrarCabeza(){
    this.cartaCabeza = !this.cartaCabeza;
    this.cartaTuerca = true;
    this.cartaPantalla = true;
  }

  mostrarTuerca(){
    this.cartaTuerca = !this.cartaTuerca;
    this.cartaCabeza = true;
    this.cartaPantalla = true;
  }

  mostrarPantalla(){
    this.cartaPantalla = !this.cartaPantalla;
    this.cartaTuerca = true;
    this.cartaCabeza = true;
  }

  bloquearScroll(){
    document.body.style.overflowY = 'hidden';

}



  mostrarInfoEmpresas(){

    this.botonEmpresasBlanco = false;
    this.botonEmpresasRojo = true;
    this.infoEmpresas = true;

    if(this.botonEmprendimientosRojo){
      this.espacioRojo = false;
    } else {
      this.espacioRojo = true;
    }

    if(this.botonEmprendimientosRojo){
      this.marginTopDiv = '226.5px';
    } else {
      this.marginTopDiv = '30px';
    }

  }

  ocultarInfoEmpresas(){

    this.botonEmpresasBlanco = true;
    this.botonEmpresasRojo = false;
    this.infoEmpresas = false;

    if(this.botonEmprendimientosRojo){
      this.espacioRojo = true;
    } else {
      this.espacioRojo = false;
    }

    if(this.botonEmprendimientosRojo){
      this.marginTopDiv = '30px';
    } else {
      this.marginTopDiv = '226.5px';
    }
  }

  mostrarInfoEmprendimientos(){

    this.botonEmprendimientosBlanco = false;
    this.botonEmprendimientosRojo = true;
    this.infoEmprendimientos = true;

    if(this.botonEmpresasRojo == true){
      this.espacioRojo = false;
    } else  {
      this.espacioRojo = true;
    }

    if(this.botonEmpresasRojo){
      this.marginTopDiv = '226.5px';
    } else {
      this.marginTopDiv = '30px';
    }

  }

  ocultarInfoEmprendimientos(){

    this.botonEmprendimientosBlanco = true;
    this.botonEmprendimientosRojo = false;
    this.infoEmprendimientos = false;

    if(this.botonEmpresasRojo == false){
      this.espacioRojo = true;
    } else {
      this.espacioRojo = false;
    }
  }

  scrollToSection(){
    const sectionToScrollTo = document.getElementById('contacts');

    if (sectionToScrollTo) {
      const offset = sectionToScrollTo.getBoundingClientRect().top; // Calcula la posición del elemento respecto a la parte superior de la ventana
      const duration = 300; // Duración del desplazamiento en milisegundos
      const start = this.viewportScroller.getScrollPosition(); // Posición de inicio

      let startTime: number;

      // Función de animación para realizar el desplazamiento suave
      const animateScroll = (timestamp: number) => {
        startTime = startTime || timestamp;
        const progress = timestamp - startTime;
        const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        this.viewportScroller.scrollToPosition([start[0], easeInOutQuad(progress / duration) * offset + start[1]]);

        if (progress < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }

  ngOnInit(): void {


    Aos.init()
    window.addEventListener('load', Aos.refresh)

    window.scrollTo(0, 0);

    const animationContainer = document.getElementById('cerebro');

    if (animationContainer) {
      const animation1 = lottie.loadAnimation({ container: animationContainer, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/cerebrito.json' });
      animation1.addEventListener('DOMLoaded', () => {
      });
    }

    const animationContainerOnda = document.getElementById('ondaGris');

    if (animationContainerOnda) {
      const animation1 = lottie.loadAnimation({ container: animationContainerOnda, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/OndaColores.json' });
      animation1.addEventListener('DOMLoaded', () => {
      });
    }

    const animationContainer2 = document.getElementById('ojo');

    if (animationContainer2) {
      const animation2 = lottie.loadAnimation({ container: animationContainer2, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/ojos.json' });
      animation2.addEventListener('DOMLoaded', () => {
      });
    }

    const animationContainer3 = document.getElementById('flecha');

    if (animationContainer3) {
      const animation3 = lottie.loadAnimation({ container: animationContainer3, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/flecha.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });
    }

    const animationContainer22 = document.getElementById('invisub');

    if (animationContainer22) {
      const animation22 = lottie.loadAnimation({ container: animationContainer22, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/invisub.json' });
      animation22.addEventListener('DOMLoaded', () => {
      });


    animation22.setSpeed(0.8);
    }

    const animationContainer2222 = document.getElementById('tx');

    if (animationContainer2222) {

      timer(5400).subscribe(() => {

      const animation63 = lottie.loadAnimation({ container: animationContainer2222, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/tx.json' });

    animation63.addEventListener('DOMLoaded', () => {
    });

    animation63.setSpeed(0.5);

    });

    }



    const animationContainerCrea = document.getElementById('crea');

    if (animationContainerCrea) {
      const animation3 = lottie.loadAnimation({ container: animationContainerCrea, renderer: 'svg', loop: false, autoplay: false, path: 'assets/json/Medio/crea.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      // animation3.setSpeed(0.3);
    }


    const animationCerebro2 = document.getElementById('cerebro2');

    if (animationCerebro2) {
      const animation3 = lottie.loadAnimation({ container: animationCerebro2, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/cerebro2.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.4);
    }


    const animationPluma = document.getElementById('pluma');

    if (animationPluma) {
      const animation3 = lottie.loadAnimation({ container: animationPluma, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/pluma.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.4);
    }


    const animationComillas = document.getElementById('comillas2');

    if (animationComillas) {
      const animations = lottie.loadAnimation({ container: animationComillas, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/comillas2.json' });
      animations.addEventListener('DOMLoaded', () => {
      });
    }


  }


  banderaLinea1 = true;

  banderaLinea2 = true;

  banderaLinea3 = true;

  banderaLinea4 = true;

  banderaLineaInit = true;

  banderaLineaInitC= true;

  @HostListener('window:scroll', ['$event'])
  onWindowScrolls(event: Event) {
        // Obtener la posición actual del scroll en el eje Y
        const scrollYPos = window.scrollY
        // console.log(scrollYPos)

        if (scrollYPos < 1040){
          if (this.banner) {
            this.banner.nativeElement.style.display = 'none';
          }

        } else {
          if (this.banner) {
            this.banner.nativeElement.style.display = 'block';
          }
        }


        if(scrollYPos > 1050 && this.banderaLinea1 == true){

          this.banderaLinea1 = false;

          const animationContainer5 = document.getElementById('somos');

          if (animationContainer5) {
            const animation5 = lottie.loadAnimation({ container: animationContainer5, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/somos.json' });
            animation5.addEventListener('DOMLoaded', () => {
            });

            animation5.setSpeed(0.27333);
          }

          const animationContainer6 = document.getElementById('lineaTexto2');

          if (animationContainer6) {
            const animation6 = lottie.loadAnimation({ container: animationContainer6, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation6.addEventListener('DOMLoaded', () => {
            });

            animation6.setSpeed(0.2);

          }


        }


        if(scrollYPos > 3220 && this.banderaLinea4 == true){

          this.banderaLinea4 = false;

          const animationContainerChico = document.getElementById('mancae1');

          if (animationContainerChico) {
            timer(0).subscribe(() => {

            const animation16 = lottie.loadAnimation({ container: animationContainerChico, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/mancae1.json' });
            animation16.addEventListener('DOMLoaded', () => {
            });

            animation16.setSpeed(0.7);


          });

          }
        }

        if(scrollYPos > 4008){

          if (this.flechasAnal) {
            this.flechasAnal.nativeElement.style.display = 'block';
          }

        }

        if(scrollYPos > 2200){

          if (this.tituloPuente) {
            this.tituloPuente.nativeElement.style.display = 'block';
          }

        }


        if(scrollYPos > 4220){

          if (this.ojoAnal) {
            this.ojoAnal.nativeElement.style.display = 'block';
          }

          if (this.manoTuerca) {
            this.manoTuerca.nativeElement.style.display = 'block';
          }

        }

        if(scrollYPos > 2080 && this.banderaLinea2 == true){

          this.banderaLinea2 = false;

          const animationcabezota = document.getElementById('cabezota');

          if (animationcabezota) {
            const animation5 = lottie.loadAnimation({ container: animationcabezota, renderer: 'svg', loop: false, autoplay: false, path: 'assets/json/cabezota2.json' });
            animation5.addEventListener('DOMLoaded', () => {
            });

            animation5.setSpeed(1);
          }

          const animationbola1 = document.getElementById('bola1');

          if (animationbola1) {
            const animation5 = lottie.loadAnimation({ container: animationbola1, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/op1.json' });
            animation5.addEventListener('DOMLoaded', () => {
            });

            animation5.setSpeed(2);
          }



          const animationContainer7 = document.getElementById('lineaTexto3');

          if (animationContainer7) {
            const animation7 = lottie.loadAnimation({ container: animationContainer7, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation7.addEventListener('DOMLoaded', () => {
            });

            animation7.setSpeed(0.5);

          }

          const animationContainer9 = document.getElementById('lineaTexto5');

          if (animationContainer9) {
            const animation9 = lottie.loadAnimation({ container: animationContainer9, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation9.addEventListener('DOMLoaded', () => {
            });

            animation9.setSpeed(0.2);

          }

          const animationContainer8 = document.getElementById('lineaTexto4');

          if (animationContainer8) {
            const animation8 = lottie.loadAnimation({ container: animationContainer8, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation8.addEventListener('DOMLoaded', () => {
            });

            animation8.setSpeed(0.2);

          }
        }

        if(scrollYPos > 1100 && this.banderaLinea3 == true){

          this.banderaLinea3 = false;

          const animationContainer4 = document.getElementById('lineach');

    if (animationContainer4) {
      const animation4 = lottie.loadAnimation({ container: animationContainer4, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineapeque.json' });
      animation4.addEventListener('DOMLoaded', () => {
      });

      animation4.setSpeed(0.189999);

    }



    }

  }

}