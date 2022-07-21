import { Component } from '@angular/core';
import { MultiService } from 'app/multi.service';
import { GrammarData } from './gramma-data';

@Component({
  selector: 'app-grammar',
  templateUrl: 'grammar.page.html',
  styleUrls: ['grammar.page.scss']
})
export class GrammarPage {

  grammarData = new GrammarData()

  constructor(public multiService: MultiService) {}

}
