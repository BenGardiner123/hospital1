import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor(public NavigationService: NavigationService) { }

  ngOnInit(): void {
  }


  sendSelection(tabToSelect) {
    this.NavigationService.selectTab(tabToSelect);
  }

}