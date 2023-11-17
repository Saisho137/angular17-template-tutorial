import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: String = "";
  password: String = "";
  apiResponse: any = "";

  profileForm = new FormGroup({
    name: new FormControl(''),
    mail: new FormControl(''),
  });

  handleReactiveSubmit(): void {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.mail
    );
  }

  public validateUser(): void {
    if (!this.email || !this.password) {
      window.alert("You should fill all the fields.")
      return
    }
  }

}
