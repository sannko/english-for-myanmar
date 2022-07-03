import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MultiService {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  routerMethod(link, data = {id: null}){
     this.router.navigate([link], {queryParams: {id: data.id}})
  }


}
