import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared/shared.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: AuthComponent,
    }])
  ],
})
export class AuthModule {}
