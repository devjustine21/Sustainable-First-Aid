import { ChangeDetectorRef, Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductService, Product } from 'src/app/services/product.service';
import { VmodalPage } from 'src/app/vmodal/vmodal.page';


@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.page.html',
  styleUrls: ['./volunteers.page.scss'],
})
export class VolunteersPage {
  products: Product[] = [];
 
  constructor(private dataService: ProductService, private cd: ChangeDetectorRef,  private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.dataService.getProducts().subscribe(res => {
      this.products = res;
      this.cd.detectChanges();
    });
  }
 
  
 
  async openProduct(product: Product) {
    const modal = await this.modalCtrl.create({
      component: VmodalPage,
      componentProps: { id: product.id },
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
}