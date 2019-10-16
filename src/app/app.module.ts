import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared/shared.module';
import {CoreModule} from './core.module';
import * as fromRoot from './store/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth/store/auth.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot(fromRoot.appReducer),
    EffectsModule.forRoot([
      AuthEffects
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

