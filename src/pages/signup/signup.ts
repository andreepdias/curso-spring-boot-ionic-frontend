import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        nome: ['Andre' , [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['andre@dias.com', [Validators.required, Validators.email]],
        tipo: ['1', [Validators.required]],
        cpfOuCnpj: ['07365745908', [Validators.required]],
        senha: ['123', [Validators.required]],
        logradouro: ['Rua Via', [Validators.required]],
        numero: ['25', [Validators.required]],
        complemento: ['Apto 3', []],
        bairro: ['Copacabana', []],
        cep: ['89223130', [Validators.required]],
        telefone1: ['47992662266', [Validators.required]],
        telefone2: ['', []],
        telefone3: ['', []],
        estadoId: ['', [Validators.required]],
        cidadeId: ['', [Validators.required]]
      });
  }

  signupUser(){
    console.log('enviou o form')
  }

}
