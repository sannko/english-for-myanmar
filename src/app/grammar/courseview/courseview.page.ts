import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrammarData } from '../gramma-data';
import { DomSanitizer } from '@angular/platform-browser';
import { MultiService } from 'app/multi.service';

@Component({
  selector: 'app-courseview',
  templateUrl: './courseview.page.html',
  styleUrls: ['./courseview.page.scss'],
})
export class CourseviewPage  {

  grammarData = new GrammarData()

  getData: {id: number, link: string, name: string, questionImage: string, answerImage: string};
  constructor(private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,private multiService: MultiService) {

      activatedRoute.queryParams.subscribe(s => {
 
       this.getData = this.grammarData.courseContent.filter(f => f.id == s.id)[0]

 
      })

   }

  

  videoUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
 

}
