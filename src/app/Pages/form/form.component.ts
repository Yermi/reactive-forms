import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  profile = new Profile();
  
  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', Validators.required]
  })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    console.log(this.profile);
    
  }

  ngOnInit() {
  }

}

class Profile {
  FirstName: string;
  LastName: string
}