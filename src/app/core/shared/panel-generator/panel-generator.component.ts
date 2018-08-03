import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-panel-generator',
  templateUrl: './panel-generator.component.html',
  styleUrls: ['./panel-generator.component.css']
})
export class PanelGeneratorComponent implements OnInit {
  @Input() panelItem;
  submenuKeys: string[];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.submenuKeys = Object.keys(this.panelItem.submenus)
  }

  onSubmenuClick(submenuTitle: string) {
    // debugger;
    let getRoute = this.panelItem.submenus[submenuTitle];
    console.log("Desitination target: " + getRoute);
    this.router.navigate([getRoute], { relativeTo: this.route });
  }

}
