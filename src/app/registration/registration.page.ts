import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {credentials: FormGroup;

  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router,
    private rc: ReactiveFormsModule
  ) { }
  get email() {
    return this.credentials.get('email');
  }
 
  get password() {
    return this.credentials.get('password');
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  async register() {
    const loading = await this.loadingController.create();
    await loading.present();
 
    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();
    
    if (user) {
      this.router.navigateByUrl('', { replaceUrl: true });
    } else {
      this.showAlert('Registration failed', 'Please try again!');
    }

    
  }
 
  
 
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
