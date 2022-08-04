import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductService} from '../services/product.service'
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vmodal',
  templateUrl: './vmodal.page.html',
  styleUrls: ['./vmodal.page.scss'],
})
export class VmodalPage implements OnInit {
  @Input() id: string;
  product: Product = null;

  constructor(private dataService: ProductService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }
 
  ngOnInit() {
    this.dataService.getProductById(this.id).subscribe(res => {
      this.product = res;
    });
  }
 
  
 
  }

