import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SitesService} from '../sites.service';
import {Site} from '../site';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  sites: Site[]

  @Output()
  public selectSite = new EventEmitter();

  constructor(private sitesService: SitesService) { }

  ngOnInit() {
    this.getSites();
  }

  getSites(): void {
    this.sitesService.getSites()
      .subscribe(sites => this.sites = sites)
  }

  filterCategories(value: any) {
    console.log(value);
    this.selectSite.emit(value);
  }
}
