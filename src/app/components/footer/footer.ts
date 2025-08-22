import { Component, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  time: string = '';
  private intervalId: any;

  ngOnInit() {
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateTime() {
    const now = new Date();
    this.time = now.toLocaleString();

  }
}
