import { provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServerModule,  } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
