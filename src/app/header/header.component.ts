import {Component, OnInit} from '@angular/core';
import {MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subcript: Subscription; 
  Log: boolean;
  constructor(private globalService: GlobalService) { 
  }

  ngOnInit() {
    this.Log = this.globalService.getStatusLog();
    this.subcript = this.globalService.cambioStatusLog.subscribe(
      () =>{
        this.Log = this.globalService.getStatusLog();
      });
  }
}
