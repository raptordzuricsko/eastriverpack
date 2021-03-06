import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  @Input() name: string;
  @Input() img_path: string;
  constructor() { }

  ngOnInit() {
  }

}
