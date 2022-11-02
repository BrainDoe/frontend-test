import { Component, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import UiService from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  subscription!: Subscription;
  sideNav: boolean = false;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value: boolean) => (this.sideNav = value));
   }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.uiService.toggleSideNav();
  }
}
