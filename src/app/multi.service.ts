import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MultiService {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  routerMethod(link){
    this.router.navigateByUrl(link)
  }


}
