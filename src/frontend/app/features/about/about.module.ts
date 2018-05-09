import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutRoutingModule } from './about.routing';
import { EulaPageComponent, EulaPageContentComponent } from './eula-page/eula-page.component';



@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutPageComponent,
    EulaPageContentComponent,
    EulaPageComponent
  ]
})
export class AboutModule { }

