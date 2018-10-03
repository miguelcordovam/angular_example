import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  access_token :string = "";

  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe((fragment: string) => {
      console.log("My hash fragment is here => ", fragment)
    })

  }

  ngOnInit() {
  }

}
