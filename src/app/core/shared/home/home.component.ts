import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus;
  constructor(private sidebarServ: SidebarService) { }
  // logourl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png";

  ngOnInit() {
    this.menus = this.sidebarServ.admin;
    // console.log(this.menus);
  }

}
