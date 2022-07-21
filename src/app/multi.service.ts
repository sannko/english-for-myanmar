import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ImageViewComponent } from './image-view/image-view.component';

@Injectable({
  providedIn: 'root'
})
export class MultiService {

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private modalController: ModalController) { }

  routerMethod(link, data = { id: null }) {
    this.router.navigate([link], { queryParams: { id: data.id } })
  }

  async imageView(url, name=null) {
    const modalCtrl = await this.modalController.create({
      component: ImageViewComponent,
      componentProps: { props: {url, name}},

    })
    await modalCtrl.present();

  }

 async closeModal() {
  this.modalController.dismiss()
 }


}
