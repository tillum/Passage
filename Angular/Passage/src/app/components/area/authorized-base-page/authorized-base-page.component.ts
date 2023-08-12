import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ps-authorized-base-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './authorized-base-page.component.html',
  styleUrls: ['./authorized-base-page.component.scss']
})
export class AuthorizedBasePageComponent {

}
