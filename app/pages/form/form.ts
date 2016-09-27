import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import {CustomValidators} from '../validators/CustomValidators';


@Component({
    templateUrl: 'build/pages/form/form.html',
	directives: [FORM_DIRECTIVES]
})

export class FormPage {
    authForm : ControlGroup;
    fNameCtrl : AbstractControl;
    lNameCtrl : AbstractControl;
    fullNameCtrl : AbstractControl;
    fModel : string;
    lModel : string;
    fullNameModel : string;

    constructor(private navController: NavController, private fb: FormBuilder) {

        this.authForm = fb.group({  
            fNameCtrl: ['', Validators.compose([Validators.required])] ,
            lNameCtrl: ['', Validators.compose([Validators.required])] ,
            fullNameCtrl : ['', Validators.compose([Validators.required])] 
        });

          this.fNameCtrl = this.authForm.controls['fNameCtrl'];     
          this.lNameCtrl = this.authForm.controls['lNameCtrl']; 
          this.fullNameCtrl = this.authForm.controls['fullNameCtrl'];  
          this.fModel = "";
          this.lModel = "";
        }
            
          onTap(){
            this.fModel = "";
            this.lModel = "";
          }

         onSubmit() { 
          
            if(this.authForm.valid) {
                alert('Success');
             }
    } 	
}