import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import lottie from 'lottie-web';

@Component({
  selector: 'app-footer',
  templateUrl: `footer.component.html`,
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit{


  ngOnInit(): void {
    const animationContainerOnda = document.getElementById('ondaGris');
  
    if (animationContainerOnda) {
      const animation1 = lottie.loadAnimation({ container: animationContainerOnda, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/OndaColores.json' });
      animation1.addEventListener('DOMLoaded', () => {
      });
    }
  }

  link = true;
  linkColor = false;
  whatsapp = true;
  whatsappColor = false;
  email = true;
  emailColor = false;
  facebook = true;
  facebookColor = false;
  instagram = true;
  instagramColor = false;

  cambiarL() {
    this.link = false;
    this.linkColor = true;
  }
  
  cambiarLBlanco() {
    this.link = true;
    this.linkColor = false;
  }
  
  irALink() {
    window.open('https://www.linkedin.com/company/sl-insights-arquetypos', '_blank'); 
  }
  
  cambiarW() {
    this.whatsapp = false;
    this.whatsappColor = true;
  }
  
  cambiarWBlanco() {
    this.whatsapp = true;
    this.whatsappColor = false;
  }
  
  irAWhatsApp() {
    window.open('https://web.whatsapp.com/', '_blank'); 
  }
  
  cambiarE() {
    this.email = false;
    this.emailColor = true;
  }
  
  cambiarEBlanco() {
    this.email = true;
    this.emailColor = false;
  }
  
  irAEmail() {
    window.open('mailto:tu-email@ejemplo.com', '_blank'); 
  }
  
  cambiarF() {
    this.facebook = false;
    this.facebookColor = true;
  }
  
  cambiarFBlanco() {
    this.facebook = true;
    this.facebookColor = false;
  }
  
  irAFacebook() {
    window.open('https://www.facebook.com/SLInsightsyArquetypos', '_blank'); 
  }
  
  cambiarI() {
    this.instagram = false;
    this.instagramColor = true;
  }
  
  cambiarIBlanco() {
    this.instagram = true;
    this.instagramColor = false;
  }
  
  irAInstagram() {
    window.open('https://www.instagram.com/slconsulting_i_a/', '_blank'); 
  }
  
  
}
