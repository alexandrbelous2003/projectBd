import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NewsService } from './services/http.service';

@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.scss']
})
export class BureauComponent implements OnInit {
  
  private subscription: Subscription;

  constructor(
    private newsService: NewsService,
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.newsService.getData()
      .pipe(
        tap(console.log)
      )
      .subscribe()
    )
  }
}