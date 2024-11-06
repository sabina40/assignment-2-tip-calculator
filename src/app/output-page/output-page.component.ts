import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
  styleUrls: ['./output-page.component.css']
})
export class OutputPageComponent implements OnInit {
  cost: number = 0;
  serviceQuality: number = 0;
  roundUp: boolean = false;
  tip: number = 0;
  total: number = 0;

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('tipFormData') || '{}');
    this.cost = parseFloat(data.cost);
    this.serviceQuality = parseFloat(data.serviceQuality);
    this.roundUp = data.roundUp;

    const tipAmount = (this.cost * this.serviceQuality) / 100;
    this.tip = this.roundUp ? Math.ceil(tipAmount) : Math.round(tipAmount * 100) / 100;
    this.total = this.cost + this.tip;
  }
}
