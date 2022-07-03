import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrammarData } from '../gramma-data';

@Component({
  selector: 'app-courseview',
  templateUrl: './courseview.page.html',
  styleUrls: ['./courseview.page.scss'],
})
export class CourseviewPage implements OnInit {

  grammarData = new GrammarData()

  constructor(private activatedRoute: ActivatedRoute) {

      activatedRoute.queryParams.subscribe(s => {
        console.log(s.id)

       let getData = this.grammarData.courseContent.filter(f => f.id == s.id)

       console.log(getData)

      })

   }

  ngOnInit() {
  }

}
