import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  links = [
    {title: 'Files', fragment: 'files'},
    {title: 'Images', fragment: 'images'}
  ];

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
