import { ChangeDetectorRef, Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, Note } from 'src/app/services/data.service';
import { ModalPage } from 'src/app/modal/modal.page';


@Component({
  selector: 'app-emcontact',
  templateUrl: './emcontact.page.html',
  styleUrls: ['./emcontact.page.scss'],
})
export class EmcontactPage  {

  notes: Note[] = [];
 
  constructor(private dataService: DataService, private cd: ChangeDetectorRef,  private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.dataService.getNotes().subscribe(res => {
      this.notes = res;
      this.cd.detectChanges();
    });
  }
 
  async addNote() {
    const alert = await this.alertCtrl.create({
      header: 'Add Contact',
      inputs: [
        {
          name: 'title',
          placeholder: 'Name',
          type: 'text'
        },
        {
          name: 'text',
          placeholder: 'Contact Number',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Add',
          handler: res => {
            this.dataService.addNote({ text: res.text, title: res.title });
          }
        }
      ]
    });
 
    await alert.present();
  }
 
  async openNote(note: Note) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { id: note.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8
    });
 
    await modal.present();
  }
  phoneNumber = '1234567890';
  call() {
    this.alertCtrl.create({
      header: 'Call Emergency Services',
      subHeader: '',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            window.open(`tel:${this.phoneNumber}`, '_system');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('');
          }
        },
        
      ]
    }).then(res => {
      res.present();
    });
  }
  showConfirm() {
    this.alertCtrl.create({
      header: 'Confirm Alert',
      subHeader: 'Call Emergency Services',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log(`tel:${this.phoneNumber}`, '_system');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Ok');
          }
        },
        
      ]
    }).then(res => {
      res.present();
    });
  }




  
}