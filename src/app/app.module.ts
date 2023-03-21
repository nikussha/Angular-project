import { Directive, NgModule } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Customvalidator } from './customvalidator';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { Directiveclass } from './directive';
import { BodyelComponent } from './bodyel/bodyel.component';
import { AnswersDirective } from './answersdirective';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Directiveclass,
    AnswersDirective,
    BodyelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
