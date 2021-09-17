import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  selectedTab: string | null;


  selectTab(tabToSelect) {
    this.selectedTab = tabToSelect;

    console.log("selected tab is now " + this.selectedTab)

    // Go and do other things

  }


}


