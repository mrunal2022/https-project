import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({ providedIn: 'root' })
export class AppComponent {
  title = 'practise';
  /*Email: string = "";
  Password: string = "";*/

  loginForm = new FormGroup({
    'email': new FormControl("", Validators.required),
    'password': new FormControl("", Validators.required)


  });



  constructor(public http: HttpClient) {

  }
  onSubmit() {

    const values = this.loginForm.getRawValue();
    this.http.post('https://login-page-angular-618a3-default-rtdb.firebaseio.com/users.json',
      values).subscribe(response => {

        console.log(response);
      });




  }
  onPatch() {
    this.loginForm.patchValue({

      email: 'mrunal@gmail.com',
      password: 'pin'



    })
  }
}
