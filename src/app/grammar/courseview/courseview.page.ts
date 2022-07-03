import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrammarData } from '../gramma-data';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-courseview',
  templateUrl: './courseview.page.html',
  styleUrls: ['./courseview.page.scss'],
})
export class CourseviewPage implements OnInit {

  grammarData = new GrammarData()

  getData: {id: number, link: string, name: string, questionImage: string, answerImage: string};
  constructor(private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer) {

      activatedRoute.queryParams.subscribe(s => {
        console.log(s.id)

       this.getData = this.grammarData.courseContent.filter(f => f.id == s.id)[0]

       console.log(this.getData)

      })

   }

  ngOnInit() {
  }

  videoUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
 

}
