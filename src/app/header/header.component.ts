import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _services: NewsapiserviceService) { }

  headingdisplay : any = [];

  ngOnInit(): void {

    this._services.topHeading().subscribe((result) =>{
      console.log(result)

      this.headingdisplay = result.articles;
    })
  }

}
