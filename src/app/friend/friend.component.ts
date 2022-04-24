import { Component, Input, OnInit } from '@angular/core';
import { Friend } from '../app.component';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent implements OnInit {
  @Input() friend: Friend;
  constructor() {}

  ngOnInit(): void {}
}
