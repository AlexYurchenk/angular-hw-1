import { Component } from '@angular/core';
import user from '../assets/json/user.json';
import statistic from '../assets/json/statistic.json';
import friends from '../assets/json/friends.json';
import transactions from '../assets/json/transactions.json';

export interface User {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}
export interface Statistic {
  id: string;
  label: string;
  percentage: number;
}
export interface Transaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export interface Friend {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: User = user;
  statistics: Statistic[] = statistic;
  friends: Friend[] = friends;
  transactions: Transaction[] = transactions;
}
